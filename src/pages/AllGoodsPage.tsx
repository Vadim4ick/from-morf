import { AllGoodsHeader } from "@/components/modules/AllGoodsPage/AllGoodsHeader";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import { GetGoodItemsQuery } from "@/graphql/__generated__";

const AllGoodsPage = ({
  categories,
  sectionGoods,
}: {
  categories: string;
  sectionGoods: GetGoodItemsQuery["goods"];
}) => {
  return (
    <>
      {sectionGoods && (
        <AllGoodsHeader categories={categories} sectionGoods={sectionGoods} />
      )}

      <StyleAdvice />
    </>
  );
};

export default AllGoodsPage;
