"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetFavoritesItems = ({ ids }: { ids: string[] }) => {
  return useQuery({
    queryKey: ["FavoritesItems"],
    queryFn: () => gql.GetGoodsFavoritesItems({ ids: ids }),
  });
};
