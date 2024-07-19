import { createDomain } from "effector";
import { TypeAuthForm } from "../types/authForm";

const authForm = createDomain();

export const changeRegisterError = authForm.createEvent<boolean>();

export const toggleConfirmPage = authForm.createEvent<boolean>();

export const toggleAuthForm = authForm.createEvent();

export const $regiterError = authForm
  .createStore<boolean>(false)
  .on(changeRegisterError, (_, value) => value)
  .on(toggleAuthForm, () => false);

export const $typeForm = authForm
  .createStore<TypeAuthForm>("auth")
  .on(toggleAuthForm, (store) => {
    if (store === "auth") {
      return "register";
    } else {
      return "auth";
    }
  });

export const $confirm = authForm
  .createStore<boolean>(false)
  .on(toggleConfirmPage, (_, value) => value);
