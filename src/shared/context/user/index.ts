"use client";

import {
  saveAccessTokenStorage,
  saveRefreshTokenStorage,
} from "@/lib/auth-token";
import { $apiBack } from "@/shared/api/api";
import { LoginData, User } from "@/shared/types/authForm";
import axios from "axios";
import { createDomain, createEffect } from "effector";
import { changeLoginError } from "../auth";
import { toast } from "sonner";

export const getMeFx = createEffect(async () => {
  try {
    const { data } = await $apiBack.get<{ data: User }>(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/users/me`,
    );

    return data.data;
  } catch (error) {
    console.log("err", (error as Error).message);
  }
});

export const updateUserFx = createEffect(
  async ({ userData }: { userData: Partial<User> }) => {
    try {
      const { data } = await $apiBack.patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userData.id}`,
        {
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          user_address: userData.user_address,
          phone_number: userData.phone_number,
          avatar: userData.avatar,
        },
      );

      toast.success("Данные успешно обновлены!");

      return data.data;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);

export const loginUserFx = createEffect(
  async ({
    email,
    password,
    message = "auth",
  }: {
    email: string;
    password: string;
    message?: "auth" | "register";
  }) => {
    try {
      const { data } = await axios.post<LoginData>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          email: email,
          password: password,
        },
      );

      saveAccessTokenStorage(data.data.access_token);
      saveRefreshTokenStorage(data.data.refresh_token);

      const dataUser = await getMeFx();

      if (message === "auth") {
        toast.success("Успешная авторизация!");
      } else {
        toast.success("Успешная регистрация!");
      }
      return dataUser;
    } catch (error) {
      console.log((error as Error).message);
      changeLoginError(true);

      setTimeout(() => {
        changeLoginError(false);
      }, 2000);
      throw new Error((error as Error).message);
    }
  },
);

export const authForm = createDomain();

export const loadUser = authForm.createEvent();
export const updateUser = authForm.createEvent<{ userData: Partial<User> }>();
export const loginUser = authForm.createEvent<{
  email: string;
  password: string;
  message?: "auth" | "register";
}>();

export const clearUser = authForm.createEvent();
