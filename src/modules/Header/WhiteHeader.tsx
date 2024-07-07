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
      animate={
        shouldAnimate
          ? { background: "#F8F8F8" }
          : { background: "transparent" }
      }
      className="h-[var(--header-height)] z-10 fixed w-full"
    >
      <HeaderContent variant={shouldAnimate ? "black" : "white"} />
    </motion.header>
  );
};

export { WhiteHeader };
