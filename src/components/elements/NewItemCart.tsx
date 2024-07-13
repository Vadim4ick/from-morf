"use client";

import { cn } from "@/lib/utils";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type SizesImg = "default" | "big" | "slider" | "goods";

interface ItemCart {
  id: number;
  desc: string;
  images: string[];
  sizes: number[];
}

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
}: {
  item: ItemCart;
  sizesImg?: SizesImg;
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  return (
    <article className="group overflow-hidden">
      <Link href={"/"}>
        <div className="relative">
          <div className="relative">
            <Image
              src={item.images[currentImageIdx]}
              alt="1.png"
              width={sizesImg === "default" ? defaultSize.width : bigSize.width}
              height={
                sizesImg === "default" ? defaultSize.height : bigSize.height
              }
              className={cn(
                "object-cover transition-all duration-500 group-hover:pr-[45px]",
                {
                  "h-[430px] max-tabletBig:h-[310px] max-mobile:h-[240px]":
                    sizesImg === "default",
                  "h-[676px] max-tabletBig:h-[494px]": sizesImg === "big",
                  "h-full": sizesImg === "slider",
                  "aspect-square": sizesImg === "goods",
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
              <button>
                <Heart />
              </button>

              <div className="flex flex-col items-center gap-2 border-b border-t border-[#888888] py-2 text-white">
                {item.sizes.map((size) => (
                  <div key={size}>{size}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[12px] flex flex-col gap-1">
          <p className="font-medium text-blackColor">
            Жакет из португальского льна
          </p>

          <p className="font-bold">20 140 ₽</p>
        </div>
      </Link>
    </article>
  );
};

export { NewItemCart };
