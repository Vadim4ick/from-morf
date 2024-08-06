import { GetOrdersUserQuery } from "@/graphql/__generated__";
import { gql } from "@/graphql/client";
import { createDomain } from "effector";

export const orederHistory = createDomain();

export const getOrdersHistoryFx = orederHistory.createEffect(
  async ({ user_id }: { user_id: string }) => {
    try {
      const { orders } = await gql.GetOrdersUser({ user_id });

      return orders;
    } catch (error) {
      const err =
        // @ts-ignore
        (error as AxiosError).response?.data.error || (error as Error).message;
    }
  },
);

export const $orederHistory = orederHistory
  .createStore<GetOrdersUserQuery["orders"]>([])
  .on(getOrdersHistoryFx.done, (state, { result }) => result);
