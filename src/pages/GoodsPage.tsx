import { SliderRecommendations } from "@/components/elements/SliderRecommendations";
import { GoodsItem } from "@/components/modules/GoodsPage/GoodsItem";
import { GetGoodsQuery } from "@/graphql/__generated__";

const GoodsPage = ({ item }: { item: GetGoodsQuery["goods_by_id"] }) => {
  return (
    <>
      <GoodsItem item={item} />

      <SliderRecommendations />
    </>
  );
};

export { GoodsPage };
