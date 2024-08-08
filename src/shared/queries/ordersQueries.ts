import axios from "axios";

// lib/queries.js
export const getQuery = `
  query GetPendingOrders {
    orders(filter: { status: { _eq: "PENDING" } }) {
      id
      status
    }
  }
`;

export const deleteQuery = `
  mutation DeleteOrdersItems($ids: [ID!]!) {
    delete_orders_items(ids: $ids) {
      ids
    }
  }
`;

class OrdersQueries {
  async fetchGraphQLData() {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
        {
          query: getQuery,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data.data.orders.map(
        (el: { id: string; status: string }) => el.id,
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async deleteItems(ids: string[]) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
        {
          query: deleteQuery,
          variables: { ids }, // Передаем переменные в запрос
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}

export const ordersQueries = new OrdersQueries();
