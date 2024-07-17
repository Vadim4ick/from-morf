import { GraphQLClient } from "graphql-request";

import { getSdk } from "./__generated__";

const client = new GraphQLClient(`http://0.0.0.0:8055/graphql`, {
  // headers: {
  //   Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  // },
});

export const gql = getSdk(client);

export * from "./__generated__";
