import { createActivationToken } from "@/lib/utils";
import { createEmailTemplate } from "@/shared/template/verificationCode";
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
    host: "smtp.gmail.com",
    logger: true, // Включает логирование
    debug: true, // Включает отладочные сообщения
    auth: {
      user: "firulvv@gmail.com",
      pass: "xvqu iyta qlxv ogle",
    },
  });

  try {
    const res = await transporter.verify();
    console.log("res", res);
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
      from: '"Message bot" <noreply@yourdomain.com>', // sender address
      to: email, // list of receivers
      subject: `From-Morf / 📝 Подтверждение регистрации`, // Subject line
      html: createEmailTemplate(activationCode), // html body
    });

    // console.log("sendResult", sendResult);

    return NextResponse.json({ status: 200, activationToken: token });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
