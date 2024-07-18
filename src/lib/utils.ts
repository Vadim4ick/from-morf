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

export const parseJwt = (token: string) =>
  JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
