import { Order_Items } from "@/graphql/__generated__";
import { User } from "../types/authForm";

export const sendOrderSuccess = ({
  orderId,
  items,
  totalPrice,
  user,
}: {
  orderId: string;
  items: Order_Items[];
  totalPrice: string;
  user: User;
}) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h1 style="color: #2c3e50;">
        Совершена оплата! Номер заказа <b>${orderId}</b>
      </h1>

      <p style="font-size: 16px;">
        Пользователь <b>${user.first_name} ${user.last_name}</b> оплатил заказ на сумму <b>${totalPrice} Р</b>.
      </p>

      <p style="font-size: 16px; margin-top: 10px;">
        Адрес: <b>${user.user_address}</b><br>
        Номер телефона пользователя: <b>${user.phone_number}</b>
      </p>

      <hr style="border: 0; height: 1px; background-color: #ddd; margin: 20px 0;" />

      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <thead>
          <tr>
            <th style="text-align: left; padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">Товар</th>
            <th style="text-align: left; padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">Кол-во штук</th>
            <th style="text-align: left; padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">Размер</th>
            <th style="text-align: left; padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;">Цена (1 шт.)</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item) => `
                <tr>
                  <td style="padding: 8px; border: 1px solid #ddd;">${item.good.name}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${item.count}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${item.size}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${item.good.price} Р</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
};
