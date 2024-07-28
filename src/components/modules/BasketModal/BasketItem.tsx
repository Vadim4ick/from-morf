import { GetBasketQuery } from "@/graphql/__generated__";
import { formatPrice, pathImage } from "@/lib/utils";
import { updateBasketFx } from "@/shared/context/basket";
import { $basket } from "@/shared/context/basket/state";
import { $user } from "@/shared/context/user/state";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Heart } from "@/shared/icons/Heart";
import { useUnit } from "effector-react";
import Image from "next/image";

const BasketItem = ({ item }: { item: GetBasketQuery["basket"][0] }) => {
  const user = useUnit($user);

  const increase = () => {
    if (user) {
      const newCount = item.count + 1;

      updateBasketFx({
        goods_id: item.id,
        count: newCount,
        user_id: user.id,
      });
    }
  };

  const decrease = () => {
    if (user) {
      const newCount = item.count - 1;

      if (newCount >= 1) {
        updateBasketFx({
          goods_id: item.id,
          count: newCount,
          user_id: user.id,
        });
      }
    }
  };

  return (
    <article className="grid grid-cols-[74px_1fr_85px] gap-3">
      <div className="relative size-[74px]">
        <Image
          src={pathImage(item.good.images[0].directus_files_id.id)}
          alt="test"
          fill
        />
      </div>

      <div className="flex flex-col justify-between gap-1">
        <div className="flex flex-col">
          <p className="font-medium">{item.good.name}</p>

          <div className="text-sm text-[#7E7E7E]">
            Размер:{" "}
            <span className="font-medium text-darkGrayColor">{item.size}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Heart
            className="size-5 cursor-pointer text-white"
            stroke={"#444444"}
          />

          <DeleteBasket className="size-5 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-1">
        <p className="font-medium">{formatPrice(item.good.price)} ₽</p>

        <div className="flex w-full items-center justify-between">
          <button
            onClick={decrease}
            className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]"
          >
            -
          </button>

          <div className="font-medium">{item.count}</div>

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
