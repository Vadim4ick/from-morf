"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getMeFx, loadUser } from "../context/user/index";
// import { $user } from "../context/user/state";

import "./../../shared/context/user/init";
import { Loader } from "@/components/ui/loader";

const Providers = ({ children }: { children: ReactNode }) => {
  // const user = useUnit($user);
  const handleLoadUserFx = useUnit(loadUser);
  const spinner = useUnit(getMeFx.pending);

  const [loading, setLoading] = useState(true);

  // console.log(user);

  useEffect(() => {
    handleLoadUserFx();
  }, [handleLoadUserFx]);

  useEffect(() => {
    if (!spinner) {
      setLoading(false); // отключаем состояние загрузки, когда эффект завершён
    }
  }, [spinner]);

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader className="size-10" />
      </div>
    );
  }

  return <>{children}</>;
};

export { Providers };
