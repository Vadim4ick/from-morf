"use client";

import Link from "next/link";
import { LogoIcon } from "@/shared/icons/LogoIcon";
import { FavoritesIcon } from "@/shared/icons/header/FavoritesIcon";
import clsx from "clsx";
import { VariantHeader } from "./Header";
import { Burger } from "./Burger";
import { BasketModal } from "../BasketModal/BasketModal";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { ProfileIcon } from "@/shared/icons/header/ProfileIcon";
import { toggleAuthFormOpen } from "@/shared/context/auth";
import { ProfileModal } from "../ProfileModal";

const HeaderContent = ({ variant }: { variant: VariantHeader }) => {
  const isTablet834 = useMediaQuery(834);

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
        <div
          id="iconsListHeader"
          className="relative flex w-[100px] justify-end gap-[20px]"
        >
          {!isTablet834 && (
            <button onClick={() => toggleAuthFormOpen()}>
              <ProfileIcon
                className={clsx("cursor-pointer text-transparent", {
                  "stroke-darkGrayColor": variant === "black",
                  "stroke-white": variant === "white",
                })}
              />
            </button>
          )}

          <Link href={"/favorites"}>
            <FavoritesIcon
              className={clsx("text-transparent", {
                "stroke-darkGrayColor": variant === "black",
                "stroke-white": variant === "white",
              })}
            />
          </Link>

          <BasketModal variant={variant} />
        </div>

        <ProfileModal />
      </div>
    </div>
  );
};

export { HeaderContent };
