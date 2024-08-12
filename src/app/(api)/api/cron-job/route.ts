import { ordersQueries } from "@/shared/queries/ordersQueries";
import cron from "node-cron";

cron.schedule("20 0 * * *", async () => {
  console.log("Выполняю задание в 00:00 местного времени");

  const arrIds = await ordersQueries.fetchGraphQLData();

  await ordersQueries.deleteItems(arrIds);

  console.log("Успех, удалили лишние orders!");
});

export async function GET() {
  return new Response("Работа Cron настроена и работает.", {
    status: 200,
  });
}
