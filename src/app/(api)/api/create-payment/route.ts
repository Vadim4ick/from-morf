import { createPayment } from "@/lib/create-payment";
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

    const paymentData = await createPayment({
      description: body.description,
      orderId: body.orderId,
      amount: body.amount,
    });

    return NextResponse.json({ result: paymentData });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
