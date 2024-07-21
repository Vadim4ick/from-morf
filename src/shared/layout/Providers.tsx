"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getMeFx, loadUser } from "../context/user/index";

import { Loader } from "@/components/ui/loader";

import "./../../shared/context/user/init";

const Providers = ({ children }: { children: ReactNode }) => {
  const handleLoadUserFx = useUnit(loadUser);
  const spinner = useUnit(getMeFx.pending);

  const [loading, setLoading] = useState(true);

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
