import { createActivationToken } from "@/lib/utils";
import { createEmailTemplate } from "@/shared/template/verificationCode";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const email = formData.email;
  const password = formData.password;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: false,
    port: 587,
    // secure: process.env.NODE_ENV === "production" ? true : false,
    // port: process.env.NODE_ENV === "production" ? 587 : 465,
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
