"use client";

import { GetLastTwoStyleTipsQuery } from "@/graphql/__generated__";
import { cn, formatDate, pathImage } from "@/lib/utils";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import Image from "next/image";
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
        <div className="h-full">
          <Image
            src={pathImage(item.mainImage.id)}
            width={item.mainImage.width}
            height={item.mainImage.height}
            alt={""}
            className={cn("object-cover", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
        </div>

        <div className="flex flex-col gap-2 pt-4 max-tabletBig:pt-3">
          <p className="text-[14px] text-[#707070]">
            {formatDate(item.date_created)}
          </p>

          <p className="text-xl max-mobileSmall:text-base">{item.title}</p>
        </div>
      </Link>
    </article>
  );
};

export { AdviceCart };
