"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { getPluralForm } from "@/lib/utils";
import {
  getFavs,
  getFavsFx,
  setFavoriteOnLoad,
} from "@/shared/context/favorites";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { Heart } from "@/shared/icons/Heart";
import { useUnit } from "effector-react";
import { useEffect } from "react";

const FavoritesPage = () => {
  const { favorites } = useFavorite();

  const isLoading = useUnit(getFavsFx.pending);

  useEffect(() => {
    const data = localStorage.getItem("favs");

    if (data) {
      const favs = JSON.parse(data);

      if (typeof favs === "object" && favs.length > 0) {
        setFavoriteOnLoad(favs);
        getFavs({ ids: favs });
      }
    }
  }, []);

  if (isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return (
    <section className="pb-9 pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex flex-col pb-[30px]">
          <h1 className="text-center text-[32px] font-bold uppercase">
            избранное
          </h1>
          {favorites && (
            <p className="text-center text-[#7E7E7E]">
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
                  link="/"
                  item={item}
                />
              );
            })}
          </div>
        ) : (
          <div className="h-[500px] w-full">
            <div className="flex h-full flex-col items-center justify-center gap-[120px]">
              <div className="relative">
                <p className="text-2xl">
                  Вы пока не добавили ничего в избранное
                </p>

                <Heart
                  className="absolute left-1/2 top-0 -z-[1] size-[120px] -translate-x-1/2 -translate-y-[45%] text-transparent"
                  stroke="#EBEBEB"
                />
              </div>

              <Button variant={"secondary"}>Перейти к покупкам</Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoritesPage;
