import { Goods, gql } from "@/graphql/client";
import { createDomain, createEffect, sample } from "effector";

export const favorites = createDomain();

export const toggleFavorite = favorites.createEvent<string>();
export const setFavoriteOnLoad = favorites.createEvent<string[]>();
export const deleteFavs = favorites.createEvent<string>();
export const getFavs = favorites.createEvent<{ ids: string[] }>();

export const getFavsFx = createEffect(async ({ ids }: { ids: string[] }) => {
  try {
    const { goods } = await gql.GetGoodsFavoritesItems({ ids: ids });

    return goods;
  } catch (error) {
    console.log("err", (error as Error).message);
  }
});

export const $favoritesFromLS = favorites
  .createStore<string[]>([])
  .on(toggleFavorite, (state, itemId) => {
    if (state.includes(itemId)) {
      const res = state.filter((id) => id !== itemId);

      localStorage.setItem("favs", JSON.stringify(res));

      return res;
    } else {
      const res = [...state, itemId];

      localStorage.setItem("favs", JSON.stringify(res));

      return res;
    }
  })
  .on(setFavoriteOnLoad, (_, favsItems) => {
    return favsItems;
  });

export const $favorites = favorites
  .createStore<Goods[]>([])
  // @ts-ignore
  .on(getFavsFx.done, (_, { result }) => result)
  .on(toggleFavorite, (state, itemId) => {
    return state.filter((item) => item.id !== itemId);
  });

sample({
  clock: getFavs,
  source: $favorites,
  fn: (_, data) => data,
  target: getFavsFx,
});
