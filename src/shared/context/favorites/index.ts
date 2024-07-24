import { createDomain } from "effector";

export const favorites = createDomain();

export const toggleFavorite = favorites.createEvent<string>();
export const setFavoriteOnLoad = favorites.createEvent<string[]>();

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
