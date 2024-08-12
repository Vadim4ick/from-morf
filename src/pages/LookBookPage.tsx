"use client";

import { LookBookItem } from "@/components/modules/LookBook/LookBookItem";
import { GetLookBockQuery } from "@/graphql/__generated__";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";

const LookBookPage = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"];
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="pb-[130px] pt-[calc(var(--header-height)_+_48px)] max-tabletBig:pb-[96px] max-mobile:pb-[72px] max-mobile:pt-[calc(var(--header-height)_+_36px)]"
    >
      <div className="container">
        <h1 className="heading pb-[32px] max-mobile:pb-6">Look book</h1>

        <div className="flex flex-col gap-32 max-desktop1300:gap-24 max-mobile:gap-[72px]">
          {lookBook &&
            lookBook.map((el) => {
              return <LookBookItem key={el.id} lookBook={el} />;
            })}
        </div>
      </div>
    </motion.section>
  );
};

export default LookBookPage;
