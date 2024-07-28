import { GetBasketQuery } from "@/graphql/__generated__";
import { formatPrice, pathImage } from "@/lib/utils";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";

const BasketItem = ({ item }: { item: GetBasketQuery["basket"][0] }) => {
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
          <span className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]">
            -
          </span>

          <div className="font-medium">{item.count}</div>

          <span className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]">
            +
          </span>
        </div>
      </div>
    </article>
  );
};

export { BasketItem };
