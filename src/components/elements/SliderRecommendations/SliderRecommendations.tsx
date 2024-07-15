"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import { NewItemCart } from "@/components/elements/NewItemCart";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";

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

const SliderRecommendations = () => {
  const isTablet600 = useMediaQuery(600);

  return (
    <section className="pb-[128px] pt-[135px] max-desktop:pb-[96px] max-desktop:pt-[48px] max-tabletSmall:pt-[42px]">
      <div className="container px-[67px] max-tabletSmall:px-[16px]">
        {!isTablet600 && (
          <>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold uppercase">
                рекомендуем к образу
              </h3>

              <div className="flex items-center gap-2">
                <button
                  id="recommendations-prev"
                  className="right flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4] disabled:cursor-auto disabled:opacity-[0.5]"
                >
                  <Arrow className="z-10" />
                </button>

                <button
                  id="recommendations-next"
                  className="left flex size-[36px] cursor-pointer items-center justify-center rounded-[2px] bg-[#F4F4F4] disabled:cursor-auto disabled:opacity-[0.5]"
                >
                  <Arrow className="z-10 rotate-[180deg]" />
                </button>
              </div>
            </div>

            <Swiper
              navigation={{
                nextEl: "#recommendations-next",
                prevEl: "#recommendations-prev",
              }}
              modules={[Navigation]}
              className="swiper-recommendations"
              spaceBetween={20}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
            >
              {arr.map((item) => (
                <SwiperSlide key={item.id} className="slide-recommendations">
                  <NewItemCart sizesImg="recommended" item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}

        {isTablet600 && (
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold uppercase">
              рекомендуем к образу
            </h3>

            {arr.map((item) => (
              <NewItemCart key={item.id} sizesImg="recommended" item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { SliderRecommendations };
