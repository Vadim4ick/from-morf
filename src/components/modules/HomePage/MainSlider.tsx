"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import { GetHomePageQuery } from "@/graphql/__generated__";
import { cn, pathImage } from "@/lib/utils";
import Link from "next/link";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";

const MainSlider = ({
  slides,
}: {
  slides: GetHomePageQuery["homePage"]["mainSlider"];
}) => {
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

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
        {slides.map((el) => {
          return (
            <SwiperSlide key={el.id}>
              <div className="bgGradientMainSlider relative h-screen w-full">
                <Image
                  priority
                  className={cn("object-cover", {
                    skeleton: imgSpinner,
                  })}
                  alt="1.png"
                  src={pathImage(el.mainSlider_id.image.id)}
                  fill
                  onLoad={handleLoadingImageComplete}
                />

                <div className="container absolute bottom-[160px] left-1/2 z-10 flex -translate-x-1/2 flex-col gap-8 text-white">
                  <div className="flex flex-col items-center justify-center gap-[10px] max-tabletSmall:gap-[6px]">
                    <h2 className="text-center text-4xl font-bold uppercase max-tabletSmall:text-lg">
                      {el.mainSlider_id.title}
                    </h2>

                    <p className="text-center text-[18px] max-tabletSmall:text-[12px]">
                      {el.mainSlider_id.decription}
                    </p>
                  </div>

                  <Link
                    href={el.mainSlider_id.linkButton}
                    className="relative mx-auto h-[42px] w-full max-w-[185px] border border-[#8D8D8D] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[#2C2C2C] before:opacity-60 max-tabletSmall:h-[36px] max-tabletSmall:max-w-[175px]"
                  >
                    <p className="relative flex h-full w-full items-center justify-center text-sm uppercase text-white">
                      {el.mainSlider_id.nameButton}
                    </p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute bottom-[58px] left-0 z-10 w-full">
        <div className="container">
          <div className="flex items-center justify-between text-white">
            <button
              id="mainSlider-prev"
              className="backdrop relative flex size-[58px] items-center justify-center backdrop-filter after:absolute after:size-[58px] after:rounded-full after:bg-[#fff] after:bg-opacity-10 disabled:cursor-default disabled:opacity-60"
            >
              <Arrow width={10} height={15} className="z-10" />
            </button>

            <button
              id="mainSlider-next"
              className="backdrop relative flex size-[58px] items-center justify-center backdrop-filter after:absolute after:size-[58px] after:rounded-full after:bg-[#fff] after:bg-opacity-10 disabled:cursor-default disabled:opacity-60"
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
