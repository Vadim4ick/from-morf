import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const reqBody = await req.json();

    const { data } = await axios({
      method: "get",
      url: `https://api.yookassa.ru/v3/payments/${reqBody.paymentId}`,
      auth: {
        username: process.env.YOOKASSA_STORE_ID as string,
        password: process.env.YOOKASSA_API_KEY as string,
      },
    });

    return NextResponse.json({ result: data });
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
