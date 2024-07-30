"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { VariantHeader } from "./Header";
import clsx from "clsx";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useUnit } from "effector-react";
import { $burgerOpen, toggleBurgerOpen } from "@/shared/context/burger";
import Link from "next/link";
import { Arrow } from "@/shared/icons/Arrow";
import Image from "next/image";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import { ReturnIcon } from "@/shared/icons/ReturnIcon";
import { DeliveryIcon } from "@/shared/icons/DeliveryIcon";
import { useGetBurger } from "@/shared/services/getBurger";
import { Loader } from "@/components/ui/loader";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { ProfileIcon } from "@/shared/icons/header/ProfileIcon";
import { toggleAuthFormOpen } from "@/shared/context/auth";

const topVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 3 },
};

const bottomVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -5 },
};

const Burger = ({ variant }: { variant: VariantHeader }) => {
  const burgerOpen = useUnit($burgerOpen);

  const { data, isLoading } = useGetBurger();

  const isDesktop1100 = useMediaQuery(1100);

  useEffect(() => {
    if (burgerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [burgerOpen]);

  return (
    <div className="flex w-[100px]">
      <Sheet
        modal={false}
        open={burgerOpen}
        onOpenChange={() => toggleBurgerOpen()}
      >
        <SheetTrigger>
          <motion.div className="relative h-[10px] w-7">
            <motion.div
              className={clsx("absolute top-0 h-[2px] w-full", {
                "bg-white": variant === "white",
                "bg-darkGrayColor": variant === "black",
              })}
              variants={topVariants}
              animate={burgerOpen ? "open" : "closed"}
            />

            <motion.div
              className={clsx("absolute bottom-0 h-[2px] w-full", {
                "bg-white": variant === "white",
                "bg-darkGrayColor": variant === "black",
              })}
              variants={bottomVariants}
              animate={burgerOpen ? "open" : "closed"}
            />
          </motion.div>
        </SheetTrigger>

        <SheetContent
          customOverlay={true}
          close={false}
          portalElement={
            isDesktop1100 ? document.querySelector("header")! : undefined
          }
          portal={isDesktop1100 ? true : false}
          open={burgerOpen}
          side={"custom"}
          className={cn(
            "desktop1300:-left-[65px] absolute top-[calc(var(--header-height)_+_4px)] h-fit w-full bg-[#F8F8F8] desktop:max-w-[455px]",
          )}
        >
          <SheetHeader className="border-b border-[#CDCDCD]/50 px-[30px] py-[25px]">
            <SheetTitle className="text-start text-xl font-bold uppercase">
              каталог frommorf
            </SheetTitle>
          </SheetHeader>

          {isLoading ? (
            <SheetDescription className="flex items-center justify-center py-5">
              <Loader className="" />
            </SheetDescription>
          ) : (
            <SheetDescription className="flex h-[320px] flex-col overflow-scroll pt-4 text-darkGrayColor">
              {data?.additionalSections &&
                data.additionalSections.map((el) => {
                  return (
                    <Link
                      onClick={() => toggleBurgerOpen()}
                      key={el.id}
                      href={`/goods/additional/${encodeURIComponent(el.title)}`}
                      className="flex items-center justify-between px-4 py-[8px] transition-colors hover:bg-[#E1E1E1]"
                    >
                      <span className="text-lg font-medium">{el.title}</span>

                      <Arrow className="rotate-180" />
                    </Link>
                  );
                })}

              {data?.sectionsDirections &&
                data.sectionsDirections.map((el) => {
                  return (
                    <Link
                      onClick={() => toggleBurgerOpen()}
                      key={el.id}
                      href={`/goods/main/${encodeURIComponent(el.title)}`}
                      className="flex items-center justify-between px-4 py-[8px] transition-colors hover:bg-[#E1E1E1]"
                    >
                      <span className="text-lg font-medium">{el.title}</span>

                      <Arrow className="rotate-180" />
                    </Link>
                  );
                })}
            </SheetDescription>
          )}

          <SheetFooter className="mt-12 flex flex-col gap-2 border-t bg-[#F2F2F2] px-4 py-4 max-mobile:mt-3">
            <Link
              href={"/"}
              className="flex justify-between border border-[#E4E4E4] bg-[#eeeeee]"
            >
              <div className="flex h-fit items-center gap-2 py-[13px] pl-[20px]">
                <p className="text-[22px]">О нас</p>

                <ArrowLink />
              </div>

              <Image
                src={"/burger/imges.png"}
                alt=" "
                width={276}
                height={106}
              />
            </Link>

            <div className="flex gap-[10px]">
              <Link
                href={"/"}
                className="flex h-12 basis-1/2 items-center justify-center gap-2 border border-[#E4E4E4] bg-[#eeeeee]"
              >
                <DeliveryIcon />

                <p className="text-[15px] font-medium">Доставка и оплата</p>
              </Link>

              <Link
                href={"/"}
                className="flex h-12 basis-1/2 items-center justify-center gap-2 border border-[#E4E4E4] bg-[#eeeeee]"
              >
                <ReturnIcon />

                <p className="text-[15px] font-medium">Возврат товара</p>
              </Link>
            </div>

            {isDesktop1100 && (
              <div>
                <button
                  onClick={() => {
                    toggleBurgerOpen();
                    toggleAuthFormOpen();
                  }}
                  className="flex h-12 w-full basis-1/2 items-center justify-center gap-2 border border-[#E4E4E4] bg-[#eeeeee]"
                >
                  <ProfileIcon
                    className={clsx("cursor-pointer text-transparent", {
                      "stroke-darkGrayColor": variant === "black",
                      "stroke-white": variant === "white",
                    })}
                  />

                  <p className="text-[15px] font-medium">Личный кабинет</p>
                </button>
              </div>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { Burger };
