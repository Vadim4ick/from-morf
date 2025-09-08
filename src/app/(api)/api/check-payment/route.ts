import { makeToken } from "@/lib/create-payment";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const terminalKey = process.env.TINKOFF_TERMINAL_KEY;
  const password = process.env.TINKOFF_SECRET_KEY;

  if (!terminalKey || !password) {
    return NextResponse.json(
      { error: "Terminal key or password is not set" },
      { status: 500 },
    );
  }

  const { paymentId } = await req.json();

  const payload = {
    TerminalKey: terminalKey,
    PaymentId: String(paymentId),
  };

  const Token = makeToken(payload, password);

  const res = await fetch("https://securepay.tinkoff.ru/v2/GetState", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, Token }),
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
