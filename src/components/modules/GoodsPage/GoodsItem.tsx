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

const GoodsItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

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

      <div className="relative grid grid-cols-goods gap-[40px]">
        {/* LEFT */}
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

        {/* Right */}
        <div className="relative">
          <div className="sticky top-[calc(var(--header-height)_+_20px)]">
            {/* TOP */}
            <div className="flex flex-col gap-9 border-b border-[#D1D1D1] pb-9">
              <div className="flex flex-col gap-2">
                <h1 className="text-[28px] font-medium uppercase">
                  повседневная рубашка
                </h1>

                <span className="text-[22px] font-medium">12 540 ₽</span>
              </div>

              <div className="flex flex-col gap-6">
                <p>
                  В меру строгая и романтичная. Очень знакомая, но такая разная!
                  Белую рубашку из хлопка мы выполнили в свободном фасоне
                  ассиметричного силуэта.
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[6px]">
                    Материал: <b>Хлопок 100%</b>
                  </div>

                  <div className="flex items-center gap-[6px]">
                    Цвет: <b>Ярко белый</b>
                  </div>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="flex flex-col gap-6 border-b border-[#D1D1D1] py-9">
              <div className="flex items-center justify-between">
                <Select
                  onValueChange={handleValueChange}
                  onOpenChange={handleOpenChange}
                >
                  <SelectTrigger
                    className={cn("w-[293px] bg-[#F4F4F4] text-[16px]", {
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

                <button className="flex items-center gap-[10px] text-[#767676]">
                  <span className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#767676]">
                    Подобрать размер
                  </span>

                  <Arrow className="size-[10px] rotate-180" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <Button className="w-full max-w-[440px]" variant={"secondary"}>
                  Добавить в корзину
                </Button>

                <Button variant={"outline"} size={"icon"}>
                  <Heart className="size-4 text-transparent" stroke="black" />
                </Button>
              </div>
            </div>

            {/* BOTTOM */}

            <div className="flex flex-col gap-3 border-b border-[#D1D1D1] py-6">
              <div className="flex items-center gap-[6px]">
                Артикул:: <b>Х125761</b>
              </div>

              <div className="flex items-center gap-[6px]">
                Параметры модели: <b>177/82/62/86</b>
              </div>
              <div className="flex items-center gap-[6px]">
                Размер на модели: <b>36</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GoodsItem };
