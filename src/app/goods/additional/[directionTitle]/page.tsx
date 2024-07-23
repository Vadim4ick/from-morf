import { gql } from "@/graphql/client";
import { AllGoodsPage } from "@/pages/AllGoodsPage";
import { notFound } from "next/navigation";

const Page = async ({
  params,
}: {
  params: {
    directionTitle: string;
  };
}) => {
  const { goods } = await gql.GetGoodItemsAdditional({
    additionalTitle: decodeURIComponent(params.directionTitle),
  });

  if (!goods.length) {
    return notFound();
  }

  return (
    <AllGoodsPage
      categories={decodeURIComponent(params.directionTitle)}
      sectionGoods={goods}
    />
  );
};

export default Page;
