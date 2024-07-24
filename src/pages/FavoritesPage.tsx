"use client";

import { NewItemCart } from "@/components/elements/NewItemCart";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { useGetFavoritesItems } from "@/shared/services/getFavoritesItems";

const FavoritesPage = () => {
  const items = [];

  const { favoritesFromLs } = useFavorite();

  const { data, isLoading } = useGetFavoritesItems({ ids: favoritesFromLs });

  if (isLoading) {
    return <div>Load..</div>;
  }

  return (
    <section className="pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <div className="flex flex-col pb-[30px]">
          <h1 className="text-center text-[32px] font-bold uppercase">
            избранное
          </h1>
          {data && (
            <p className="text-center text-[#7E7E7E]">
              {data.goods.length} товара
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-[20px] max-tabletBig:grid-cols-2 max-mobile:grid-cols-1">
          {data &&
            data.goods.map((item) => {
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

export { FavoritesPage };
