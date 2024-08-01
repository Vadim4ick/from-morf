import { createDomain } from "effector";

export interface Basket {
  id: string;
  size: string;
  count: number;
  title: string;
  price: number;
  discount: number;
  images: {
    id: string;
    width: number;
    height: number;
  };
}

export const basket = createDomain();

export const setSelectedSize = basket.createEvent<string>();

export const addBasketItem = basket.createEvent<Omit<Basket, "count">>();
export const setBasketOnLoad = basket.createEvent();

export const deleteAll = basket.createEvent();
export const deleteById = basket.createEvent<{ id: string; size: string }>();

export const $selectedSize = basket
  .createStore<string>("")
  .on(setSelectedSize, (_, val) => val);

export const $basket = basket
  .createStore<Basket[]>([])
  .on(addBasketItem, (state, newItem) => {
    let itemExists = false;

    const newArr = state.map((item) => {
      if (item.id === newItem.id && item.size === newItem.size) {
        itemExists = true;
        return { ...item, count: item.count + 1 };
      }
      return item;
    });

    if (!itemExists) {
      newArr.push({ ...newItem, count: 1 });
    }

    localStorage.setItem("basket", JSON.stringify(newArr));
    return newArr;
  })
  .on(setBasketOnLoad, () => {
    const items = localStorage.getItem("basket");

    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
  })
  .on(deleteAll, () => {
    localStorage.removeItem("basket");
    return [];
  })
  .on(deleteById, (state, props) => {
    const id = props.id;
    const size = props.size;

    const updatedItems = state.filter(
      (item) => !(item.id === id && item.size === size),
    );

    localStorage.setItem("basket", JSON.stringify(updatedItems));
    return updatedItems;
  });
