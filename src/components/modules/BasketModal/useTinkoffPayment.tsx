"use client";
import { useEffect, useState } from "react";

export function useTinkoffPayment() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // если скрипт уже есть – не добавляем повторно
    if (document.getElementById("tinkoffScript")) {
      setIsReady(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "tinkoffScript";
    script.src = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";
    script.async = true;
    script.onload = () => setIsReady(true);
    document.body.appendChild(script);
  }, []);

  const pay = (amount: number, description: string) => {
    if (!isReady) {
      alert("Платёжная форма ещё загружается, попробуйте через секунду");
      return;
    }

    // вызываем глобальный объект из window
    (window as any).tinkoff.createPayment({
      TerminalKey: "1757137386548DEMO", // DEMO ключ
      Amount: amount * 100, // сумма в копейках
      OrderId: String(Date.now()),
      Description: description,
      SuccessURL: "http://localhost:3000/success",
      FailURL: "http://localhost:3000/fail",
      Receipt: {
        Email: "test@example.com",
        Phone: "+79999999999",
        Taxation: "usn_income",
        Items: [
          {
            Name: description,
            Price: amount * 100,
            Quantity: 1,
            Amount: amount * 100,
            Tax: "none",
          },
        ],
      },
    });
  };

  return { pay, isReady };
}
