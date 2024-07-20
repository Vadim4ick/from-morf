"use client";

import { User } from "@/shared/types/authForm";
import { authForm, getMeFx, updateUserFx } from ".";

export const $user = authForm
  .createStore<User | null>(null)
  .on(getMeFx.doneData, (_, result) => result)
  .on(updateUserFx.doneData, (_, result) => result);
