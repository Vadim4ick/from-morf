import axios from "axios";

export interface PaymentDetails {
  description: string;
  orderId: string | number;
  amount: number;
}

export async function createPayment(details: PaymentDetails) {
  const { data } = await axios({
    method: "post",
    url: "https://api.yookassa.ru/v3/payments",
    headers: {
      "Content-Type": "application/json",
      "Idempotence-Key": Date.now(),
    },
    auth: {
      username: process.env.YOOKASSA_STORE_ID as string,
      password: process.env.YOOKASSA_API_KEY as string,
    },
    data: {
      amount: {
        value: details.amount,
        currency: "RUB",
      },
      confirmation: {
        type: "redirect",
        return_url: process.env.NEXT_PUBLIC_FRONT_URL as string,
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
    },
  });

  return { data };
}
