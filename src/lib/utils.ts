import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt, { VerifyErrors } from "jsonwebtoken";
import { User } from "@/shared/types/authForm";

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
  return `http://localhost:8055/assets/${img}`;
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
