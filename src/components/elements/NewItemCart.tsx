import { cn } from "@/lib/utils";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ItemCart {
  id: number;
  date: string;
  desc: string;
  images: string[];
  sizes: number[];
}

const NewItemCart = ({ item }: { item: ItemCart }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  return (
    <article className="group overflow-hidden">
      <Link href={"/"}>
        <div className="relative">
          <div className="relative">
            <Image
              src={item.images[currentImageIdx]}
              alt="1.png"
              width={305}
              height={430}
              className="h-[430px] origin-center object-cover transition-all duration-500 group-hover:pr-[45px]"
            />

            <div className="absolute left-0 top-0 grid h-full w-full grid-cols-3">
              {item.images.map((_, idx) => (
                <div
                  onMouseEnter={() => setCurrentImageIdx(idx)}
                  className="h-full"
                  key={`image-${idx}`}
                />
              ))}
            </div>

            <ul className="absolute bottom-0 left-0 mb-[10px] grid h-[2px] w-full grid-cols-3 gap-2 pl-[26px] pr-[71px] opacity-0 transition-all duration-500 group-hover:opacity-100">
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
