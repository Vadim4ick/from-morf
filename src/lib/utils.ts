import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import jwt, { VerifyErrors } from "jsonwebtoken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// create activation token
export async function createActivationToken(email: string) {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

  const token = jwt.sign(
    {
      email,
      activationCode,
    },
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    {
      expiresIn: "1m",
    },
  );

  return { token, activationCode };
}

export function verifyActivationToken(token: string) {
  let jwtError = null;

  const decoded = jwt.verify(
    token,
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
    async (err: VerifyErrors | null) => {
      if (err) {
        jwtError = err;
      }
    },
  );

  if (jwtError) {
    return {
      message: "Unauthorized",
      status: 401,
    };
  }

  // Если токен действителен, decoded будет содержать полезную нагрузку токена
  console.log("Token is valid:", decoded);

  return decoded;
}

export const parseJwt = (token: string) =>
  JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
