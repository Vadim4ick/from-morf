"use client";

import { GetLookBockQuery } from "@/graphql/__generated__";
import { cn, pathImage } from "@/lib/utils";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const LookBookItem = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"][0];
}) => {
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  return (
    <div className="flex max-w-full justify-between gap-2 max-desktop1300:flex-col max-desktop1300:gap-9">
      <div className="flex max-w-[432px] flex-col gap-9 max-mobile:gap-[18px]">
        <div className="flex flex-col gap-[19px] max-mobile:gap-[6px]">
          <h2 className="text-[28px] max-mobile:text-lg">{lookBook.title}</h2>

          <p className="text-[#4F4F4F] max-mobile:text-sm">
            {lookBook.description}
          </p>
        </div>

        <Link
          className="flex items-center gap-[5px] font-medium underline"
          href={`/look-bock/${lookBook.id}`}
        >
          Смотреть
          <ArrowLink className="text-[#545454]" />
        </Link>
      </div>

      <div className="h-full w-full justify-end gap-[20px] max-desktop1300:flex max-mobile:flex-col-reverse max-mobile:gap-4 desktop1300:grid desktop1300:grid-cols-[250px_470px]">
        <div className="grid justify-between gap-[20px] max-mobile:w-full max-mobile:grid-cols-2 max-mobile:gap-4">
          <Image
            width={lookBook.img1.width}
            height={lookBook.img1.height}
            src={pathImage(lookBook.img1.id)}
            alt="Main Look"
            className={cn("object-cover max-mobile:w-full desktop1300:h-full", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
          <Image
            width={lookBook.img2.width}
            height={lookBook.img2.height}
            src={pathImage(lookBook.img2.id)}
            alt="Main Look"
            className={cn("object-cover max-mobile:w-full desktop1300:h-full", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
        </div>

        <Image
          width={lookBook.img3.width}
          height={lookBook.img3.height}
          src={pathImage(lookBook.img3.id)}
          alt="Main Look"
          className={cn("w-full object-fill desktop1300:h-full", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
        />
      </div>
    </div>
  );
};

export { LookBookItem };
