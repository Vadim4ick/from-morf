import { createDomain } from "effector";
import { User } from "../types/authForm";

const authForm = createDomain();

export const setUser = authForm.createEvent<User>();

export const $user = authForm
  .createStore<User | null>(null)
  .on(setUser, (_, value) => value);
