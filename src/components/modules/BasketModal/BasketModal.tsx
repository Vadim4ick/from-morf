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
  totalDiscount,
  parsePrice,
} from "@/lib/utils";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import {
  checkPaymentFx,
  deleteAll,
  deleteBasket,
  makePaymentFx,
} from "@/shared/context/basket";
import { useBasket } from "@/shared/hooks/useBasket.hooks";
import { BasketItem } from "./BasketItem";
import { Button } from "@/components/ui/button";
import { useUnit } from "effector-react";
import { $user } from "@/shared/context/user/state";
import { processOrder, updateStatus } from "@/shared/services/processOreder";
import { useAuth } from "@/shared/hooks/useAuth.hooks";
import { useEffect } from "react";
import { toast } from "sonner";

const BasketModal = ({ variant }: { variant: VariantHeader }) => {
  const isTablet991 = useMediaQuery(991);
  const user = useUnit($user);
  const { isAuth } = useAuth();

  const { basketIdsAndSizeAndCount: basket, discountCount } = useBasket();

  const onPayment = async () => {
    // // const description = `
    // //   Иия получателя - ${user?.name + " " + user?.surname},
    // //   Адрес - ${user?.address},
    // //   Email - ${user?.email},
    // //   Номер телефона - ${user?.phone},
    // // `;
    const price = parsePrice(sumTotalCurrentPriceBasket(basket));
    const discountPrice = parsePrice(sumTotalAllPriceBasket(basket));
    const discount = +totalDiscount(basket);

    if (!user) {
      return;
    }

    const { success, orderId } = await processOrder({
      user_id: user.id,
      totalPrice: price,
      basket: basket,
      discount: discount,
      discountPrice: discountPrice,
    });
    const description = `Адрес - ${user.address}`;

    if (success && orderId) {
      makePaymentFx({
        description: description.trim(),
        orderId: orderId,
        amount: price,
      });
    }
  };

  useEffect(() => {
    clearCartByPayment();
  }, [isAuth]);

  const clearCartByPayment = async () => {
    const paymentId = JSON.parse(localStorage.getItem("paymentId") as string);

    if (!isAuth || !paymentId) {
      return;
    }

    const data = await checkPaymentFx({ paymentId });

    if (data) {
      if (data.result.status === "succeeded") {
        deleteBasket();
        await updateStatus(data.result.metadata.order_id, "SUCCESS");
        toast.success("Успешная оплата");
      }
    }

    localStorage.removeItem("paymentId");
  };

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
            basket.map((el) => {
              return <BasketItem key={`${el.id}_${el.size}`} basket={el} />;
            })}
        </div>

        <DialogFooter className="custom-shadow-footer relative after:h-[1px]">
          <div className="m-5 flex flex-col">
            {basket && Boolean(basket.length > 0) && (
              <div className="flex flex-col gap-1 pb-3">
                {discountCount > 0 && (
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      Скидка{" "}
                      <span className="text-[#7E7E7E]">
                        ({discountCount} {getPluralForm(discountCount)})
                      </span>
                      :
                    </p>

                    <div className="text-sm font-medium">
                      {totalDiscount(basket)}%
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium">Общая стоимость:</p>

                  <div className="flex items-center justify-center gap-[6px]">
                    {discountCount > 0 && (
                      <p className="text-sm font-medium text-[#8B8B8B] line-through">
                        {sumTotalAllPriceBasket(basket)} ₽
                      </p>
                    )}

                    <p className="text-lg font-medium">
                      {sumTotalCurrentPriceBasket(basket)} ₽
                    </p>
                  </div>
                </div>
              </div>
            )}

            <Button onClick={onPayment} variant={"secondary"}>
              Перейти к оплате
            </Button>
            {/* <Button variant={"secondary"}>Перейти к новинкам</Button> */}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BasketModal };
