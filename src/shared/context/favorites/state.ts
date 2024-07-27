import { Goods } from "@/graphql/__generated__";
import { favorites, setFavoriteOnLoad, toggleFavorite, getFavsFx } from ".";

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
