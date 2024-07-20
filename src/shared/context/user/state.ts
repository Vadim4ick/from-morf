"use client";

import { User } from "@/shared/types/authForm";
import { authForm, clearUser, getMeFx, loginUserFx, updateUserFx } from ".";

export const $user = authForm
  .createStore<User | null>(null)
  .on(getMeFx.doneData, (_, result) => result)
  .on(updateUserFx.doneData, (_, result) => result)
  .on(loginUserFx.doneData, (_, result) => result)
  .on(clearUser, () => null);
