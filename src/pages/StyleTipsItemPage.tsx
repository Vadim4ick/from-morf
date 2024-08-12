"use client";

import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import {
  GetLastTwoStyleTipsQuery,
  GetTipsItemPageQuery,
} from "@/graphql/__generated__";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { motionConfigAnimate } from "@/shared/const";

const StyleTipsItemPage = ({
  item,
  styleTwoTips,
}: {
  item: GetTipsItemPageQuery["styleTips_by_id"];
  styleTwoTips: GetLastTwoStyleTipsQuery["styleTips"];
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <>
      {item && (
        <motion.section
          ref={ref}
          {...motionConfigAnimate}
          animate={
            inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
          }
          className="pt-[calc(var(--header-height)_+_68px)] max-tabletBig:pt-[calc(var(--header-height)_+_36px)]"
        >
          <div className="container">
            <div className="max-w-[952px]">
              <p className="pb-[18px] font-medium text-[#707070] max-mobile:pb-2 mobile:text-[18px] mobile:leading-[22px]">
                {formatDate(item.date_created)}
              </p>

              <h1 className="text-4xl font-medium max-desktop:leading-[44px] max-tabletBig:text-[28px] max-mobile:text-2xl">
                {item.title}
              </h1>

              <ReactMarkdown
                components={{
                  p: ({ children }) => {
                    return (
                      <p className="pt-[36px] text-xl text-[#181818] max-tabletBig:pt-[32px] max-mobile:pt-[24px] max-mobile:text-base">
                        {children}
                      </p>
                    );
                  },
                  h2: ({ children }) => {
                    return (
                      <h2 className="pt-[69px] text-[28px] font-medium max-mobile:pt-[48px] max-mobile:text-xl">
                        {children}
                      </h2>
                    );
                  },
                  ul: ({ children }) => {
                    return (
                      <ul className="auto-layout grid grid-cols-2 gap-3 pb-[74px] pt-12 max-tabletBig:pb-[64px] max-tabletBig:pt-[36px] max-mobile:pb-6 max-mobile:pt-[24px]">
                        {children}
                      </ul>
                    );
                  },
                }}
              >
                {item.markdown}
              </ReactMarkdown>
            </div>
          </div>
        </motion.section>
      )}

      {styleTwoTips && (
        <StyleAdvice
          className="pt-[160px]"
          title="Другие статьи"
          styleTips={styleTwoTips}
        />
      )}
    </>
  );
};

export default StyleTipsItemPage;
