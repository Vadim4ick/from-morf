"use client";

import Link from "next/link";
import { LogoIcon } from "@/shared/icons/LogoIcon";
import { FavoritesIcon } from "@/shared/icons/header/FavoritesIcon";
import clsx from "clsx";
import { VariantHeader } from "./Header";
import { Burger } from "./Burger";
import { ProfileModal } from "../ProfileModal";
import { BasketModal } from "../BasketModal/BasketModal";
import { useAuth } from "@/shared/hooks/useAuth.hooks";
import { useUnit } from "effector-react";
import { getMeFx } from "@/shared/context/user";
import { Loader } from "@/components/ui/loader";

const HeaderContent = ({ variant }: { variant: VariantHeader }) => {
  const { isAuth } = useAuth();
  const isLoading = useUnit(getMeFx.pending);

  return (
    <div className="mx-auto h-full max-w-[1195px] px-[23px]">
      <div className="relative flex h-full items-center justify-between">
        {/* Burger */}
        <Burger variant={variant} />

        {/* Logo */}
        <Link href={"/"}>
          <LogoIcon
            className={clsx("", {
              "text-white": variant === "white",
              "text-darkGrayColor": variant === "black",
            })}
          />
        </Link>

        {/* Icons */}
        <div className="relative flex gap-[20px]">
          <ProfileModal variant={variant} />

          <Link href={"/favorites"}>
            <FavoritesIcon
              className={clsx("text-transparent", {
                "stroke-darkGrayColor": variant === "black",
                "stroke-white": variant === "white",
              })}
            />
          </Link>

          {isLoading && <Loader />}
          {isAuth && <BasketModal variant={variant} />}
        </div>
      </div>
    </div>
  );
};

export { HeaderContent };
