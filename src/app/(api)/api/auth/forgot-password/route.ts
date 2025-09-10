import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // 1. Ищем пользователя в Directus
    const userRes = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users`,
      {
        params: {
          "filter[email][_eq]": email,
        },
      },
    );

    if (!userRes.data.data.length) {
      return NextResponse.json(
        { message: "Пользователь не найден" },
        { status: 404 },
      );
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    // 3. Отправляем письмо
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      secure: process.env.NODE_ENV === "production",
      port: Number(process.env.SMTP_PORT) || 465,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_FRONT_URL}/reset?token=${token}`;

    await transporter.sendMail({
      to: email,
      from: `"fromMorf Support" <${process.env.SMTP_MAIL}>`, // 👈 имя отправителя
      subject: "Восстановление пароля — fromMorf",
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
      <h2 style="color: #111827; text-align: center;">Восстановление пароля</h2>
      
      <p style="font-size: 14px; color: #374151; line-height: 1.5;">
        Здравствуйте,<br><br>
        Мы получили запрос на восстановление пароля для вашей учётной записи <b>fromMorf</b>.
      </p>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${resetUrl}"
          style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 14px;">
          Сбросить пароль
        </a>
      </div>
      
      <p style="font-size: 13px; color: #6b7280; line-height: 1.4;">
        Если вы не запрашивали восстановление пароля — проигнорируйте это письмо.  
        Ссылка действительна в течение 1 часа.
      </p>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

      <p style="font-size: 12px; color: #9ca3af; text-align: center;">
        © ${new Date().getFullYear()} fromMorf. Все права защищены.
      </p>
    </div>
  `,
    });

    return NextResponse.json({
      message: "Ссылка для восстановления отправлена",
    });
  } catch (e) {
    console.error("Ошибка forgot-password", e);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
