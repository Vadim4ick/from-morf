"use client";

import { useUnit } from "effector-react";
import { $user } from "../context/user/state";

const useAuth = () => {
  const user = useUnit($user);

  let isAuth = null;

  if (user) {
    isAuth = true;
  } else {
    isAuth = false;
  }

  return { isAuth };
};

export { useAuth };
