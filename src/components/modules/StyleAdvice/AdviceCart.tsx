/* eslint-disable @next/next/no-img-element */
"use client";

import { GetLastTwoStyleTipsQuery } from "@/graphql/__generated__";
import { cn, formatDate, pathImage } from "@/lib/utils";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import Link from "next/link";

interface Props {
  item: GetLastTwoStyleTipsQuery["styleTips"][0];
}

const AdviceCart = (props: Props) => {
  const { item } = props;

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  return (
    <article>
      <Link href={`/style-tips/${item.id}`}>
        <div className="h-[500px]">
          <img
            src={pathImage(item.mainImage.id)}
            alt={""}
            className={cn("h-full w-full object-cover", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
        </div>

        <div className="flex flex-col gap-2 pt-4 max-tabletBig:pt-3">
          <p className="text-[14px] leading-[18px] text-[#707070]">
            {formatDate(item.date_created)}
          </p>

          <p className="text-[20px] leading-[25px] max-mobileSmall:text-[16px] max-mobileSmall:leading-[19px]">
            {item.title}
          </p>
        </div>
      </Link>
    </article>
  );
};

export { AdviceCart };
