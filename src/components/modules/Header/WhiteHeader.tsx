import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HeaderContent } from "./HeaderContent";
import { useUnit } from "effector-react";
import { $burgerOpen } from "@/shared/context/burger";
import { getMeFx } from "@/shared/context/user";

const WhiteHeader = () => {
  const scrollRef = useRef(null);
  const burgerOpen = useUnit($burgerOpen);
  const loading = useUnit(getMeFx.pending);

  console.log(loading);

  const { scrollY } = useScroll({
    target: scrollRef,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   if (latest > 5) {
  //     setShouldAnimate(true);
  //   } else {
  //     setShouldAnimate(false);
  //   }
  // });

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShouldAnimate(latest > 5);
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [scrollY]);

  return (
    <motion.header
      ref={scrollRef}
      animate={
        (!shouldAnimate && burgerOpen) || shouldAnimate
          ? { background: "#F8F8F8" }
          : { background: "rgba(248, 248, 248, 0)" }
      }
      className="fixed z-50 h-[var(--header-height)] w-full"
    >
      <HeaderContent
        variant={
          (!shouldAnimate && burgerOpen) || shouldAnimate ? "black" : "white"
        }
      />
    </motion.header>
  );
};

export { WhiteHeader };
