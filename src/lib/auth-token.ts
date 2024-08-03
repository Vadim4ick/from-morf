import { $apiBack } from "@/shared/api/api";
import { LoginData } from "@/shared/types/authForm";
import { destroyCookie, parseCookies, setCookie } from "nookies";

export enum EnumTokens {
  ACCESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "token",
}

export const getAccessToken = () => {
  const cookies = parseCookies();

  return cookies.accessToken || null;
};

export const getRefreshToken = () => {
  const cookies = parseCookies();

  return cookies.token || null;
};

export const removeAccessToken = () => {
  destroyCookie(undefined, EnumTokens.ACCESS_TOKEN, { path: "/" });
};

export const removeRefreshToken = () => {
  destroyCookie(undefined, EnumTokens.REFRESH_TOKEN, { path: "/" });
};

export const saveAccessTokenStorage = (accessToken: string) => {
  setCookie(null, EnumTokens.ACCESS_TOKEN, accessToken, {
    maxAge: 300,
    path: "/",
  });
};

export const saveRefreshTokenStorage = (refreshToken: string) => {
  setCookie(null, EnumTokens.REFRESH_TOKEN, refreshToken, {
    maxAge: 86400,
    path: "/",
  });
};

export async function generateTokens() {
  try {
    const token = getAccessToken();
    if (!token) {
      return;
    }

    const res = await $apiBack.post<LoginData>("/auth/refresh", {
      refresh_token: token,
      mode: "cookie",
    });

    if (res.data) {
      saveAccessTokenStorage(res.data.data.access_token);
      saveRefreshTokenStorage(res.data.data.refresh_token);
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
