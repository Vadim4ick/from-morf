import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { User } from "@/shared/types/authForm";
import { Basket } from "@/shared/context/basket";
import { Order_Items } from "@/graphql/__generated__";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// create activation token
export async function createActivationToken(email: string, password: string) {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

  const token = jwt.sign(
    {
      email,
      password,
      activationCode,
    },
    "JWT_SECRET_FROM-MORF" as string,
    {
      expiresIn: "5m",
    },
  );

  return { token, activationCode };
}

export async function verifyActivationToken(token: string) {
  let jwtError = null;

  await jwt.verify(
    token,
    "JWT_SECRET_FROM-MORF" as string,
    async (err: VerifyErrors | null) => {
      if (err) {
        jwtError = err;
      }
    },
  );

  if (Boolean(jwtError)) {
    return {
      message: "Unauthorized",
      status: 401,
    };
  }

  return { status: 200 };
}

export const pathImage = (img: string) => {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/${img}`;
};

export const parseJwt = (token: string) =>
  JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());

export const visibleNameFn = (user: User | null) => {
  if (user?.name) {
    return user.surname ? `${user.name} ${user.surname}` : user.name;
  }

  return user?.email;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

export const parsePrice = (formattedPrice: string): number => {
  // Удаляем все пробелы и заменяем запятую на точку
  const normalizedPrice = formattedPrice.replace(/\s/g, "").replace(",", ".");
  // Преобразуем строку в число
  return parseFloat(normalizedPrice);
};

export const getPluralForm = (count: number) => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "товар";
  } else if (
    [2, 3, 4].includes(count % 10) &&
    ![12, 13, 14].includes(count % 100)
  ) {
    return "товара";
  } else {
    return "товаров";
  }
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const discountPrice = (
  discount: number,
  price: number,
  format = true,
) => {
  if (format) {
    return formatPrice(Math.floor(price * (1 + discount / 100)));
  }

  return Math.floor(price * (1 + discount / 100));
};

type BasketItem = {
  totalPrice: number;
  discount: number;
};

type OrderItem = {
  good: {
    price: number;
  };
  discount: number;
};

type Item = BasketItem | OrderItem;

const isOrderItem = (item: Item): item is OrderItem => {
  return (item as OrderItem).good !== undefined;
};

const getItemPrice = (item: Item) => {
  if (isOrderItem(item)) {
    return item.good.price;
  }
  return item.totalPrice;
};

export const sumTotalCurrentPriceBasket = (basket: readonly Item[]) => {
  return formatPrice(
    basket.reduce((acc, current) => acc + getItemPrice(current), 0),
  );
};

export const sumTotalAllPriceBasket = (basket: readonly Item[]) => {
  const newArr = basket.map((item) => {
    return discountPrice(item.discount, getItemPrice(item), false);
  });

  const totalSum = newArr.reduce((acc, current) => +acc + +current, 0);

  return formatPrice(+totalSum);
};

export const totalDiscount = (basket: readonly Item[]) => {
  const priceDiscount = parsePrice(sumTotalAllPriceBasket(basket));
  const priceCurrent = parsePrice(sumTotalCurrentPriceBasket(basket));

  return formatPrice(
    Math.round(Math.abs(((priceCurrent - priceDiscount) / priceCurrent) * 100)),
  );
};

// export const sumTotalCurrentPriceBasket = (basket: Basket[]) => {
//   return formatPrice(
//     basket.reduce((acc, current) => acc + current.totalPrice, 0),
//   );
// };

// export const sumTotalAllPriceBasket = (basket: Basket[]) => {
//   const newArr = basket.map((item) => {
//     return discountPrice(item.discount, item.totalPrice, false);
//   });

//   const totalSum = newArr.reduce((acc, current) => +acc + +current, 0);

//   return formatPrice(+totalSum);
// };

// export const totalDiscount = (basket: Basket[]) => {
//   const priceDiscount = parsePrice(sumTotalAllPriceBasket(basket));
//   const priceCurrent = parsePrice(sumTotalCurrentPriceBasket(basket));

//   return formatPrice(
//     Math.round(Math.abs(((priceCurrent - priceDiscount) / priceCurrent) * 100)),
//   );
// };

// =====

// export const sumTotalCurrentPriceBasket2 = (basket: readonly Order_Items[]) => {
//   return formatPrice(
//     basket.reduce((acc, current) => acc + current.good.price, 0),
//   );
// };

// export const sumTotalAllPriceBasket2 = (basket: readonly Order_Items[]) => {
//   const newArr = basket.map((item) => {
//     return discountPrice(item.discount, item.good.price, false);
//   });

//   const totalSum = newArr.reduce((acc, current) => +acc + +current, 0);

//   return formatPrice(+totalSum);
// };

// export const totalDiscount2 = (basket: readonly Order_Items[]) => {
//   const priceDiscount = parsePrice(sumTotalAllPriceBasket2(basket));
//   const priceCurrent = parsePrice(sumTotalCurrentPriceBasket2(basket));

//   return formatPrice(
//     Math.round(Math.abs(((priceCurrent - priceDiscount) / priceCurrent) * 100)),
//   );
// };
