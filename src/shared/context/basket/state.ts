import { GetBasketQuery } from "@/graphql/__generated__";
import { basket, getBasketFx } from ".";

export const $basket = basket
  .createStore<GetBasketQuery["basket"] | null>(null)
  .on(getBasketFx.done, (_, { result }) => result);
