import { SliderRecommendations } from "@/components/elements/SliderRecommendations";
import { GoodsItem } from "@/components/modules/GoodsPage/GoodsItem";
import { GetGoodsQuery } from "@/graphql/__generated__";

const GoodsPage = ({ item }: { item: GetGoodsQuery["goods_by_id"] }) => {
  return (
    <>
      {item && <GoodsItem item={item} />}

      {item && item.recomendation.length > 0 && (
        <SliderRecommendations
          title="рекомендуем к образу"
          items={item.recomendation}
        />
      )}
    </>
  );
};

export default GoodsPage;
