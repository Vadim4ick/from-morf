import { createActivationToken } from "@/lib/utils";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  console.log("Start");

  const email = formData.email;
  const password = formData.password;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  console.log("transporter", transporter);

  try {
    const { token, activationCode } = await createActivationToken(
      email,
      password,
    );

    console.log("activationCode", activationCode);

    await transporter.sendMail({
      from: "Message bot", // sender address
      to: email, // list of receivers
      subject: `Сообщение от From-Morf`, // Subject line
      // text: JSON.stringify(message), // plain text body
      html: `
       Код будет действителен в течении 5 минут. 
       
       Code ${activationCode}
      `, // html body
    });

    console.log("End");

    return NextResponse.json({ status: 200, activationToken: token });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
