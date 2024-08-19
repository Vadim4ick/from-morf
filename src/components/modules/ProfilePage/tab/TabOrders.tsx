import { Button } from "@/components/ui/button";
import { GetOrdersUserQuery } from "@/graphql/__generated__";
import {
  discountPrice,
  formatPrice,
  getPluralForm,
  parsePrice,
  sumTotalAllPriceBasket,
  sumTotalCurrentPriceBasket,
  totalDiscount,
} from "@/lib/utils";
import { motionConfigAnimate } from "@/shared/const";
import { makePaymentFx } from "@/shared/context/basket";
import {
  $orederHistory,
  getOrdersHistoryFx,
} from "@/shared/context/orderHistory";
import { $user } from "@/shared/context/user/state";
import { processOrder } from "@/shared/services/processOreder";
import { User } from "@/shared/types/authForm";
import { useUnit } from "effector-react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const OrderItem = ({
  order,
  user,
}: {
  order: GetOrdersUserQuery["orders"][0];
  user: User;
}) => {
  const [discountCount, setDiscountCount] = useState(0);

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    const res = order.items.filter((el) => el.discount && el.discount > 0);

    setDiscountCount(res.length);
  }, [order.items]);

  const onPayment = async () => {
    const price = parsePrice(sumTotalCurrentPriceBasket(order.items));
    const discountPrice = parsePrice(sumTotalAllPriceBasket(order.items));
    const discount = +totalDiscount(order.items);

    const basket = order.items.map((el) => el.good);

    const { success, orderId } = await processOrder({
      user_id: user.id,
      totalPrice: price,
      // @ts-ignore
      basket: basket,
      discount: discount,
      discountPrice: discountPrice,
    });

    const description = `Адрес - ${user.user_address}`;

    if (success && orderId) {
      makePaymentFx({
        description: description.trim(),
        orderId: orderId,
        amount: price,
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
    >
      <div className="bg-[#F6F6F6] px-[21px] pt-[23px] max-mobile:px-[14px] max-mobile:pt-[24px]">
        <div className="flex justify-between pb-[27px] max-mobile:pb-[22px]">
          <p className="text-[18px] font-semibold uppercase leading-[22px]">
            Заказ №{order.id}
          </p>

          <p className="text-[14px] font-medium leading-[17px] text-[#787878]">
            {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-col gap-8 pb-9 max-mobile:pb-[32px]">
          {order.items.map((el) => {
            return (
              <article
                key={`orderId-${order.id}_elId-${el.id}`}
                className="grid grid-cols-[74px_1fr_85px] gap-3 max-mobile:gap-[10px]"
              >
                <div className="relative size-[74px]">
                  <Image
                    src={"/newItem/1.png"}
                    className="object-cover"
                    alt="test"
                    fill
                  />
                </div>

                <div className="flex flex-col justify-between gap-1">
                  <div className="flex w-full max-w-[145px] flex-shrink flex-grow flex-col gap-1">
                    <p className="h-[38px] overflow-hidden text-ellipsis font-medium leading-[19px]">
                      {el.good.name}
                    </p>

                    <div className="text-[14px] leading-[17px] text-[#7E7E7E]">
                      Размер:{" "}
                      <span className="font-medium text-darkGrayColor">
                        {el.size}
                      </span>
                    </div>
                  </div>
                  {/* <div className="flex w-full max-w-[145px] flex-shrink flex-grow flex-col gap-1">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap font-medium leading-[19px]">
                      {el.good.name}
                    </p>

                    <div className="text-[14px] leading-[17px] text-[#7E7E7E]">
                      Размер:{" "}
                      <span className="font-medium text-darkGrayColor">
                        {el.size}
                      </span>
                    </div>
                  </div> */}
                </div>

                <div className="flex flex-col items-end justify-between gap-1">
                  <div className="flex flex-col items-end">
                    <p className="text-[18px] font-semibold leading-[22px]">
                      {formatPrice(el.good.price)} ₽
                    </p>

                    <span className="text-[14px] font-medium leading-[17px] text-[#959595] line-through">
                      {discountPrice(el.good.discount, el.good.price)}₽
                    </span>
                  </div>

                  <div className="font-medium">{el.count} ед.</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="custom-shadow-footer relative flex flex-col bg-[#F8F8F8] after:absolute after:top-0 after:block after:h-[1px] after:w-full">
        <div className="flex flex-col px-[20px] pb-[20px] pt-[18px] max-mobile:px-[14px]">
          <div className="flex flex-col gap-1 pb-3">
            {discountCount > 0 && (
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-medium leading-[17px]">
                  Скидка{" "}
                  <span className="text-[#7E7E7E]">
                    ({discountCount} {getPluralForm(discountCount)})
                  </span>
                </p>

                <div className="text-[14px] font-medium leading-[17px]">
                  {totalDiscount(order.items)}%
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <p className="text-[18px] font-medium leading-[22px]">
                Общая стоимость:
              </p>

              <div className="flex items-center justify-center gap-[6px]">
                {discountCount > 0 && (
                  <p className="text-[14px] font-medium leading-[17px] text-[#8B8B8B] line-through">
                    {sumTotalAllPriceBasket(order.items)} ₽
                  </p>
                )}

                <p className="text-[18px] font-semibold leading-[22px]">
                  {sumTotalCurrentPriceBasket(order.items)} ₽
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onPayment}
            className="h-[50px] bg-[#E3E3E3] text-sm font-semibold uppercase"
            variant={"outline"}
          >
            Повторить заказ
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const TabOrders = () => {
  const [user, oredersHistory] = useUnit([$user, $orederHistory]);

  useEffect(() => {
    if (user) {
      getOrdersHistoryFx({ user_id: user.id });
    }
  }, [user]);

  return (
    <div className="container">
      <div className="mx-auto max-w-[453px]">
        <div className="flex flex-col gap-9 max-mobile:gap-[32px]">
          {oredersHistory.length > 0 &&
            user &&
            oredersHistory.map((order) => {
              return <OrderItem key={order.id} user={user} order={order} />;
            })}
        </div>
      </div>
    </div>
  );
};

export { TabOrders };
