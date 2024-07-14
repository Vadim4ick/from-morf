"use client";

import { Breadcrumbs } from "@/components/elements/Breadcrumbs";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Arrow } from "@/shared/icons/Arrow";
import { Button } from "@/components/ui/button";
import { Heart } from "@/shared/icons/Heart";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";

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

const GoodsItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const isDesktop1100 = useMediaQuery(1100);

  const handleValueChange = (value: string) => {
    setSelectedItem(value);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

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
          <div className="sticky top-[calc(var(--header-height)_+_20px)]">
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

            {/* CENTER */}
            <div className="flex flex-col gap-6 border-b border-[#D1D1D1] py-9">
              <div className="flex items-center justify-between gap-3">
                <Select
                  onValueChange={handleValueChange}
                  onOpenChange={handleOpenChange}
                >
                  <SelectTrigger
                    className={cn("w-full bg-[#F4F4F4] text-[16px]", {
                      "border border-[#B5B5B5]": !isOpen,
                      "border-b border-[#B5B5B5]": isOpen,
                    })}
                  >
                    <SelectValue placeholder="Выбрать размер" />
                  </SelectTrigger>

                  <SelectContent className="text-[14px]">
                    <SelectItem
                      className={`mb-1 ${selectedItem === "XS" ? "bg-[#E1E1E1]" : ""}`}
                      value="XS"
                    >
                      XS
                    </SelectItem>
                    <SelectItem
                      className={`mb-1 ${selectedItem === "S" ? "bg-[#E1E1E1]" : ""}`}
                      value="S"
                    >
                      S
                    </SelectItem>
                    <SelectItem
                      className={selectedItem === "M" ? "bg-[#E1E1E1]" : ""}
                      value="M"
                    >
                      M
                    </SelectItem>
                    <SelectItem
                      className={selectedItem === "L" ? "bg-[#E1E1E1]" : ""}
                      value="L"
                    >
                      L
                    </SelectItem>
                    <SelectItem
                      className={selectedItem === "XL" ? "bg-[#E1E1E1]" : ""}
                      value="XL"
                    >
                      XL
                    </SelectItem>
                  </SelectContent>
                </Select>

                <button className="flex w-full max-w-[197px] items-center justify-center gap-[8px] text-[#767676]">
                  <span className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#767676] max-desktop:text-[14px]">
                    Подобрать размер
                  </span>

                  <Arrow className="size-[10px] rotate-180 max-desktop:size-[9px]" />
                </button>
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

            {/* BOTTOM */}
            {!isDesktop1100 && <BottomLayout />}
          </div>
        </div>
      </div>
    </section>
  );
};

export { GoodsItem };
