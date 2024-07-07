import Link from "next/link";
import { ProfileIcon } from "@/shared/icons/header/ProfileIcon";
import { LogoIcon } from "@/shared/icons/LogoIcon";
import { FavoritesIcon } from "@/shared/icons/header/FavoritesIcon";
import { BasketIcon } from "@/shared/icons/header/BasketIcon";
import { Burger } from "@/modules/Header/Burger";
import { VariantHeader } from "@/modules/Header/Header";
import clsx from "clsx";

const HeaderContent = ({ variant }: { variant: VariantHeader }) => {
  return (
    <div className="max-w-[1195px] px-[23px] mx-auto h-full">
      <div className="flex items-center h-full justify-between">
        {/* Burger */}
        <Burger variant={variant} />

        {/* Logo */}
        <Link href={"/"}>
          <LogoIcon
            className={clsx("", {
              "text-white": variant === "white",
              "text-[#444444]": variant === "black",
            })}
          />
        </Link>

        {/* Icons */}
        <div className="flex gap-[20px]">
          <ProfileIcon
            className={clsx("text-transparent", {
              "stroke-[#444444]": variant === "black",
              "stroke-white": variant === "white",
            })}
          />

          <FavoritesIcon
            className={clsx("text-transparent", {
              "stroke-[#444444]": variant === "black",
              "stroke-white": variant === "white",
            })}
          />

          <BasketIcon
            className={clsx("text-transparent", {
              "stroke-[#444444]": variant === "black",
              "stroke-white": variant === "white",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export { HeaderContent };
