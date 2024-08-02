"use client";

import { useUnit } from "effector-react";
import { $favorites, $favoritesFromLS } from "../context/favorites/state";
import { getFavs, getFavsFx, setFavoriteOnLoad } from "../context/favorites";

const useFavorite = () => {
  const favoritesFromLs = useUnit($favoritesFromLS);
  const favorites = useUnit($favorites);

  const isLoading = useUnit(getFavsFx.pending);

  const loadFavorites = () => {
    const data = localStorage.getItem("favs");

    if (data) {
      const favs = JSON.parse(data);

      if (typeof favs === "object" && favs.length > 0) {
        console.log(data);

        setFavoriteOnLoad(favs);
        getFavs({ ids: favs });
      }
    }
  };

  return { favoritesFromLs, favorites, isLoading, loadFavorites };
};

export { useFavorite };
