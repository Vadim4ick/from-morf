import { GetBasketQuery } from "@/graphql/__generated__";
import { basket, getBasketFx, setSelectedSize } from ".";

export const $basket = basket
  .createStore<GetBasketQuery["basket"] | null>(null)
  .on(getBasketFx.done, (_, { result }) => result);

export const $selectedSize = basket
  .createStore<string>("")
  .on(setSelectedSize, (_, val) => val);
