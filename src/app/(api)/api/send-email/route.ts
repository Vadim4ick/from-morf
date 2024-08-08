import { createActivationToken } from "@/lib/utils";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const email = formData.email;
  const password = formData.password;

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   host: process.env.SMTP_HOST,
  //   secure: false, // true for 465, false for other ports
  //   auth: {
  //     user: process.env.SMTP_MAIL,
  //     pass: process.env.SMTP_PASS,
  //   },
  //   logger: true,
  // });

  //   SMTP_HOST=smtp.gmail.com
  // SMTP_MAIL=firulvv@gmail.com
  // SMTP_PASS=xvqu iyta qlxv ogle

  const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    service: "gmail",
    logger: true, // Включает логирование
    debug: true, // Включает отладочные сообщения
    auth: {
      user: "firulvv@gmail.com",
      pass: "xvqu iyta qlxv ogle",
    },
  });

  try {
    const testResult = await transporter.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const { token, activationCode } = await createActivationToken(
      email,
      password,
    );

    const sendResult = await transporter.sendMail({
      from: "Message bot", // sender address
      to: email, // list of receivers
      subject: `Сообщение от From-Morf`, // Subject line
      text: "Привет", // plain text body
      // html: `
      //  Код будет действителен в течении 5 минут.

      //  Code ${activationCode}
      // `, // html body
    });

    console.log("sendResult", sendResult);

    return NextResponse.json({ status: 200, activationToken: token });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
