import { gql } from "@/graphql/client";
import { createDomain, createEffect } from "effector";
import { toast } from "sonner";

export const basket = createDomain();

export const getBasket = basket.createEvent<{ user_id: string }>();
export const updateBasket = basket.createEvent<{
  goods_id: string;
  count: number;
}>();

export const getBasketFx = createEffect(
  async ({ user_id }: { user_id: string }) => {
    try {
      const { basket } = await gql.GetBasket({
        user_id: user_id,
      });

      return basket;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);

export const createBasketFx = createEffect(
  async ({
    id,
    size,
    user_id,
  }: {
    id: string;
    size: string;
    user_id: string;
  }) => {
    try {
      const { create_basket_item } = await gql.CreateBasket({
        goods_id: typeof id === "number" ? id : parseInt(id),

        size: size,

        user_id,
      });

      toast.success("Товар успешно добавлен в корзину!");

      return create_basket_item;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);

export const updateBasketFx = createEffect(
  async ({
    goods_id,
    count,
    user_id,
  }: {
    goods_id: string;
    count: number;
    user_id: string;
  }) => {
    try {
      const { update_basket_item } = await gql.UpdateBasket({
        count,
        goods_id,
      });

      return update_basket_item;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);
