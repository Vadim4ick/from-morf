"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { useRouter } from "next/navigation";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";

const NewItems = ({
  newItems,
}: {
  newItems: GetHomePageQuery["homePage"]["newItems"];
}) => {
  const ref = useRef(null);

  const inView = useInView(ref);

  const isTablet991 = useMediaQuery(991);
  const isTablet768 = useMediaQuery(450);

  const router = useRouter();

  const first = newItems[0];
  const otherElements = isTablet768
    ? newItems.slice(1)
    : newItems.slice(!isTablet991 ? 1 : 2);

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="pt-16"
    >
      <div className="container px-[67px] max-tabletSmall:px-4">
        <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

        <div className="flex gap-[20px] max-mobileSmall:flex-col">
          <NewItemCart
            sizesImg="big"
            link={`/goods/${first.goods_id.id}`}
            item={first.goods_id}
          />

          <div className="flex flex-col justify-between max-mobileSmall:gap-[36px]">
            <div className="flex gap-5">
              {otherElements.map((item) => (
                <NewItemCart
                  link={`/goods/${item.goods_id.id}`}
                  key={item.id}
                  item={item.goods_id}
                />
              ))}
            </div>

            <ButtonAnimate
              onClick={() => router.push("/goods/additional/Новинки")}
              className="ml-auto font-semibold tabletSmall:mb-12"
            >
              все новинки
            </ButtonAnimate>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export { NewItems };
