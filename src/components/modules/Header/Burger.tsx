"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { VariantHeader } from "./Header";
import clsx from "clsx";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const topVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: 45, translateY: 3 },
};

const bottomVariants = {
  closed: { rotate: 0, translateY: 0 },
  open: { rotate: -45, translateY: -5 },
};

const Burger = ({ variant }: { variant: VariantHeader }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div className="flex w-[100px]">
      <Sheet modal={false} open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <motion.button className="relative h-[10px] w-7">
            <motion.div
              className={clsx("absolute top-0 h-[2px] w-full", {
                "bg-white": variant === "white",
                "bg-darkGrayColor": variant === "black",
              })}
              variants={topVariants}
              animate={open ? "open" : "closed"}
            />

            <motion.div
              className={clsx("absolute bottom-0 h-[2px] w-full", {
                "bg-white": variant === "white",
                "bg-darkGrayColor": variant === "black",
              })}
              variants={bottomVariants}
              animate={open ? "open" : "closed"}
            />
          </motion.button>
        </SheetTrigger>

        <SheetContent
          customOverlay={true}
          close={false}
          side={"left"}
          className={cn(
            "left-[50px] top-[100px] h-fit w-full desktop:max-w-[505px]",
          )}
        >
          <div className="max-desktop:px-[50px] max-mobile:px-0">
            <div className="flex flex-col gap-8 pb-[25px] max-desktop:gap-4 max-mobileSmall:pr-4">
              <h2
                className={cn(
                  "pl-[44px] text-lg font-medium uppercase max-desktop:text-center",
                )}
              >
                Таблица размеров
              </h2>

              <p
                className={cn(
                  "w-full max-desktop:text-center desktop:max-w-[323px]",
                )}
              >
                Найдите в таблице параметры, близкие к вашим, чтобы определить
                свой размер.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { Burger };
