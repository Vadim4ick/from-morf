import { gql } from "@/graphql/client";
import { AllGoodsPage } from "@/pages/AllGoodsPage";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { categories: string } }) => {
  const { goods } = await gql.GetGoodItems({
    title: decodeURIComponent(params.categories),
  });

  if (!goods.length) {
    return notFound();
  }

  return (
    <AllGoodsPage
      categories={decodeURIComponent(params.categories)}
      sectionGoods={goods}
    />
  );
};

export default Page;
