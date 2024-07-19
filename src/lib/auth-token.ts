import { $apiBack } from "@/shared/api/api";
import { LoginData } from "@/shared/types/authForm";
import { AxiosError } from "axios";
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

export const saveAccessTokenStorage = (accessToken: string) => {
  setCookie(null, EnumTokens.ACCESS_TOKEN, accessToken, {
    maxAge: 900000,
    path: "/",
  });
};

export const saveRefreshTokenStorage = (refreshToken: string) => {
  setCookie(null, EnumTokens.REFRESH_TOKEN, refreshToken, {
    maxAge: 900000,
    path: "/",
  });
};

export const removeFromStorage = () => {
  destroyCookie(undefined, EnumTokens.ACCESS_TOKEN);
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
    // @ts-ignore
    if ((error as AxiosError).response?.data?.redirect) {
      // @ts-ignore
      window.location.href = (error as AxiosError).response?.data?.redirect;
    }
    throw new Error((error as Error).message);
  }
}
