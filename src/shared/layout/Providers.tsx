"use client";

import { ReactNode, useEffect, useState } from "react";
import { useUnit } from "effector-react";
import { getMeFx, loadUser } from "../context/user/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Loader } from "@/components/ui/loader";

import "./../../shared/context/user/init";
import "./../../shared/context/favorites/init";

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
        <div className="flex h-full w-full items-center justify-center">
          <Loader className="size-10" />
        </div>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { Providers };
