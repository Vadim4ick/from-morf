import { createDomain } from "effector";

const basket = createDomain();

export const toggleBasketOpen = basket.createEvent();

export const $basketOpen = basket
  .createStore<boolean>(false)
  .on(toggleBasketOpen, (state) => {
    if (state) {
      return false;
    } else {
      return true;
    }
  });
