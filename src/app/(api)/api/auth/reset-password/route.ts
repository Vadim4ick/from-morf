import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json(
        { message: "Некорректный запрос" },
        { status: 400 },
      );
    }

    // 1. Проверяем токен (он был сгенерен в forgot-password)
    let payload: any;
    try {
      payload = jwt.verify(token, process.env.JWT_SECRET as string);
    } catch {
      return NextResponse.json(
        { message: "Неверный или устаревший токен" },
        { status: 400 },
      );
    }

    const email = payload.email;
    if (!email) {
      return NextResponse.json(
        { message: "В токене нет email" },
        { status: 400 },
      );
    }

    // 2. Получаем пользователя по email
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

    const user = userRes.data.data[0];

    // 3. Обновляем пароль
    await axios.patch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${user.id}`,
      { password },
    );

    return NextResponse.json({ message: "Пароль успешно обновлён" });
  } catch (e) {
    console.error("Ошибка reset-password", e);
    return NextResponse.json({ message: "Ошибка сервера" }, { status: 500 });
  }
}
