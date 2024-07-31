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
import { DeleteBasket } from "@/shared/icons/DeleteBasket";
import { Basket } from "@/shared/icons/Basket";
import {
  cn,
  getPluralForm,
  sumTotalCurrentPriceBasket,
  sumTotalAllPriceBasket,
} from "@/lib/utils";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { useEffect } from "react";
import { deleteAll, getBasket } from "@/shared/context/basket";
import { useBasket } from "@/shared/hooks/useBasket.hooks";
import { BasketItem } from "./BasketItem";
import { Button } from "@/components/ui/button";

const BasketModal = ({ variant }: { variant: VariantHeader }) => {
  const isTablet991 = useMediaQuery(991);

  const { basketIdsAndSizeAndCount: basket, ids, basketItems } = useBasket();

  useEffect(() => {
    if (ids.length > 0) {
      getBasket({ ids: ids });
    }
  }, [ids]);

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
        portal={isTablet991}
        closePosition={isTablet991 ? "right" : "left"}
        className="flex h-full max-h-[496px] w-full max-w-[430px] flex-col gap-0 bg-[#F8F8F8] p-0 max-tabletBig:top-0 max-tabletBig:max-h-full max-tabletBig:max-w-full"
      >
        <DialogHeader className="custom-shadow-footer relative py-[20px] after:h-[1px] max-tabletBig:text-start">
          <div className="max-tabletBig:flex max-tabletBig:flex-row max-tabletBig:items-center max-tabletBig:justify-between">
            <div className="flex flex-col gap-2 pb-2 max-tabletBig:ml-[80px] max-tabletBig:gap-1 max-mobile:ml-[22px]">
              <DialogTitle className="text-lg font-medium uppercase">
                корзина
              </DialogTitle>

              <span className="text-sm text-[#7E7E7E]">
                {basket && `${basket.length} ${getPluralForm(basket.length)}`}
              </span>
            </div>

            <div
              className={cn("", {
                "absolute right-6 top-6": !isTablet991,
                "mr-[60px]": isTablet991,
              })}
            >
              <button onClick={() => deleteAll()}>
                <DeleteBasket />
              </button>
            </div>
          </div>
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
            basketItems.map((el) => {
              return <BasketItem key={el.id} item={el} basket={basket} />;
            })}
        </div>

        <DialogFooter className="custom-shadow-footer relative after:h-[1px]">
          <div className="m-5 flex flex-col">
            {basketItems && Boolean(basketItems.length > 0) && (
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
                      {basket && sumTotalAllPriceBasket(basketItems)} ₽
                    </p>

                    <p className="text-lg font-medium">
                      {basket && sumTotalCurrentPriceBasket(basketItems)} ₽
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button variant={"secondary"}>Перейти к новинкам</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BasketModal };
