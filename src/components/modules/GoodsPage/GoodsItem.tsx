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
import { Fragment } from "react";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { toggleFavorite } from "@/shared/context/favorites";
import { useUnit } from "effector-react";
import { $selectedSize, addBasketItem } from "@/shared/context/basket";
import { toast } from "sonner";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import { motionConfigAnimate } from "@/shared/const";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

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
    <div className="pt-[24px] max-tabletBig:pt-[16px]">
      <Link
        href={"/"}
        className="flex items-center justify-between gap-3 py-[10px] max-mobile:py-[9px]"
      >
        <p className="leading-[20px] max-mobile:text-sm">Доставка и оплата</p>

        <Arrow className="rotate-180" />
      </Link>

      <Link
        href={"/"}
        className="flex items-center justify-between gap-3 py-[10px] max-mobile:py-[9px]"
      >
        <p className="leading-[20px] max-mobile:text-sm">Возврат</p>

        <Arrow className="rotate-180" />
      </Link>
    </div>
  );
};

const AddBasket = ({
  currentSizes,
  onClick,
  itemId,
}: {
  currentSizes: string[];
  onClick: VoidFunction;
  itemId: string;
}) => {
  const { favoritesFromLs } = useFavorite();

  const isFavorite = favoritesFromLs.includes(itemId);

  return (
    <div className="sticky bottom-0 z-10 flex flex-col gap-6 border-[#D1D1D1] bg-white py-9 max-desktop:mt-10 max-desktop:border-t max-desktop:pb-2 desktop:border-b">
      <div className="flex items-center justify-between gap-3">
        <SelectSizes currentSizes={currentSizes} />

        <TableSizeModal />
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

  const onClick = async () => {
    if (!selectedItem.trim()) {
      return toast.error("Выберите размер!");
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
    });

    toast.success("Товар успешно добавлен в корзину!");
  };
  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="container pb-[135px] pt-[calc(var(--header-height)_+_32px)] max-desktop:pb-[48px] max-tabletSmall:pb-[42px] max-mobile:pt-[calc(var(--header-height)_+_24px)]"
    >
      <div className="relative grid grid-cols-goods gap-[40px] max-desktop:grid-cols-1 max-desktop:gap-[10px]">
        {/* LEFT */}
        {!isDesktop1100 && (
          <div className="relative flex flex-col gap-5">
            {item.image_builder.map((el) => {
              if (
                el.collection === "goodsImg" &&
                el.item.__typename === "goodsImg"
              ) {
                return (
                  <Lightbox key={el.id} imageUrl={pathImage(el.item.img.id)}>
                    <Image
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
                  <div key={el.id} className="flex gap-5">
                    <Lightbox imageUrl={pathImage(el.item.imgOne.id)}>
                      <Image
                        src={pathImage(el.item.imgOne.id)}
                        className={cn("h-full w-full object-cover", {
                          skeleton: imgSpinner,
                        })}
                        alt=""
                        height={el.item.imgOne.height}
                        width={el.item.imgOne.width}
                        onLoad={handleLoadingImageComplete}
                      />
                    </Lightbox>

                    <Lightbox imageUrl={pathImage(el.item.imgTwo.id)}>
                      <Image
                        className={cn("h-full w-full object-cover", {
                          skeleton: imgSpinner,
                        })}
                        alt=""
                        src={pathImage(el.item.imgTwo.id)}
                        height={el.item.imgTwo.height}
                        width={el.item.imgTwo.width}
                        onLoad={handleLoadingImageComplete}
                      />
                    </Lightbox>
                  </div>
                );
              }
            })}
          </div>
        )}

        {isDesktop1100 && (
          <div className="w-full">
            <Swiper spaceBetween={20} slidesPerView={1}>
              {item.image_builder.map((el) => {
                if (
                  el.collection === "goodsImg" &&
                  el.item.__typename === "goodsImg"
                ) {
                  return (
                    <SwiperSlide key={el.id}>
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
                    </SwiperSlide>
                  );
                } else if (
                  el.collection === "goodsTwoImages" &&
                  el.item.__typename === "goodsTwoImages"
                ) {
                  return (
                    <Fragment key={el.id}>
                      <SwiperSlide>
                        <Lightbox imageUrl={pathImage(el.item.imgOne.id)}>
                          <Image
                            src={pathImage(el.item.imgOne.id)}
                            className="aspect-square h-full w-full object-cover"
                            alt=""
                            objectFit="cover"
                            height={el.item.imgOne.height}
                            width={el.item.imgOne.width}
                          />
                        </Lightbox>
                      </SwiperSlide>

                      <SwiperSlide>
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
                      </SwiperSlide>
                    </Fragment>
                  );
                }
              })}
            </Swiper>
          </div>
        )}

        {/* Right */}
        <div className="relative">
          <div className="top-[calc(var(--header-height)_+_20px)] desktop:sticky">
            {/* TOP */}
            <div className="flex flex-col gap-9 border-b border-[#D1D1D1] pb-9 max-desktop:pb-8 max-mobile:gap-6 max-mobile:pb-6">
              <div className="flex flex-col gap-2 max-mobile:gap-[2px]">
                <h1 className="text-[28px] font-semibold uppercase leading-[34px] max-mobile:text-lg max-mobile:leading-[22px]">
                  {item.name}
                </h1>

                <div className="flex items-center gap-2">
                  <span className="text-[22px] font-medium leading-[27px] max-mobile:text-base">
                    {formatPrice(item.price)} ₽
                  </span>

                  {item.discount > 0 && (
                    <span className="text-lg font-medium text-[#959595] line-through max-mobile:text-sm">
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
                        <li className="flex items-center gap-[6px] max-mobile:text-sm">
                          {children}
                        </li>
                      );
                    },
                    p: ({ children }) => {
                      return <p className="max-mobile:text-sm">{children}</p>;
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
          />
        )}
      </div>
    </motion.section>
  );
};

export { GoodsItem };
