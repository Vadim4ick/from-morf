"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";

const MainSlider = () => {
  return (
    <section className="relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: "#mainSlider-next",
          prevEl: "#mainSlider-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="relative h-screen">
            <Image
              priority
              className="object-cover"
              alt="1.png"
              src={`/test@2x.png`}
              fill
            />

            <div className="absolute bottom-[195px] left-1/2 flex -translate-x-1/2 flex-col gap-8 text-white">
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <h2 className="text-center text-4xl font-bold uppercase">
                  Современная элегантность
                </h2>

                <p className="text-center text-[18px]">
                  Откройте для себя силу стиля с нашей новой коллекцией.
                </p>
              </div>

              <button className="relative mx-auto h-[42px] w-full max-w-[185px] border border-[#8D8D8D] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#2C2C2C] before:opacity-60">
                <span className="relative z-10 text-white">новинки</span>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-screen">
            <Image
              priority
              className="object-cover"
              alt="1.png"
              src={`/test@2x.png`}
              fill
            />

            <div className="absolute bottom-[195px] left-1/2 flex -translate-x-1/2 flex-col gap-8 text-white">
              <div className="flex flex-col gap-[10px]">
                <h2 className="text-center text-4xl font-bold uppercase">
                  Современная элегантность2
                </h2>

                <p className="text-center text-[18px]">
                  Откройте для себя силу стиля с нашей новой коллекцией2.
                </p>
              </div>

              <button className="relative mx-auto h-[42px] w-full max-w-[185px] border border-[#8D8D8D] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#2C2C2C] before:opacity-60">
                <span className="relative z-10 text-white">новинки</span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-[58px] left-0 z-10 w-full">
        <div className="container">
          <div className="flex items-center justify-between text-white">
            <button
              id="mainSlider-prev"
              className="backdrop relative flex items-center justify-center backdrop-filter after:absolute after:size-[58px] after:rounded-full after:bg-[#fff] after:bg-opacity-10 disabled:cursor-default disabled:opacity-60"
            >
              <Arrow width={10} height={15} className="z-10" />
            </button>

            <button
              id="mainSlider-next"
              className="backdrop relative flex items-center justify-center backdrop-filter after:absolute after:size-[58px] after:rounded-full after:bg-[#fff] after:bg-opacity-10 disabled:cursor-default disabled:opacity-60"
            >
              <Arrow className="z-10 rotate-180" width={10} height={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { MainSlider };
