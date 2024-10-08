"use client";

import { LookBock } from "@/components/modules/HomePage/LookBock";
import { MainSlider } from "@/components/modules/HomePage/MainSlider";
import { NewItems } from "@/components/modules/HomePage/NewItems";
import { SliderBestsellers } from "@/components/modules/HomePage/SliderBestsellers";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import {
  GetHomePageQuery,
  GetLastTwoStyleTipsQuery,
} from "@/graphql/__generated__";
import Link from "next/link";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";

const HomePage = ({
  homePage,
  styleTips,
}: {
  homePage: GetHomePageQuery["homePage"];
  styleTips: GetLastTwoStyleTipsQuery["styleTips"];
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <>
      {homePage && homePage.mainSlider.length > 0 && (
        <MainSlider slides={homePage.mainSlider} />
      )}

      {homePage && (
        <LookBock
          title={homePage.title}
          desc={homePage.description}
          images={homePage.images}
        />
      )}

      <motion.section
        ref={ref}
        {...motionConfigAnimate}
        animate={
          inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
        }
        className="bg-blackColor"
      >
        <div className="container px-[67px] py-[17px] max-tabletSmall:px-4">
          <Link
            href={"/goods/additional/Новинки"}
            className="flex flex-col gap-[9px] text-white"
          >
            <p className="font-semibold uppercase">
              Новая коллекция уже в продаже
            </p>

            <svg
              width="41.000000"
              height="12.000000"
              viewBox="0 0 41 12"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs />
              <path
                id="Vector"
                d="M37.89 5.22L33.53 1.08L34.68 0L41 6L34.68 12L33.53 10.91L37.89 6.77L0 6.77L0 5.22L37.89 5.22Z"
                fill="#FFFFFF"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </svg>
          </Link>
        </div>
      </motion.section>

      {homePage && <NewItems newItems={homePage.newItems} />}

      {homePage && (
        <SliderBestsellers bestseller={homePage.sliderBestsellers} />
      )}

      {styleTips && (
        <StyleAdvice className="bg-[#EDEDED]" styleTips={styleTips} />
      )}
    </>
  );
};

export default HomePage;
