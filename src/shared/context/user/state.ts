"use client";

import { User } from "@/shared/types/authForm";
import { authForm, getMeFx } from ".";

export const $user = authForm
  .createStore<User | null>(null)
  .on(getMeFx.doneData, (_, result) => result);
