import { sendOrderSuccess } from "@/shared/template/sendOrderSuccess";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: process.env.NODE_ENV === "production" ? true : false,
    port: process.env.NODE_ENV === "production" ? 587 : 465,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transporter.sendMail({
      from: '"From-Morf" <noreply@yourdomain.com>',
      to: process.env.SEND_EMAIL_SUCCESS_INFO,
      subject: `From-Morf / 📝 Оплатили заказ!`,
      html: sendOrderSuccess({
        user: formData.user,
        totalPrice: formData.totalPrice,
        orderId: formData.orderId,
        items: formData.items,
      }),
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
