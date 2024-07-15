"use client";

import { Breadcrumbs } from "@/components/elements/Breadcrumbs";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "@/shared/icons/Heart";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { SwiperSlide, Swiper } from "swiper/react";
import { SelectSizes } from "@/components/elements/SelectSizes";

import { TableSizeModal } from "./TableSizeModal";
import { Arrow } from "@/shared/icons/Arrow";
import Link from "next/link";

const BottomLayout = () => {
  return (
    <div className="flex flex-col gap-3 border-b border-[#D1D1D1] py-6">
      <div className="flex items-center gap-[6px] max-mobile:text-sm">
        Артикул: <b>Х125761</b>
      </div>

      <div className="flex items-center gap-[6px] max-mobile:text-sm">
        Параметры модели: <b>177/82/62/86</b>
      </div>
      <div className="flex items-center gap-[6px] max-mobile:text-sm">
        Размер на модели: <b>36</b>
      </div>
    </div>
  );
};

const BottomLinks = () => {
  return (
    <div className="pt-[34px] max-tabletBig:pt-[16px]">
      <Link
        href={"/"}
        className="flex items-center justify-between gap-3 py-[10px]"
      >
        <p>Доставка и оплата</p>

        <Arrow className="rotate-180" />
      </Link>

      <Link
        href={"/"}
        className="flex items-center justify-between gap-3 py-[10px]"
      >
        <p>Возврат</p>

        <Arrow className="rotate-180" />
      </Link>
    </div>
  );
};

const AddBasket = () => {
  return (
    <div className="sticky bottom-0 z-10 flex flex-col gap-6 border-[#D1D1D1] bg-white py-9 max-desktop:mt-10 max-desktop:border-t max-desktop:pb-2 desktop:border-b">
      <div className="flex items-center justify-between gap-3">
        <SelectSizes />

        <TableSizeModal />
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button size={"sm"} className="w-full" variant={"secondary"}>
          Добавить в корзину
        </Button>

        <Button
          className="shrink-0 grow-0 basis-auto"
          variant={"outline"}
          size={"icon"}
        >
          <Heart className="size-4 text-transparent" stroke="black" />
        </Button>
      </div>
    </div>
  );
};

const GoodsItem = () => {
  const isDesktop1100 = useMediaQuery(1100);

  return (
    <section className="container pt-[var(--header-height)]">
      {/* Breadcrumbs */}
      <Breadcrumbs className="pb-4 pt-8" />

      <div className="relative grid grid-cols-goods gap-[40px] max-desktop:grid-cols-1 max-desktop:gap-[10px]">
        {/* LEFT */}
        {!isDesktop1100 && (
          <div className="relative flex flex-col gap-5">
            <Image
              src={"/goods/1.png"}
              className="h-full w-full"
              alt=""
              objectFit="cover"
              height={700}
              width={738}
            />

            <Image
              src={"/goods/2.png"}
              className="h-full w-full"
              alt=""
              objectFit="cover"
              height={700}
              width={738}
            />

            <div className="flex gap-5">
              <Image
                src={"/goods/3.png"}
                className="h-full w-full"
                alt=""
                objectFit="cover"
                height={700}
                width={738}
              />

              <Image
                src={"/goods/4.png"}
                className="h-full w-full"
                alt=""
                objectFit="cover"
                height={700}
                width={738}
              />
            </div>

            <Image
              src={"/goods/5.png"}
              className="h-full w-full"
              alt=""
              objectFit="cover"
              height={700}
              width={738}
            />
          </div>
        )}

        {isDesktop1100 && (
          <div className="w-full">
            <Swiper spaceBetween={20} slidesPerView={1}>
              <SwiperSlide>
                <Image
                  src={"/goods/1.png"}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  objectFit="cover"
                  height={700}
                  width={700}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/goods/2.png"}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  objectFit="cover"
                  height={700}
                  width={700}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/goods/3.png"}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  objectFit="cover"
                  height={700}
                  width={700}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/goods/4.png"}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  objectFit="cover"
                  height={700}
                  width={700}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/goods/5.png"}
                  className="aspect-square h-full w-full object-cover"
                  alt=""
                  objectFit="cover"
                  height={700}
                  width={700}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        )}

        {/* Right */}
        <div className="relative">
          <div className="top-[calc(var(--header-height)_+_20px)] desktop:sticky">
            {/* TOP */}
            <div className="flex flex-col gap-9 border-b border-[#D1D1D1] pb-9 max-desktop:pb-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-[28px] font-medium uppercase max-mobile:text-lg">
                  повседневная рубашка
                </h1>

                <span className="text-[22px] font-medium max-mobile:text-base">
                  12 540 ₽
                </span>
              </div>

              <div className="flex flex-col gap-6">
                <p className="max-mobile:text-sm">
                  В меру строгая и романтичная. Очень знакомая, но такая разная!
                  Белую рубашку из хлопка мы выполнили в свободном фасоне
                  ассиметричного силуэта.
                </p>

                <div className="flex flex-col gap-3 max-mobile:gap-2">
                  <div className="flex items-center gap-[6px] max-mobile:text-sm">
                    Материал: <b>Хлопок 100%</b>
                  </div>

                  <div className="flex items-center gap-[6px] max-mobile:text-sm">
                    Цвет: <b>Ярко белый</b>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            {isDesktop1100 && <BottomLayout />}

            {/* BOTTOM_Links */}
            {isDesktop1100 && <BottomLinks />}

            {/* AddBasket */}
            {!isDesktop1100 && <AddBasket />}

            {/* BOTTOM */}
            {!isDesktop1100 && <BottomLayout />}

            {/* BOTTOM_Links */}
            {!isDesktop1100 && <BottomLinks />}
          </div>
        </div>

        {/* AddBasket */}
        {isDesktop1100 && <AddBasket />}
      </div>
    </section>
  );
};

export { GoodsItem };
