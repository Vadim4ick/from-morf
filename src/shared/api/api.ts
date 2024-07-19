import { getAccessToken, removeFromStorage } from "@/lib/auth-token";
import axios from "axios";
import { authQuery } from "../queries/authQueries";

export const $apiFront = axios.create({
  baseURL: "",
});

export const $apiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

$apiBack.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

$apiBack.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await authQuery.refresh();

        return $apiBack.request(originalRequest);
      } catch (error) {
        // if (errorCatch(error as AxiosError) === "jwt expired")
        // removeFromStorage();
      }
    }
    throw error;
  },
);
