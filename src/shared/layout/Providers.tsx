"use client";

import { ReactNode, useEffect } from "react";
import { useUnit } from "effector-react";
import { loadUser } from "../context/user/index";
import { $user } from "../context/user/state";

import "./../../shared/context/user/init";

const Providers = ({ children }: { children: ReactNode }) => {
  const user = useUnit($user);
  const handleLoadUserFx = useUnit(loadUser);

  console.log(user);

  useEffect(() => {
    handleLoadUserFx();
  }, [handleLoadUserFx]);

  return <>{children}</>;
};

export { Providers };
