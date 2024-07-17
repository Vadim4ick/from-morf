import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const email = formData.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Message bot"<your@gmail.com>', // sender address
      to: email, // list of receivers
      subject: `Сообщение от From-Morf`, // Subject line
      // text: JSON.stringify(message), // plain text body
      html: `
        code 4122
      `, // html body
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
