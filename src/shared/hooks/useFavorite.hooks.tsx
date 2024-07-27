"use client";

import { useUnit } from "effector-react";
import { $favorites, $favoritesFromLS } from "../context/favorites/state";

const useFavorite = () => {
  const favoritesFromLs = useUnit($favoritesFromLS);
  const favorites = useUnit($favorites);

  return { favoritesFromLs, favorites };
};

export { useFavorite };
