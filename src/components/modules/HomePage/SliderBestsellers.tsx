"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";

import "./index.scss";
import { NewItemCart } from "@/components/elements/NewItemCart";

const arr = [
  {
    id: 0,
    images: ["/bestseller/1.png", "/newItem/1.png"],
    desc: "Жакет из португальского льна",
    price: "20 140 ₽",
    sizes: [36, 38, 40, 42],
  },
  {
    id: 1,
    images: ["/bestseller/1.png"],
    desc: "Жакет из португальского льна",
    price: "20 140 ₽",
    sizes: [36, 38, 40, 42],
  },
  {
    id: 2,
    images: ["/bestseller/1.png"],
    desc: "Жакет из португальского льна",
    price: "20 140 ₽",
    sizes: [36, 38, 40, 42],
  },
  {
    id: 3,
    images: ["/bestseller/1.png"],
    desc: "Жакет из португальского льна",
    price: "20 140 ₽",
    sizes: [36, 38, 40, 42],
  },
];

const SliderBestsellers = () => {
  return (
    <section className="max-tabletSmall:pb-[76px] max-tabletSmall:pt-[96px] max-mobile:py-[72px] tabletSmall:py-[128px]">
      <div className="container px-[67px] max-tabletSmall:px-[16px]">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold uppercase">бестселлеры</h3>

          <div className="flex items-center gap-2">
            <button
              id="bestsellers-prev"
              className="button-bestsellers right flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4] disabled:cursor-auto disabled:opacity-[0.5]"
            >
              <Arrow className="z-10" />
            </button>

            <button
              id="bestsellers-next"
              className="button-bestsellers left flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4] disabled:cursor-auto disabled:opacity-[0.5]"
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
          breakpoints={{
            515: {
              slidesPerView: 1.6,
            },
            800: {
              slidesPerView: 2,
            },
          }}
        >
          {arr.map((item) => (
            <SwiperSlide key={item.id} className="slide-bestsellers">
              <NewItemCart sizesImg="slider" item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export { SliderBestsellers };
