"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { VariantHeader } from "./Header";
import clsx from "clsx";

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

  return (
    <motion.button
      onClick={() => setOpen(!open)}
      className="relative h-[10px] w-7"
    >
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
  );
};

export { Burger };
