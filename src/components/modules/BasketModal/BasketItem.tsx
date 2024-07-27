import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Heart } from "@/shared/icons/Heart";
import Image from "next/image";

const BasketItem = () => {
  return (
    <article className="grid grid-cols-[74px_1fr_85px] gap-3">
      <div className="relative size-[74px]">
        <Image src={"/goods/1.png"} alt="test" fill />
      </div>

      <div className="flex flex-col justify-between gap-1">
        <div className="flex flex-col">
          <p className="font-medium">Повседневная рубашка</p>

          <div className="text-sm text-[#7E7E7E]">
            Размер: <span className="font-medium text-darkGrayColor">S</span>
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
        <p className="font-medium">12 540 ₽</p>

        <div className="flex w-full items-center justify-between">
          <span className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]">
            -
          </span>
          <div className="font-medium">1</div>
          <span className="flex size-6 items-center justify-center bg-white text-2xl font-bold text-[#818181]">
            +
          </span>
        </div>
      </div>
    </article>
  );
};

export { BasketItem };
