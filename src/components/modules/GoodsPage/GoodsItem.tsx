"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from "@/shared/icons/Heart";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { SwiperSlide, Swiper } from "swiper/react";
import { SelectSizes } from "@/components/elements/SelectSizes";
import { TableSizeModal } from "./TableSizeModal";
import { Arrow } from "@/shared/icons/Arrow";
import Link from "next/link";
import { Lightbox } from "@/components/ui/lightbox";
import { GetGoodsQuery } from "@/graphql/__generated__";
import ReactMarkdown from "react-markdown";
import { cn, discountPrice, formatPrice, pathImage } from "@/lib/utils";
import { Fragment, useState } from "react";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { toggleFavorite } from "@/shared/context/favorites";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  addBasketItem,
} from "@/shared/context/basket";
import { toast } from "sonner";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import { motionConfigAnimate } from "@/shared/const";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SelectColors } from "@/components/elements/SelectColors";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BottomLayout = ({ parameters }: { parameters: string }) => {
  return (
    <div>
      <ReactMarkdown
        components={{
          li: ({ children }) => {
            return (
              <li className="flex items-center gap-[6px] max-mobile:text-sm">
                {children}
              </li>
            );
          },
          ol: ({ children }) => {
            return (
              <ol className="flex flex-col gap-3 border-b border-[#D1D1D1] py-6 max-mobile:py-4">
                {children}
              </ol>
            );
          },
        }}
      >
        {parameters}
      </ReactMarkdown>
    </div>
  );
};

const BottomLinks = () => {
  return (
    <div className="pt-[24px] max-tabletBig:pt-[16px] max-mobile:py-[12px]">
      <Link
        href={"/delivery"}
        className="flex items-center justify-between gap-3 py-[10px] max-mobile:py-[9px]"
      >
        <p className="leading-[20px] max-mobile:text-[14px] max-mobile:leading-[17.5px]">
          Доставка и оплата
        </p>

        <Arrow className="rotate-180" />
      </Link>

      <Link
        href={"/returns"}
        className="flex items-center justify-between gap-3 py-[10px] max-mobile:py-[9px]"
      >
        <p className="leading-[20px] max-mobile:text-[14px] max-mobile:leading-[17.5px]">
          Возврат
        </p>

        <Arrow className="rotate-180" />
      </Link>
    </div>
  );
};

const AddBasket = ({
  currentSizes,
  currentColors,
  onClick,
  itemId,
}: {
  currentColors: GetGoodsQuery["goods_by_id"]["available_colors"];
  currentSizes: string[];
  onClick: VoidFunction;
  itemId: string;
}) => {
  const { favoritesFromLs } = useFavorite();

  const isFavorite = favoritesFromLs.includes(itemId);

  return (
    <div className="sticky bottom-0 z-10 flex flex-col gap-6 border-[#D1D1D1] bg-white py-9 max-desktop:border-t max-desktop:pb-2 max-mobile:gap-4 max-mobile:py-[24px] desktop:border-b">
      <div className="flex items-start justify-between gap-3">
        <div className="flex w-full flex-col gap-2">
          <SelectSizes currentSizes={currentSizes} />

          {currentColors.length > 0 && (
            <SelectColors currentColors={currentColors} />
          )}
        </div>

        <div className="mt-2 w-full">
          <TableSizeModal />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <Button
          onClick={onClick}
          size={"sm"}
          className="w-full"
          variant={"secondary"}
        >
          Добавить в корзину
        </Button>

        <Button
          className="shrink-0 grow-0 basis-auto"
          variant={"outline"}
          size={"icon"}
          onClick={() => toggleFavorite(itemId)}
        >
          <Heart
            className={cn("size-4 text-transparent", {
              "stroke-error text-error": isFavorite,
            })}
            stroke={isFavorite ? "text-error" : "#444444"}
          />
        </Button>
      </div>
    </div>
  );
};

