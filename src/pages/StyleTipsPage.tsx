"use client";

import { AdviceCart } from "@/components/modules/StyleAdvice/AdviceCart";
import { GetTipsPageQuery } from "@/graphql/__generated__";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";

const StyleTipsPage = ({
  styleTips,
}: {
  styleTips: GetTipsPageQuery["styleTips"];
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
      className="pb-[160px] pt-[calc(var(--header-height)_+_48px)]"
    >
      <div className="container">
        <h1 className="heading pb-8 max-tabletBig:pb-6">Советы по стилю</h1>

        <div className="grid max-w-[962px] grid-cols-2 gap-x-[20px] gap-y-[48px] max-mobile:grid-cols-1 max-mobile:justify-items-center max-mobile:gap-y-9">
          {styleTips &&
            styleTips.map((el) => (
              <article key={el.id} className="max-w-[466px]">
                <AdviceCart item={el} />
              </article>
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StyleTipsPage;
