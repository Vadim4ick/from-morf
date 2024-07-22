import { AllGoodsHeader } from "@/components/modules/AllGoodsPage/AllGoodsHeader";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import { GetSectionItemsQuery } from "@/graphql/__generated__";

const AllGoodsPage = ({
  categories,
  sectionGoods,
}: {
  categories: string;
  sectionGoods: GetSectionItemsQuery["sectionGoods"][0];
}) => {
  return (
    <>
      <AllGoodsHeader categories={categories} sectionGoods={sectionGoods} />

      <StyleAdvice />
    </>
  );
};

export { AllGoodsPage };
