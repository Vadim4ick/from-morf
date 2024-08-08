"use client";

import { Footer } from "@/components/modules/Footer/Footer";
import { Header } from "@/components/modules/Header/Header";
import { useUnit } from "effector-react";
import { $confirm } from "../context/auth";
import ConfirmationPage from "@/pages/ConfirmationPage";
import { Toaster } from "sonner";
import { useEffect } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [confirm] = useUnit([$confirm]);

  useEffect(() => {
    fetch("/api/cron-job")
      .then((response) => response.text())
      .then((data) => console.log(data));
  }, []);

  if (confirm) {
    return <ConfirmationPage />;
  }

  return (
    <div className="flex h-full flex-col">
      <Header />

      <main className="grow">{children}</main>

      <Footer />

      <Toaster richColors duration={2000} />
    </div>
  );
};

export { MainLayout };
