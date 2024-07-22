"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetBurger = () => {
  return useQuery({
    queryKey: ["Burger"],
    queryFn: () => gql.GetBurger(),
  });
};
