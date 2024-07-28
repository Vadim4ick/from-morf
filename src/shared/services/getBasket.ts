"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetBasket = (user_id: string) => {
  return useQuery({
    queryKey: ["Basket"],
    queryFn: () =>
      gql.GetBasket({
        user_id,
      }),
  });
};
