"use client";

import { Footer } from "@/components/modules/Footer/Footer";
import { Header } from "@/components/modules/Header/Header";
import { useUnit } from "effector-react";
import { $confirm } from "../context/auth";
import ConfirmationPage from "@/pages/ConfirmationPage";
import { Toaster } from "sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [confirm] = useUnit([$confirm]);

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
