import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { useRef, useState } from "react";
import { HeaderContent } from "./HeaderContent";

const WhiteHeader = () => {
  const scrollRef = useRef(null);

  const { scrollY } = useScroll({
    target: scrollRef,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 5) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  });

  return (
    <motion.header
      ref={scrollRef}
      animate={
        shouldAnimate
          ? { background: "#F8F8F8" }
          : { background: "rgba(248, 248, 248, 0)" }
      }
      className="fixed z-50 h-[var(--header-height)] w-full"
    >
      <HeaderContent variant={shouldAnimate ? "black" : "white"} />
    </motion.header>
  );
};

export { WhiteHeader };
