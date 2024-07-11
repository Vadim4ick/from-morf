"use client";

import { usePathname } from "next/navigation";
import { BlackHeader } from "./BlackHeader";
import { WhiteHeader } from "./WhiteHeader";

export type VariantHeader = "black" | "white";

const Header = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return <WhiteHeader />;
  }

  return <BlackHeader />;
};

export { Header };
