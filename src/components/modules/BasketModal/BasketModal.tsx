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
import { gql } from "@/graphql/client";
import { authQuery } from "@/shared/queries/authQueries";

const BasketModal = ({ variant }: { variant: VariantHeader }) => {
  const isTablet991 = useMediaQuery(991);
  const user = useUnit($user);
  const { isAuth } = useAuth();

  const { basketIdsAndSizeAndCount: basket, discountCount } = useBasket();

  const onPayment = async () => {
    const price = parsePrice(sumTotalCurrentPriceBasket(basket));
    const discountPrice = parsePrice(sumTotalAllPriceBasket(basket));
    const discount = +totalDiscount(basket);

    if (!user) {
      return toast.error("Авторизуйтесь, прежде чем сделать заказ");
    }

    if (
      !user.first_name ||
      !user.last_name ||
      !user.phone_number ||
      !user.user_address
    ) {
      return toast.error(
        "Полностью заполните свой профиль прежде чем сделать заказ",
      );
    }

    const { success, orderId } = await processOrder({
      user_id: user.id,
      totalPrice: price,
      basket: basket,
      discount: discount,
      discountPrice: discountPrice,
    });

    if (success && orderId) {
      makePaymentFx({
        description: JSON.stringify({
          address: user.user_address,
          name: user.first_name,
          lastName: user.last_name,
        }),
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

        const orderId = await data.orderId;

        const { orders_by_id } = await gql.GetOrderById({ id: orderId });

        const orderItems = orders_by_id.items;
        const totalPrice = orders_by_id.totalPrice;

        authQuery.sendMailSuccessOrder({
          orderId,
          totalPrice,
          items: orderItems,
          user: user!,
        });
      }
    }

    localStorage.removeItem("paymentId");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <BasketIcon
            className={clsx(
              "cursor-pointer text-transparent max-mobile:size-4",
              {
                "stroke-darkGrayColor": variant === "black",
                "stroke-white": variant === "white",
              },
            )}
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
            <div className="flex flex-col gap-1 pb-2 max-tabletBig:ml-[80px] max-tabletBig:gap-1 max-mobile:ml-[22px] max-mobile:pb-[12px]">
              <DialogTitle className="text-lg font-semibold uppercase leading-[22px]">
                корзина
              </DialogTitle>

              <span className="text-[14px] leading-[18px] text-[#7E7E7E]">
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
            "scroll-basket mr-[2px] flex flex-grow flex-col gap-8 overflow-y-scroll px-5 pb-5 max-mobile:px-4 max-mobile:pb-[32px]",
            {
              "items-center justify-center": !basket || basket.length === 0,
            },
          )}
        >
          {!basket ||
            (basket.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-8">
                <Basket />

                <p className="max-mobile:text-[14px] max-mobile:leading-[18px]">
                  В вашей корзине ничего нет
                </p>
              </div>
            ))}

          {basket &&
            basket.map((el) => {
              return <BasketItem key={`${el.id}_${el.size}`} basket={el} />;
            })}
        </div>

        <DialogFooter className="custom-shadow-footer relative after:h-[1px]">
          <div className="mx-5 mb-5 mt-[18px] flex flex-col">
            {basket && Boolean(basket.length > 0) && (
              <div className="flex flex-col gap-1 pb-3">
                {discountCount > 0 && (
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] font-medium leading-[17px] max-mobile:text-[12px] max-mobile:leading-[14px]">
                      Скидка{" "}
                      <span className="text-[#7E7E7E]">
                        ({discountCount} {getPluralForm(discountCount)})
                      </span>
                      :
                    </p>

                    <div className="text-[14px] font-medium leading-[17px] max-mobile:text-[12px] max-mobile:leading-[14px]">
                      {totalDiscount(basket)}%
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium leading-[22px] max-mobile:text-[16px] max-mobile:leading-[19px]">
                    Общая стоимость:
                  </p>

                  <div className="flex items-center justify-center gap-[6px]">
                    {discountCount > 0 && (
                      <p className="text-[14px] font-medium leading-[17px] text-[#8B8B8B] line-through max-mobile:text-[12px] max-mobile:leading-[14px]">
                        {sumTotalAllPriceBasket(basket)} ₽
                      </p>
                    )}

                    <p className="text-[18px] font-semibold leading-[22px] max-mobile:text-[16px] max-mobile:leading-[19px]">
                      {sumTotalCurrentPriceBasket(basket)} ₽
                    </p>
                  </div>
                </div>
              </div>
            )}

            {basket.length > 0 ? (
              <Button
                className="h-[50px] font-semibold uppercase max-mobile:h-[46px] max-mobile:text-[12px] max-mobile:leading-[16px]"
                onClick={onPayment}
                variant={"secondary"}
              >
                Оформить заказ
              </Button>
            ) : (
              <Button
                className="h-[50px] font-semibold uppercase max-mobile:h-[46px] max-mobile:text-[12px] max-mobile:leading-[16px]"
                variant={"secondary"}
              >
                Перейти к новинкам
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { BasketModal };
