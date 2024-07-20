"use client";

import {
  saveAccessTokenStorage,
  saveRefreshTokenStorage,
} from "@/lib/auth-token";
import { $apiBack } from "@/shared/api/api";
import { LoginData, User } from "@/shared/types/authForm";
import axios from "axios";
import { createDomain, createEffect } from "effector";

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
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          address: userData.address,
          phone: userData.phone,
          avatar: userData.avatar,
        },
      );

      return data.data;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);

export const loginUserFx = createEffect(
  async ({ email, password }: { email: string; password: string }) => {
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

      return dataUser;
    } catch (error) {
      console.log((error as Error).message);
    }
  },
);

export const authForm = createDomain();

export const loadUser = authForm.createEvent();
export const updateUser = authForm.createEvent<{ userData: Partial<User> }>();
export const loginUser = authForm.createEvent<{
  email: string;
  password: string;
}>();

export const clearUser = authForm.createEvent();
