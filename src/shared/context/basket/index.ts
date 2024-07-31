import { GetBasketByIdsQuery, gql } from "@/graphql/client";
import { createDomain, createEffect, sample } from "effector";

export interface Basket {
  id: string;
  size: {
    value: string;
    count: number;
  }[];
  totalCount: number;
}

export const basket = createDomain();

export const setSelectedSize = basket.createEvent<string>();

export const addBasketItem = basket.createEvent<{ id: string; size: string }>();
export const setBasketOnLoad = basket.createEvent();

export const deleteAll = basket.createEvent();
export const deleteById = basket.createEvent<{ id: string }>();

export const getBasket = basket.createEvent<{ ids: string[] }>();

export const getBasketByIdsFx = createEffect(
  async ({ ids }: { ids: string[] }) => {
    try {
      const { goods } = await gql.GetBasketByIds({ ids: ids });

      return goods;
    } catch (error) {
      console.log("err", (error as Error).message);
    }
  },
);

export const $basket = basket
  .createStore<Basket[]>([])
  .on(addBasketItem, (state, newItem) => {
    let itemExists = false;

    const newArr = state.map((item) => {
      if (item.id === newItem.id) {
        itemExists = true;
        let sizeExists = false;

        const updatedSizes = item.size.map((size) => {
          if (size.value === newItem.size) {
            sizeExists = true;
            return { ...size, count: size.count + 1 };
          }
          return size;
        });

        if (!sizeExists) {
          updatedSizes.push({ value: newItem.size, count: 1 });
        }

        // Calculate the totalCount
        const totalCount = updatedSizes.reduce(
          (total, size) => total + size.count,
          0,
        );

        return { ...item, size: updatedSizes, totalCount };
      }
      return item;
    });

    if (!itemExists) {
      const newItemSizes = [{ value: newItem.size, count: 1 }];
      newArr.push({
        id: newItem.id,
        size: newItemSizes,
        totalCount: 1, // initial count since we are adding the first size
      });
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
    const updatedItems = state.filter((item) => +item.id !== +props.id);

    localStorage.setItem("basket", JSON.stringify(updatedItems));
    return updatedItems;
  });

export const $basketItems = basket
  .createStore<GetBasketByIdsQuery["goods"]>([])
  .on(getBasketByIdsFx.done, (_, { result }) => result)
  .on(deleteAll, () => {
    return [];
  })
  .on(deleteById, (state, props) => {
    const updatedItems = state.filter((item) => +item.id !== +props.id);

    return updatedItems;
  });

sample({
  clock: getBasket,
  source: $basket,
  fn: (_, data) => data,
  target: getBasketByIdsFx,
});
