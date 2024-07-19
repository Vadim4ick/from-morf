"use client";

import { usePathname } from "next/navigation";
import { BlackHeader } from "./BlackHeader";
import { WhiteHeader } from "./WhiteHeader";
import { useUnit } from "effector-react";
import { $confirm } from "@/shared/context/auth";

export type VariantHeader = "black" | "white";

const Header = () => {
  const pathname = usePathname();
  const [confirm] = useUnit([$confirm]);

  if (pathname === "/" && !confirm) {
    return <WhiteHeader />;
  }

  return <BlackHeader />;
};

export { Header };
