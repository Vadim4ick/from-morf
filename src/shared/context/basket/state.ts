import { basket, setSelectedSize } from ".";

// interface Basket {
//   id: string;
//   size: string;
// }

// export const $basket = basket.createStore<Basket | null>(null);

export const $selectedSize = basket
  .createStore<string>("")
  .on(setSelectedSize, (_, val) => val);
