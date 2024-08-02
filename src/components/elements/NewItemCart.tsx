"use client";

import { GetHomePageQuery } from "@/graphql/__generated__";
import { cn, formatPrice, pathImage } from "@/lib/utils";
import { sizes } from "@/shared/const";
import { toggleFavorite } from "@/shared/context/favorites";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type SizesImg = "default" | "big" | "slider" | "goods" | "recommended";

const defaultSize = {
  width: 305,
  height: 430,
};

const bigSize = {
  width: 628,
  height: 676,
};

const NewItemCart = ({
  item,
  sizesImg = "default",
  link,
}: {
  item: GetHomePageQuery["homePage"]["newItems"][0]["goods_id"];
  sizesImg?: SizesImg;
  link: string;
}) => {
  const { favoritesFromLs } = useFavorite();

  const isFavorite = favoritesFromLs.includes(item.id);

  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const matchedSizes = sizes.filter((detail) =>
    item.select.includes(detail.value),
  );

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  return (
    <article className="group overflow-hidden">
      <div className="relative">
        <div className="relative">
          <Link href={link}>
            <Image
              src={pathImage(item.images[currentImageIdx].directus_files_id.id)}
              alt="1.png"
              width={sizesImg === "default" ? defaultSize.width : bigSize.width}
              height={
                sizesImg === "default" ? defaultSize.height : bigSize.height
              }
              onLoad={handleLoadingImageComplete}
              className={cn(
                "object-cover transition-all duration-500 group-hover:pr-[45px]",
                {
                  "h-[430px] max-tabletBig:h-[310px] max-mobile:h-[240px]":
                    sizesImg === "default",
                  "h-[676px] max-tabletBig:h-[494px]": sizesImg === "big",
                  "h-full": sizesImg === "slider",
                  "aspect-square": sizesImg === "goods",
                  "h-[500px] w-full max-tabletBig:h-[412px] max-mobile:h-[433px]":
                    sizesImg === "recommended",

                  skeleton: imgSpinner,
                },
              )}
            />

            <div
              className={`absolute left-0 top-0 grid h-full w-full grid-cols-${item.images.length}`}
            >
              {item.images.map((_, idx) => (
                <div
                  onMouseEnter={() => setCurrentImageIdx(idx)}
                  className="h-full"
                  key={`image-${idx}`}
                />
              ))}
            </div>
          </Link>

          <ul
            className={cn(
              `absolute bottom-0 left-0 mb-[10px] h-[2px] w-full gap-2 pl-[26px] pr-[71px] opacity-0 transition-all duration-500 group-hover:opacity-100`,
              {
                "": item.images.length === 0,
                [`grid-cols-${item.images.length} grid`]:
                  item.images.length > 1,
              },
            )}
          >
            {item.images.map((_, idx) => (
              <li
                key={idx}
                className={cn("w-full rounded-full", {
                  "bg-[#9D9D9D]": idx === currentImageIdx,
                  "bg-[#9D9D9D66]/40": idx !== currentImageIdx,
                })}
              />
            ))}
          </ul>
        </div>

        <div className="absolute -right-[45px] top-0 h-full w-[45px] bg-darkGrayColor p-3 transition-all duration-500 group-hover:right-[0px]">
          <div className="flex h-full flex-col justify-between">
            <button onClick={() => toggleFavorite(item.id)}>
              <Heart
                className={cn("", {
                  "stroke-error text-error": isFavorite,
                })}
                stroke={isFavorite ? "text-error" : "white"}
              />
            </button>

            <div className="flex flex-col items-center gap-2 border-b border-t border-[#888888] py-2 text-white">
              {matchedSizes.map((size) => {
                return <div key={size.value}>{size.description}</div>;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[12px] flex flex-col gap-1">
        <p className="font-medium text-blackColor">{item.name}</p>

        <p className="font-bold"> {formatPrice(item.price)} ₽</p>
      </div>
    </article>
  );
};

export { NewItemCart };
