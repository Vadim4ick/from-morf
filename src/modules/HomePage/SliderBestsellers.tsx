"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/shared/icons/Arrow";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const SliderBestsellers = () => {
  return (
    <section className="py-[128px]">
      <div className="mx-auto max-w-[1307px] px-4">
        <div className="flex items-center justify-between">
          <h3 className="mb-5 text-2xl font-bold uppercase">бестселлеры</h3>

          <div className="flex items-center gap-2">
            <button
              id="bestsellers-prev"
              className="button-bestsellers right flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4]"
            >
              <Arrow className="z-10" />
            </button>

            <button
              id="bestsellers-next"
              className="button-bestsellers left flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4]"
            >
              <Arrow className="z-10 rotate-[180deg]" />
            </button>
          </div>
        </div>

        <Swiper
          navigation={{
            nextEl: "#bestsellers-next",
            prevEl: "#bestsellers-prev",
          }}
          modules={[Navigation]}
          className="swiper-bestsellers"
          spaceBetween={20}
          slidesPerView={2}
        >
          <SwiperSlide className="slide-bestsellers">
            <Link href={"/"}>
              <Image
                src={"/bestseller/1.png"}
                alt="1.png"
                width={628}
                height={676}
                className="object-cover"
              />

              <div className="mt-[12px] flex flex-col gap-1">
                <p className="font-medium text-blackColor">
                  Жакет из португальского льна
                </p>

                <p className="font-bold">20 140 ₽</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="slide-bestsellers">
            <Link href={"/"}>
              <Image
                src={"/bestseller/1.png"}
                alt="1.png"
                width={628}
                height={676}
                className="object-cover"
              />

              <div className="mt-[12px] flex flex-col gap-1">
                <p className="font-medium text-blackColor">
                  Жакет из португальского льна
                </p>

                <p className="font-bold">20 140 ₽</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="slide-bestsellers">
            <Link href={"/"}>
              <Image
                src={"/bestseller/1.png"}
                alt="1.png"
                width={628}
                height={676}
                className="object-cover"
              />

              <div className="mt-[12px] flex flex-col gap-1">
                <p className="font-medium text-blackColor">
                  Жакет из португальского льна
                </p>

                <p className="font-bold">20 140 ₽</p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className="slide-bestsellers">
            <Link href={"/"}>
              <Image
                src={"/bestseller/1.png"}
                alt="1.png"
                width={628}
                height={676}
                className="object-cover"
              />

              <div className="mt-[12px] flex flex-col gap-1">
                <p className="font-medium text-blackColor">
                  Жакет из португальского льна
                </p>

                <p className="font-bold">20 140 ₽</p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { SliderBestsellers };
