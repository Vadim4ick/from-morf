import { gql } from "@/graphql/client";
import { createDomain, createEffect } from "effector";

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
