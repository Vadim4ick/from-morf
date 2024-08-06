import { gql } from "@/graphql/client";
import { Basket } from "../context/basket";

interface Props {
  user_id: string;
  totalPrice: number;
  discount: number;
  discountPrice: number;
  basket: Basket[];
}

export const processOrder = async (props: Props) => {
  const { basket, discount, discountPrice, totalPrice, user_id } = props;

  try {
    // // Создание заказа
    const orderId = await gql.CreateOrder({
      user_id: user_id,
      total_price: totalPrice,
      discount: discount,
      discountPrice: discountPrice,
    });

    // // Добавление товаров в заказ
    for (const item of basket) {
      await gql.CreateOrderItem({
        count: item.count,
        size: item.size,
        good_id: Number(item.id),
        order_id: orderId.create_orders_item.id,
        discount: item.discount,
      });
    }

    return { success: true, orderId: orderId.create_orders_item.id };
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false };
  }
};

export const updateStatus = async (
  id: string,
  status: "PENDING" | "SUCCESS",
) => {
  try {
    // // Создание заказа
    return await gql.UpdateStatusOrder({
      id: id,
      status: status,
    });
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false };
  }
};
