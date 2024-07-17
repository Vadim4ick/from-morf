import { SliderRecommendations } from "@/components/elements/SliderRecommendations";
import { GoodsItem } from "@/components/modules/GoodsPage/GoodsItem";

const GoodsPage = async () => {
  return (
    <>
      <GoodsItem />

      <SliderRecommendations />
    </>
  );
};

export { GoodsPage };
