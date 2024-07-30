"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getMeFx, loadUser } from "../context/user/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Loader } from "@/components/ui/loader";

import "./../../shared/context/user/init";
import "./../../shared/context/favorites/init";
import "./../../shared/context/basket/init";

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

  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  if (loading) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="z-50 h-screen w-full bg-white">
          <Loader className="absolute left-1/2 top-1/2 size-10" />
        </div>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { Providers };
