import { createDomain } from "effector";
import { TypeAuthForm } from "../types/authForm";

const authForm = createDomain();

export const changeAuthEmail = authForm.createEvent<string>();
export const changeAuthPassword = authForm.createEvent<string>();

export const changeRegisterError = authForm.createEvent<boolean>();

export const resetAuthForm = authForm.createEvent();

export const toggleAuthForm = authForm.createEvent();

export const $authFormEmail = authForm
  .createStore<string>("")
  .on(changeAuthEmail, (_, value) => value)
  .on(toggleAuthForm, () => "")
  .on(resetAuthForm, () => "");

export const $authFormPassword = authForm
  .createStore<string>("")
  .on(changeAuthPassword, (_, value) => value)
  .on(toggleAuthForm, () => "")
  .on(resetAuthForm, () => "");

export const $regiterError = authForm
  .createStore<boolean>(false)
  .on(changeRegisterError, (_, value) => value)
  .on(toggleAuthForm, () => false)
  .on(resetAuthForm, () => false);

export const $typeForm = authForm
  .createStore<TypeAuthForm>("auth")
  .on(toggleAuthForm, (store) => {
    if (store === "auth") {
      return "register";
    } else {
      return "auth";
    }
  });
