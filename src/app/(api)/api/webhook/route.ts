import { NextRequest, NextResponse } from "next/server";
import { makeToken, Primitive } from "@/lib/create-payment"; // твоя функция расчёта токена
import { updateStatus } from "@/shared/services/processOreder";
import { authQuery } from "@/shared/queries/authQueries";
import { gql } from "@/graphql/client";

export const runtime = "nodejs";

async function markOrderStatus(
  orderId: string,
  status: "SUCCESS" | "AUTHORIZED" | "FAILED",
) {
  await updateStatus(orderId, status);
}

// ===========================================

type TinkoffNotification = {
  TerminalKey: string;
  OrderId: string; // твой ID заказа
  PaymentId: number | string; // ID платежа в T-банке
  Success: boolean;
  Status:
    | "NEW"
    | "FORM_SHOWED"
    | "AUTHORIZED"
    | "CONFIRMED"
    | "CANCELED"
    | "REJECTED"
    | "REVERSED"
    | "REFUNDED"
    | string;
  Amount: number; // В КОПЕЙКАХ
  Token: string;
  [k: string]: unknown;
};

async function readJSON(req: NextRequest) {
  const text = await req.text(); // важно: читаем сырое тело
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const secret = process.env.TINKOFF_SECRET_KEY;
  if (!secret) {
    return new NextResponse("missing secret", { status: 500 });
  }

  const body = (await readJSON(req)) as TinkoffNotification | null;
  if (!body) return new NextResponse("bad json", { status: 400 });

  // 1) валидация подписи
  const incoming = body.Token;
  const expected = makeToken(body as Record<string, Primitive>, secret);
  if (!incoming || incoming !== expected) {
    return new NextResponse("invalid token", { status: 400 });
  }

  const {
    OrderId: orderId,
    PaymentId: paymentId,
    Amount: amount,
    Status,
    Success,
  } = body;

  try {
    if (!orderId) {
      return new NextResponse("missing OrderId", { status: 400 });
    }

    if (Status === "AUTHORIZED" && Success) {
      await markOrderStatus(orderId, "AUTHORIZED");
    } else if (Status === "CONFIRMED" && Success) {
      await markOrderStatus(orderId, "SUCCESS");

      const { orders_by_id } = await gql.GetOrderById({ id: orderId });
      const orderItems = orders_by_id.items;
      const totalPrice = orders_by_id.totalPrice;
      const user = orders_by_id.user;

      // письмо — с данными из заказа (не user!):
      await authQuery
        .sendMailSuccessOrder({
          orderId,
          totalPrice: totalPrice,
          items: orderItems,
          user: user, // <-- из заказа
        })
        .catch(() => {});
    } else if (
      ["REFUNDED", "REVERSED", "CANCELED", "REJECTED"].includes(Status)
    ) {
      await markOrderStatus(orderId, "FAILED");
    }

    return new NextResponse("OK", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (e) {
    console.error("Webhook error:", e);
    return new NextResponse("OK", { status: 200 });
  }
}
