"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { getFavs, setFavoriteOnLoad } from "@/shared/context/favorites";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { useGetFavoritesItems } from "@/shared/services/getFavoritesItems";
import { useEffect } from "react";

const FavoritesPage = () => {
  const { favoritesFromLs, favorites } = useFavorite();

  console.log(favorites);

  useEffect(() => {
    const data = localStorage.getItem("favs");

    if (data) {
      const favs = JSON.parse(data);

      setFavoriteOnLoad(favs);
      getFavs({ ids: favs });
    }
  }, []);

  // if (isLoading) {
  //   return <div>Load..</div>;
  // }

  return (
    <section className="pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex flex-col pb-[30px]">
          <h1 className="text-center text-[32px] font-bold uppercase">
            избранное
          </h1>
          {favorites && (
            <p className="text-center text-[#7E7E7E]">
              {favorites.length} товара
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-[20px] max-tabletBig:grid-cols-2 max-mobile:grid-cols-1">
          {favorites &&
            favorites.map((item) => {
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
      </div>
    </section>
  );
};

export default FavoritesPage;
