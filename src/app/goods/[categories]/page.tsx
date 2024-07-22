import { gql } from "@/graphql/client";
import { AllGoodsPage } from "@/pages/AllGoodsPage";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { categories: string } }) => {
  const { sectionGoods } = await gql.GetSectionItems({
    title: decodeURIComponent(params.categories),
  });

  if (!sectionGoods.length) {
    return notFound();
  }

  return (
    <AllGoodsPage
      categories={decodeURIComponent(params.categories)}
      sectionGoods={sectionGoods[0]}
    />
  );
};

export default Page;
