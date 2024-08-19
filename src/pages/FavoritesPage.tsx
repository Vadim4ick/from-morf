"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { cn, getPluralForm } from "@/lib/utils";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { Heart } from "@/shared/icons/Heart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";

const FavoritesPage = () => {
  const { favorites, isLoading, loadFavorites } = useFavorite();

  const isTablet768 = useMediaQuery(768);

  useEffect(() => {
    loadFavorites();
  }, []);

  const router = useRouter();

  if (isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return (
    <section className="h-full pb-9 pt-[calc(var(--header-height)_+_48px)] max-mobile:min-h-[100svh] max-mobile:pb-[16px] max-mobile:pt-[calc(var(--header-height)_+_36px)]">
      <div className="container h-full">
        <div className="max-mobile:flex max-mobile:h-full max-mobile:flex-col max-mobile:justify-between">
          <div
            className={cn("flex flex-col", {
              "pb-[30px]": favorites.length > 0,
            })}
          >
            <h1 className="heading">избранное</h1>
            {favorites && (
              <p className="text-center text-[#7E7E7E] max-mobile:text-[12px] max-mobile:leading-[16px]">
                {favorites.length} {getPluralForm(favorites.length)}
              </p>
            )}
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-3 gap-[20px] max-tabletBig:grid-cols-2 max-mobile:grid-cols-1">
              {favorites.map((item) => {
                return (
                  <NewItemCart
                    sizesImg="goods"
                    key={item.id}
                    link={`/goods/${item.id}`}
                    item={item}
                  />
                );
              })}
            </div>
          ) : (
            <>
              {isTablet768 ? (
                <>
                  <div className="relative flex max-tabletBig:flex-col-reverse max-tabletBig:items-center max-tabletBig:justify-center max-tabletBig:gap-12 max-mobile:gap-8">
                    <p className="text-center text-2xl font-medium max-mobile:text-sm">
                      Вы пока не добавили ничего{" "}
                      <br className="mobile:hidden" /> в избранное
                    </p>

                    <Heart
                      className={
                        "-z-[1] size-[120px] text-transparent max-mobile:size-[94px] tabletBig:absolute tabletBig:left-1/2 tabletBig:top-0 tabletBig:-translate-x-1/2 tabletBig:-translate-y-[45%]"
                      }
                      stroke="#EBEBEB"
                    />
                  </div>

                  <Button
                    onClick={() => router.push("/goods/additional/Новинки")}
                    className="min-h-[50px] min-w-[312px] font-semibold uppercase max-tabletBig:w-full max-mobile:min-h-[46px] max-mobile:text-[12px] max-mobile:leading-[16px]"
                    variant={"secondary"}
                  >
                    Перейти к покупкам
                  </Button>
                </>
              ) : (
                <div className="w-full tabletBig:h-[500px]">
                  <div className="flex h-full flex-col items-center justify-center mobile:gap-[120px]">
                    <div className="relative flex max-tabletBig:flex-col-reverse max-tabletBig:items-center max-tabletBig:justify-center max-tabletBig:gap-12 max-mobile:gap-8">
                      <p className="text-center text-2xl font-medium max-mobile:text-sm">
                        Вы пока не добавили ничего{" "}
                        <br className="mobile:hidden" /> в избранное
                      </p>

                      <Heart
                        className={
                          "-z-[1] size-[120px] text-transparent max-mobile:size-[94px] tabletBig:absolute tabletBig:left-1/2 tabletBig:top-0 tabletBig:-translate-x-1/2 tabletBig:-translate-y-[45%]"
                        }
                        stroke="#EBEBEB"
                      />
                    </div>

                    <Button
                      onClick={() => router.push("/goods/additional/Новинки")}
                      className="min-h-[50px] min-w-[312px] font-semibold uppercase max-tabletBig:w-full max-mobile:min-h-[46px] max-mobile:text-[12px] max-mobile:leading-[16px]"
                      variant={"secondary"}
                    >
                      Перейти к покупкам
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FavoritesPage;
