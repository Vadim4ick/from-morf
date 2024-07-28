import { BasketIcon } from "@/shared/icons/header/BasketIcon";
import clsx from "clsx";
import { VariantHeader } from "../Header/Header";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Basket } from "@/shared/icons/Basket";
import { BasketItem } from "./BasketItem";
import { User } from "@/shared/types/authForm";
import {
  cn,
  getPluralForm,
  sumTotalCurrentPriceBasket,
  sumTotalAllPriceBasket,
} from "@/lib/utils";
import { useEffect } from "react";
import {
  deleteAllBasketByIdsFx,
  getBasket,
  getBasketFx,
} from "@/shared/context/basket";
import { useUnit } from "effector-react";
import { $basket } from "@/shared/context/basket/state";

const BasketModal = ({
  variant,
  user,
}: {
  variant: VariantHeader;
  user: User;
}) => {
  const isLoading = useUnit(getBasketFx.pending);

  const basket = useUnit($basket);

  useEffect(() => {
    getBasket({
      user_id: user.id,
    });
  }, [user.id]);

  const allDelete = () => {
    const basketIds = basket?.map((el) => el.id);

    if (user && basketIds) {
      deleteAllBasketByIdsFx({
        ids: basketIds,
        user_id: user.id,
      });
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <BasketIcon
            className={clsx("cursor-pointer text-transparent", {
              "stroke-darkGrayColor": variant === "black",
              "stroke-white": variant === "white",
            })}
          />
        </div>
      </DialogTrigger>

      <DialogContent
        portal={false}
        className="flex h-full max-h-[496px] w-full max-w-[430px] flex-col gap-0 bg-[#F8F8F8] p-0"
      >
        <DialogHeader className="custom-shadow-footer relative py-[20px] after:h-[1px]">
          <div className="flex flex-col gap-2 pb-2">
            <DialogTitle className="text-lg font-medium uppercase">
              корзина
            </DialogTitle>

            <span className="text-sm text-[#7E7E7E]">
              {basket && `${basket.length} ${getPluralForm(basket.length)}`}
            </span>
          </div>

          <button onClick={allDelete} className="absolute right-6 top-6">
            <DeleteBasket />
          </button>
        </DialogHeader>

        <div
          className={cn(
            "flex flex-grow flex-col gap-8 overflow-scroll px-5 pb-5",
            {
              "items-center justify-center": !basket || basket.length === 0,
            },
          )}
        >
          {!basket ||
            (basket.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-8">
                <Basket />

                <p>В вашей корзине ничего нет</p>
              </div>
            ))}

          {basket &&
            basket.map((el) => {
              return <BasketItem key={el.id} item={el} />;
            })}
        </div>

        <DialogFooter className="custom-shadow-footer relative after:h-[1px]">
          <div className="m-5 flex flex-col">
            <div className="flex flex-col gap-1 pb-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  Скидка <span className="text-[#7E7E7E]">(1 товар)</span>:
                </p>

                <div className="text-sm font-medium">25%</div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-lg font-medium">Общая стоимость:</p>

                <div className="flex items-center justify-center gap-[6px]">
                  <p className="text-sm font-medium text-[#8B8B8B] line-through">
                    {basket && sumTotalAllPriceBasket(basket)} ₽
                  </p>

                  <p className="text-lg font-medium">
                    {basket && sumTotalCurrentPriceBasket(basket)} ₽
                  </p>
                </div>
              </div>
            </div>

            <Button variant={"secondary"}>Перейти к новинкам</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BasketModal };