const GoodsItem = ({ item }: { item: GetGoodsQuery["goods_by_id"] }) => {
  const isDesktop1100 = useMediaQuery(1100);

  const [selectedItem] = useUnit([$selectedSize]);
  const [selectedColor] = useUnit([$selectedColor]);

  const onClick = async () => {
    if (!selectedItem.trim()) {
      return toast.error("Выберите размер!");
    }
    if (!selectedColor.title.trim()) {
      return toast.error("Выберите цвет!");
    }

    addBasketItem({
      id: item.id,
      size: selectedItem,
      discount: item.discount,
      price: item.price,
      totalPrice: item.price,
      images: {
        id: item.images[0].directus_files_id.id,
        width: item.images[0].directus_files_id.width,
        height: item.images[0].directus_files_id.height,
      },
      title: item.name,
      color: selectedColor,
    });

    toast.success("Товар успешно добавлен в корзину!");
  };
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  const ref = useRef(null);
  const inView = useInView(ref);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="container pb-[135px] pt-[calc(var(--header-height)_+_32px)] max-desktop:pb-[48px] max-tabletSmall:pb-[72px] max-mobile:pt-[calc(var(--header-height)_+_24px)]"
    >
      <div className="relative grid grid-cols-goods gap-[40px] max-desktop:grid-cols-1 max-desktop:gap-[0px]">
        {/* LEFT */}
        {!isDesktop1100 && (
          <div className="relative flex flex-col gap-5">
            {item.image_builder.map((el) => {
              if (
                el.collection === "goodsImg" &&
                el.item.__typename === "goodsImg"
              ) {
                if (el.item.img.type?.includes("video")) {
                  return (
                    <video
                      key={el.id}
                      autoPlay
                      muted
                      playsInline
                      loop
                      className="w-full object-cover"
                      poster=""
                    >
                      <source
                        src={pathImage(el.item.img.id)}
                        type={el.item.img.type}
                      />
                      Ваш браузер не поддерживает видео.
                    </video>
                  );
                }

                return (
                  <Lightbox key={el.id} imageUrl={pathImage(el.item.img.id)}>
                    <Image
                      unoptimized
                      src={pathImage(el.item.img.id)}
                      className={cn("h-full w-full", {
                        skeleton: imgSpinner,
                      })}
                      alt=""
                      height={el.item.img.height}
                      width={el.item.img.width}
                      onLoad={handleLoadingImageComplete}
                    />
                  </Lightbox>
                );
              } else if (
                el.collection === "goodsTwoImages" &&
                el.item.__typename === "goodsTwoImages"
              ) {
                return (
                  <div key={el.id} className="grid grid-cols-2 gap-5">
                    {/* Левая часть (imgOne) */}
                    {el.item.imgOne.type?.includes("video") ? (
                      <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="max-h-[535px] w-full rounded-lg object-cover"
                        poster=""
                      >
                        <source
                          src={pathImage(el.item.imgOne.id)}
                          type={el.item.imgOne.type}
                        />
                        Ваш браузер не поддерживает видео.
                      </video>
                    ) : (
                      <Lightbox imageUrl={pathImage(el.item.imgOne.id)}>
                        <Image
                          unoptimized
                          src={pathImage(el.item.imgOne.id)}
                          className={cn(
                            "h-full max-h-[535px] w-full object-cover",
                            {
                              skeleton: imgSpinner,
                            },
                          )}
                          alt=""
                          height={el.item.imgOne.height}
                          width={el.item.imgOne.width}
                          onLoad={handleLoadingImageComplete}
                        />
                      </Lightbox>
                    )}

                    {/* Правая часть (imgTwo) */}
                    {el.item.imgTwo.type?.includes("video") ? (
                      <video
                        autoPlay
                        muted
                        playsInline
                        loop
                        className="max-h-[535px] w-full rounded-lg object-cover"
                        poster=""
                      >
                        <source
                          src={pathImage(el.item.imgTwo.id)}
                          type={el.item.imgTwo.type}
                        />
                        Ваш браузер не поддерживает видео.
                      </video>
                    ) : (
                      <Lightbox imageUrl={pathImage(el.item.imgTwo.id)}>
                        <Image
                          unoptimized
                          src={pathImage(el.item.imgTwo.id)}
                          className={cn(
                            "h-full max-h-[535px] w-full object-cover",
                            {
                              skeleton: imgSpinner,
                            },
                          )}
                          alt=""
                          height={el.item.imgTwo.height}
                          width={el.item.imgTwo.width}
                          onLoad={handleLoadingImageComplete}
                        />
                      </Lightbox>
                    )}
                  </div>
                );
              }
            })}
          </div>
        )}

        {isDesktop1100 && (
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              modules={[Navigation]}
              slidesPerView={1}
              autoHeight={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onInit={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
            >
              {item.image_builder.map((el) => {
                if (
                  el.collection === "goodsImg" &&
                  el.item.__typename === "goodsImg"
                ) {
                  return (
                    <SwiperSlide key={el.id}>
                      {el.item.img.type?.includes("video") ? (
                        <video
                          autoPlay
                          muted
                          playsInline
                          loop
                          className="max-h-[535px] w-full rounded-lg object-cover"
                          poster=""
                        >
                          <source
                            src={pathImage(el.item.img.id)}
                            type={el.item.img.type}
                          />
                          Ваш браузер не поддерживает видео.
                        </video>
                      ) : (
                        <Lightbox imageUrl={pathImage(el.item.img.id)}>
                          <Image
                            src={pathImage(el.item.img.id)}
                            className="aspect-square h-full w-full object-cover"
                            alt=""
                            objectFit="cover"
                            height={el.item.img.height}
                            width={el.item.img.width}
                          />
                        </Lightbox>
                      )}
                    </SwiperSlide>
                  );
                } else if (
                  el.collection === "goodsTwoImages" &&
                  el.item.__typename === "goodsTwoImages"
                ) {
                  return (
                    <Fragment key={el.id}>
                      {/* Левая часть (imgOne) */}
                      <SwiperSlide key={`${el.id}-imgOne`}>
                        {el.item.imgOne.type?.includes("video") ? (
                          <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="max-h-[535px] w-full rounded-lg object-cover"
                            poster=""
                          >
                            <source
                              src={pathImage(el.item.imgOne.id)}
                              type={el.item.imgOne.type}
                            />
                            Ваш браузер не поддерживает видео.
                          </video>
                        ) : (
                          <Lightbox imageUrl={pathImage(el.item.imgOne.id)}>
                            <Image
                              unoptimized
                              src={pathImage(el.item.imgOne.id)}
                              className={cn(
                                "h-full max-h-[535px] w-full object-cover",
                                {
                                  skeleton: imgSpinner,
                                },
                              )}
                              alt=""
                              height={el.item.imgOne.height}
                              width={el.item.imgOne.width}
                              onLoad={handleLoadingImageComplete}
                            />
                          </Lightbox>
                        )}
                      </SwiperSlide>

                      {/* Правая часть (imgTwo) */}
                      <SwiperSlide key={`${el.id}-imgTwo`}>
                        {el.item.imgTwo.type?.includes("video") ? (
                          <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            className="max-h-[535px] w-full rounded-lg object-cover"
                            poster=""
                          >
                            <source
                              src={pathImage(el.item.imgTwo.id)}
                              type={el.item.imgTwo.type}
                            />
                            Ваш браузер не поддерживает видео.
                          </video>
                        ) : (
                          <Lightbox imageUrl={pathImage(el.item.imgTwo.id)}>
                            <Image
                              src={pathImage(el.item.imgTwo.id)}
                              className="aspect-square h-full w-full object-cover"
                              alt=""
                              objectFit="cover"
                              height={el.item.imgTwo.height}
                              width={el.item.imgTwo.width}
                            />
                          </Lightbox>
                        )}
                      </SwiperSlide>
                    </Fragment>
                  );
                }
              })}
            </Swiper>

            <div className="flex justify-between gap-4 pt-2">
              <button
                ref={prevRef}
                disabled={isBeginning}
                className="flex size-[42px] items-center justify-center rounded-full border border-gray-300 text-sm hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                ref={nextRef}
                disabled={isEnd}
                className="flex size-[42px] items-center justify-center rounded-full border border-gray-300 text-sm hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        )}

        {/* Right */}
        <div className="relative">
          <div className="top-[calc(var(--header-height)_+_20px)] max-mobile:pt-[16px] desktop:sticky">
            {/* TOP */}
            <div className="flex flex-col gap-9 border-b border-[#D1D1D1] pb-9 max-desktop:pb-8 max-mobile:gap-6 max-mobile:pb-6">
              <div className="flex flex-col gap-2 max-mobile:gap-[2px]">
                <h1 className="text-[28px] font-semibold uppercase leading-[34px] max-mobile:text-lg max-mobile:leading-[22px]">
                  {item.name}
                </h1>

                <div className="flex items-center gap-2">
                  <span className="text-[22px] font-medium leading-[27px] max-mobile:text-[16px] max-mobile:leading-[20px]">
                    {formatPrice(item.price)} ₽
                  </span>

                  {item.discount > 0 && (
                    <span className="text-lg font-medium text-[#959595] line-through max-mobile:text-[14px] max-mobile:leading-[18px]">
                      {discountPrice(item.discount, item.price)} ₽
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-6 max-mobile:gap-4">
                <ReactMarkdown
                  components={{
                    li: ({ children }) => {
                      return (
                        <li className="flex items-center gap-[6px] max-mobile:text-[14px] max-mobile:leading-[18px]">
                          {children}
                        </li>
                      );
                    },
                    p: ({ children }) => {
                      return (
                        <p className="max-mobile:text-[14px] max-mobile:leading-[18px]">
                          {children}
                        </p>
                      );
                    },
                    ol: ({ children }) => {
                      return (
                        <ol className="flex flex-col gap-3 max-mobile:gap-2">
                          {children}
                        </ol>
                      );
                    },
                  }}
                >
                  {item.description}
                </ReactMarkdown>
              </div>
            </div>

            {/* BOTTOM */}
            {isDesktop1100 && <BottomLayout parameters={item.parameters} />}

            {/* BOTTOM_Links */}
            {isDesktop1100 && <BottomLinks />}

            {/* AddBasket */}
            {!isDesktop1100 && (
              <AddBasket
                itemId={item.id}
                onClick={onClick}
                currentSizes={item.select}
                currentColors={item.available_colors}
              />
            )}

            {/* BOTTOM */}
            {!isDesktop1100 && <BottomLayout parameters={item.parameters} />}

            {/* BOTTOM_Links */}
            {!isDesktop1100 && <BottomLinks />}
          </div>
        </div>

        {/* AddBasket */}
        {isDesktop1100 && (
          <AddBasket
            itemId={item.id}
            onClick={onClick}
            currentSizes={item.select}
            currentColors={item.available_colors}
          />
        )}
      </div>
    </motion.section>
  );
};

export { GoodsItem };
