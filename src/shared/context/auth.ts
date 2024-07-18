import { createDomain } from "effector";
import { TypeAuthForm } from "../types/authForm";

const authForm = createDomain();

export const changeAuthEmail = authForm.createEvent<string>();
export const changeAuthPassword = authForm.createEvent<string>();
export const toggleAuthForm = authForm.createEvent();

export const $authFormEmail = authForm
  .createStore<string>("")
  .on(changeAuthEmail, (_, value) => value)
  .on(toggleAuthForm, () => "");

export const $authFormPassword = authForm
  .createStore<string>("")
  .on(changeAuthPassword, (_, value) => value)
  .on(toggleAuthForm, () => "");

export const $typeForm = authForm
  .createStore<TypeAuthForm>("auth")
  .on(toggleAuthForm, (store) => {
    if (store === "auth") {
      return "register";
    } else {
      return "auth";
    }
  });

// const typeForm = createDomain();

// export const toggleType = typeForm.createEvent();

// export const $currentAuthForm = typeForm
//   .createStore<TypeForm>("auth")
//   .on(toggleType, (state) => (state === "auth" ? "register" : "auth"));
