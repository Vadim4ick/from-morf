"use client";

import { gql } from "@/graphql/client";
import { useMutation } from "@tanstack/react-query";

interface Props {
  id: string;
  size: string;
  user_id?: string;
}

export const useCreateBasket = () => {
  return useMutation({
    mutationFn: (props: Props) => {
      const { id, size, user_id } = props;

      return gql.CreateBasket({
        goods_id: typeof id === "number" ? id : parseInt(id),

        size: size,

        user_id: "1ede5a06-e36e-403a-9584-9860fe19911e",
      });
    },
  });
};
