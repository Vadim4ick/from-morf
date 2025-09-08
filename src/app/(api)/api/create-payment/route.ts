import { makeToken } from "@/lib/create-payment";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const jwt = cookies().get("token")?.value || undefined;

    if (!jwt) {
      return NextResponse.json(
        { error: "Авторизуйтесь, прежде чем сделать заказ!!" },
        { status: 401 },
      );
    }

    const terminalKey = process.env.TINKOFF_TERMINAL_KEY;
    const password = process.env.TINKOFF_SECRET_KEY;

    if (!terminalKey || !password) {
      return NextResponse.json(
        { error: "Terminal key or password is not set" },
        { status: 500 },
      );
    }

    // T-банк принимает сумму в КОПЕЙКАХ
    const amountInKopecks = Math.round((Number(body.amount) || 0) * 100);

    const payload: Record<string, string | number | boolean> = {
      TerminalKey: terminalKey,
      Amount: amountInKopecks,
      OrderId: String(body.orderId),
      Description: body.description?.slice(0, 140) || "Test order",
      NotificationURL: `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/api/webhook`,
    };

    if (body.successURL) payload.SuccessURL = body.successURL;
    if (body.failURL) payload.FailURL = body.failURL;

    // Token
    const Token = makeToken(payload, password);
    const requestBody = { ...payload, Token };

    const res = await fetch(`https://securepay.tinkoff.ru/v2/Init`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    const data = await res.json();

    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
