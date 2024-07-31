import { GetBasketByIdsQuery } from "@/graphql/__generated__";
import { cn, discountPrice, formatPrice, pathImage } from "@/lib/utils";
import { Basket, deleteById } from "@/shared/context/basket";
import { toggleFavorite } from "@/shared/context/favorites";
import { $user } from "@/shared/context/user/state";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Heart } from "@/shared/icons/Heart";
import { useUnit } from "effector-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const BasketItem = ({
  item,
  basket,
}: {
  item: GetBasketByIdsQuery["goods"][0];
  basket: Basket[];
}) => {
  const user = useUnit($user);

  const [el, setEl] = useState<Basket | null>(null);

  useEffect(() => {
    const currentItem = basket.find((el) => el.id === item.id);

    if (currentItem) {
      setEl(currentItem);
    }
  }, [basket, item.id]);

  const { favoritesFromLs } = useFavorite();

  const isFavorite = favoritesFromLs.includes(item.id);

  const increase = () => {
    if (user) {
      // const newCount = item.count + 1;
      // updateBasketFx({
      //   goods_id: item.id,
      //   count: newCount,
      //   user_id: user.id,
      // });
    }
  };

  const decrease = () => {
    if (user) {
      // const newCount = item.count - 1;
      // if (newCount >= 1) {
      //   updateBasketFx({
      //     goods_id: item.id,
      //     count: newCount,
      //     user_id: user.id,
      //   });
      // }
    }
  };

  const deleteItem = () => {
    deleteById({ id: item.id });
  };

  return (
    <article className="grid grid-cols-[74px_1fr_85px] gap-3">
      <div className="relative size-[74px]">
        <Image
          src={pathImage(item.images[0].directus_files_id.id)}
          alt="test"
          fill
        />
      </div>

      <div className="flex flex-col justify-between gap-1">
        <div className="flex flex-col">
          <p className="font-medium">{item.name}</p>

          {el && (
            <div className="text-sm text-[#7E7E7E]">
              Размер:{" "}
              <span className="font-medium text-darkGrayColor">
                {el.size.map((el) => el.value).join(" ")}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              toggleFavorite(item.id);
            }}
          >
            <Heart
              className={cn("size-5 text-transparent", {
                "stroke-error text-error": isFavorite,
              })}
              stroke={isFavorite ? "text-error" : "#444444"}
            />
          </button>

          <button onClick={deleteItem}>
            <DeleteBasket className="size-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-1">
        <div className="flex flex-col items-end">
          <p className="text-lg font-medium">{formatPrice(item.price)} ₽</p>

          {item.discount > 0 && (
            <span className="text-sm font-medium text-[#959595] line-through">
              {discountPrice(item.discount, item.price)} ₽
            </span>
          )}
        </div>

        <div className="flex w-full items-center justify-between">
          <button
            onClick={decrease}
            className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]"
          >
            -
          </button>

          {el && <div className="font-medium">{el.totalCount}</div>}

          <button
            onClick={increase}
            className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
};

export { BasketItem };
