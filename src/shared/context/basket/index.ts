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

// export const $addBasket = basket
// .createStore<any>(null)
// // @ts-ignore
// .on(getFavsFx.done, (_, { result }) => result)
// .on(toggleFavorite, (state, itemId) => {
//   return state.filter((item) => item.id !== itemId);
// });
