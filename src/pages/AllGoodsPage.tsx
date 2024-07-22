import { AllGoodsHeader } from "@/components/modules/AllGoodsPage/AllGoodsHeader";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import { GetNewItemsQuery } from "@/graphql/__generated__";

const AllGoodsPage = ({
  categories,
  newItems,
}: {
  categories: string;
  newItems: GetNewItemsQuery["newItems"];
}) => {
  return (
    <>
      <AllGoodsHeader categories={categories} newItems={newItems} />

      <StyleAdvice />
    </>
  );
};

export { AllGoodsPage };
