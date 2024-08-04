import { NewItemCart } from "@/components/elements/NewItemCart";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";

const TabFavourites = () => {
  const { favorites } = useFavorite();

  return (
    <div className="container">
      <div className="mx-auto max-w-[453px]">
        <div className="flex flex-col gap-6">
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
      </div>
    </div>
  );
};

export { TabFavourites };
