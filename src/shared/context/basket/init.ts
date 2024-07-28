import { sample } from "effector";
import { createBasketFx, getBasket, getBasketFx, updateBasketFx } from ".";
import { $basket } from "./state";

sample({
  clock: getBasket,
  source: $basket,
  fn: (_, data) => data,
  target: getBasketFx,
});

sample({
  clock: updateBasketFx.done,
  fn: ({ params }) => ({ user_id: params.user_id }),
  target: getBasket,
});

sample({
  clock: createBasketFx.done,
  fn: ({ params }) => ({ user_id: params.user_id }),
  target: getBasket,
});
