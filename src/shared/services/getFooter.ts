"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetFooter = () => {
  return useQuery({
    queryKey: ["Footer"],
    queryFn: () => gql.GetFooter(),
  });
};
