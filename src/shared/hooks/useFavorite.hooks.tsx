"use client";

import { useUnit } from "effector-react";
import { $favorites, $favoritesFromLS } from "../context/favorites/state";
import { getFavsFx } from "../context/favorites";

const useFavorite = () => {
  const favoritesFromLs = useUnit($favoritesFromLS);
  const favorites = useUnit($favorites);

  const isLoading = useUnit(getFavsFx.pending);

  return { favoritesFromLs, favorites, isLoading };
};

export { useFavorite };
