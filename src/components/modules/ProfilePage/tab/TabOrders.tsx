import { Button } from "@/components/ui/button";
import { GetOrdersUserQuery } from "@/graphql/__generated__";
import {
  discountPrice,
  formatPrice,
  getPluralForm,
  sumTotalAllPriceBasket,
  sumTotalCurrentPriceBasket,
  totalDiscount,
} from "@/lib/utils";
import {
  $orederHistory,
  getOrdersHistoryFx,
} from "@/shared/context/orderHistory";
import { $user } from "@/shared/context/user/state";
import { useUnit } from "effector-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const OrderItem = ({ order }: { order: GetOrdersUserQuery["orders"][0] }) => {
  const [discountCount, setDiscountCount] = useState(0);

  useEffect(() => {
    const res = order.items.filter((el) => el.discount && el.discount > 0);

    setDiscountCount(res.length);
  }, [order.items]);

  return (
    <div>
      <div className="bg-[#F6F6F6] px-[21px] pt-[23px]">
        <div className="flex justify-between pb-[27px]">
          <p className="text-lg font-medium uppercase">Заказ №{order.id}</p>

          <p className="text-sm text-[#787878]">
            {new Date(order.created_at).toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-col gap-8 pb-9">
          {order.items.map((el) => {
            return (
              <article
                key={`orderId-${order.id}_elId-${el.id}`}
                className="grid grid-cols-[74px_1fr_85px] gap-3"
              >
                <div className="relative size-[74px]">
                  <Image src={"/newItem/1.png"} alt="test" fill />
                </div>

                <div className="flex flex-col justify-between gap-1">
                  <div className="flex flex-col">
                    <p>{el.good.name}</p>

                    <div className="text-sm text-[#7E7E7E]">
                      Размер:{" "}
                      <span className="text-darkGrayColor">{el.size}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between gap-1">
                  <div className="flex flex-col items-end">
                    <p className="text-lg font-medium">
                      {formatPrice(el.good.price)} ₽
                    </p>

                    <span className="text-sm font-medium text-[#959595] line-through">
                      {discountPrice(el.good.discount, el.good.price)}₽
                    </span>
                  </div>

                  <div>{el.count} ед.</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="custom-shadow-footer relative flex flex-col bg-[#F8F8F8] after:absolute after:top-0 after:block after:h-[1px] after:w-full">
        <div className="flex flex-col px-5 py-5">
          <div className="flex flex-col gap-1 pb-3">
            {discountCount > 0 && (
              <div className="flex items-center justify-between">
                <p className="text-sm">
                  Скидка{" "}
                  <span className="text-[#7E7E7E]">
                    ({discountCount} {getPluralForm(discountCount)})
                  </span>
                </p>

                <div className="text-sm font-medium">
                  {totalDiscount(order.items)}%
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <p className="text-lg">Общая стоимость:</p>

              <div className="flex items-center justify-center gap-[6px]">
                {discountCount > 0 && (
                  <p className="text-sm font-medium text-[#8B8B8B] line-through">
                    {sumTotalAllPriceBasket(order.items)} ₽
                  </p>
                )}

                <p className="text-lg font-medium">
                  {sumTotalCurrentPriceBasket(order.items)} ₽
                </p>
              </div>
            </div>
          </div>

          <Button
            className="h-[50px] bg-[#E3E3E3] text-sm font-medium uppercase"
            variant={"outline"}
          >
            Повторить заказ
          </Button>
        </div>
      </div>
    </div>
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
        <div className="flex flex-col gap-9">
          {oredersHistory.length > 0 &&
            oredersHistory.map((order) => {
              return <OrderItem key={order.id} order={order} />;
            })}
        </div>
      </div>
    </div>
  );
};

export { TabOrders };
