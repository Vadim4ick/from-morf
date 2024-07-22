import { gql } from "@/graphql/client";
import { AllGoodsPage } from "@/pages/AllGoodsPage";

const Page = async ({ params }: { params: { categories: string } }) => {
  const { newItems } = await gql.GetNewItems();

  return <AllGoodsPage categories={params.categories} newItems={newItems} />;
};

export default Page;
