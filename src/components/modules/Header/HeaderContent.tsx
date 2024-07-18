import Link from "next/link";
import { LogoIcon } from "@/shared/icons/LogoIcon";
import { FavoritesIcon } from "@/shared/icons/header/FavoritesIcon";
import { BasketIcon } from "@/shared/icons/header/BasketIcon";
import clsx from "clsx";
import { VariantHeader } from "./Header";
import { Burger } from "./Burger";
import { ProfileModal } from "../ProfileModal";

const HeaderContent = ({ variant }: { variant: VariantHeader }) => {
  return (
    <div className="mx-auto h-full max-w-[1195px] px-[23px]">
      <div className="flex h-full items-center justify-between">
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

          <FavoritesIcon
            className={clsx("text-transparent", {
              "stroke-darkGrayColor": variant === "black",
              "stroke-white": variant === "white",
            })}
          />

          <BasketIcon
            className={clsx("text-transparent", {
              "stroke-darkGrayColor": variant === "black",
              "stroke-white": variant === "white",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export { HeaderContent };
