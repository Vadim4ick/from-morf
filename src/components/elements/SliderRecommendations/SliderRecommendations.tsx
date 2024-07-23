"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow } from "@/shared/icons/Arrow";
import { NewItemCart } from "@/components/elements/NewItemCart";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { GetGoodsQuery } from "@/graphql/__generated__";

const SliderRecommendations = ({
  recomendation,
}: {
  recomendation: GetGoodsQuery["goods_by_id"]["recomendation"];
}) => {
  const isTablet600 = useMediaQuery(600);

  return (
    <section className="pb-[128px] max-desktop:pb-[96px]">
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
              {recomendation.map((item) => (
                <SwiperSlide
                  key={item.goods_id.id}
                  className="slide-recommendations"
                >
                  <NewItemCart
                    link={`/goods/${item.goods_id.id}`}
                    sizesImg="recommended"
                    item={item.goods_id}
                  />
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

            {recomendation.map((item) => (
              <NewItemCart
                link={`/goods/${item.goods_id.id}`}
                key={item.goods_id.id}
                sizesImg="recommended"
                item={item.goods_id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { SliderRecommendations };
