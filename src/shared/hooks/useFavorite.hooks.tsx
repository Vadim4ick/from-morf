"use client";

import { useUnit } from "effector-react";
import { $favoritesFromLS, setFavoriteOnLoad } from "../context/favorites";
import { useEffect } from "react";

const useFavorite = () => {
  const favoritesFromLs = useUnit($favoritesFromLS);

  useEffect(() => {
    const data = localStorage.getItem("favs");

    if (data) {
      const favs = JSON.parse(data);

      setFavoriteOnLoad(favs);
    }
  }, []);

  return { favoritesFromLs };
};

export { useFavorite };
