import { cn, discountPrice, formatPrice, pathImage } from "@/lib/utils";
import {
  Basket,
  decrementItemCount,
  deleteById,
  incrementItemCount,
} from "@/shared/context/basket";
import { toggleFavorite } from "@/shared/context/favorites";
import { useFavorite } from "@/shared/hooks/useFavorite.hooks";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";

const BasketItem = ({ basket }: { basket: Basket }) => {
  const { favoritesFromLs } = useFavorite();

  const isFavorite = favoritesFromLs.includes(basket.id);

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  const increase = () => {
    incrementItemCount({
      id: basket.id,
      size: basket.size,
    });
  };

  const decrease = () => {
    decrementItemCount({
      id: basket.id,
      size: basket.size,
    });
  };

  const deleteItem = () => {
    deleteById({ id: basket.id, size: basket.size });
  };

  return (
    <article className="grid grid-cols-[74px_1fr_85px] gap-3">
      <div className="relative size-[74px]">
        <Image
          className={cn("object-cover", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
          src={pathImage(basket.images.id)}
          alt="test"
          fill
        />
      </div>

      <div className="flex flex-col justify-between gap-1">
        <div className="flex flex-col">
          <p className="font-medium">{basket.title}</p>

          <div className="text-sm text-[#7E7E7E]">
            Размер:{" "}
            <span className="font-medium text-darkGrayColor">
              {basket.size}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              toggleFavorite(basket.id);
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
          <p className="text-lg font-medium">
            {formatPrice(basket.totalPrice)} ₽
          </p>

          {basket.discount > 0 && (
            <span className="text-sm font-medium text-[#959595] line-through">
              {discountPrice(basket.discount, basket.totalPrice)} ₽
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

          <div className="font-medium">{basket.count}</div>

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
