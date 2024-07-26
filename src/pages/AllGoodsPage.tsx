import { AllGoodsHeader } from "@/components/modules/AllGoodsPage/AllGoodsHeader";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";
import {
  GetGoodItemsQuery,
  GetLastTwoStyleTipsQuery,
} from "@/graphql/__generated__";

const AllGoodsPage = ({
  categories,
  sectionGoods,
  styleTips,
}: {
  categories: string;
  sectionGoods: GetGoodItemsQuery["goods"];
  styleTips: GetLastTwoStyleTipsQuery["styleTips"];
}) => {
  return (
    <>
      {sectionGoods && (
        <AllGoodsHeader categories={categories} sectionGoods={sectionGoods} />
      )}

      {styleTips && (
        <StyleAdvice className="bg-[#EDEDED]" styleTips={styleTips} />
      )}
    </>
  );
};

export default AllGoodsPage;
