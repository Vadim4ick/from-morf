"use client";

import { ReactNode, useEffect } from "react";
import { authQuery } from "../queries/authQueries";
import { useUnit } from "effector-react";
import { $user } from "../context/user";

const Providers = ({ children }: { children: ReactNode }) => {
  const user = useUnit($user);

  console.log(user);

  useEffect(() => {
    authQuery.me();
  }, []);

  return <>{children}</>;
};

export { Providers };
