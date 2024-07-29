"use client";

import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { NewItemCart } from "@/components/elements/NewItemCart";
import { GetGoodItemsQuery } from "@/graphql/__generated__";
import { useState } from "react";

const VISIBLE_ITEMS = 6;

const AllGoodsHeader = ({
  categories,
  sectionGoods,
}: {
  categories: string;
  sectionGoods: GetGoodItemsQuery["goods"];
}) => {
  const [visibleItems, setVisibleItems] = useState(VISIBLE_ITEMS);

  const showMoreItems = () => {
    setVisibleItems((prevCount) => prevCount + VISIBLE_ITEMS);
  };

  return (
    <section className="pb-32 pt-[var(--header-height)] max-mobile:pb-[72px]">
      <div className="container">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h1 className="pt-[48px] text-[32px] font-medium uppercase">
            {categories}
          </h1>

          <p className="text-[#7E7E7E]">{sectionGoods.length} товаров</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-12">
          <div className="grid w-full grid-cols-2 gap-x-[20px] gap-y-12 max-mobile:grid-cols-1 max-mobile:justify-items-center max-mobile:gap-y-6">
            {sectionGoods.slice(0, visibleItems).map((item) => (
              <NewItemCart
                key={item.id}
                sizesImg="goods"
                item={item}
                link={`/goods/${item.id}`}
              />
            ))}
          </div>

          {visibleItems < sectionGoods.length && (
            <ButtonAnimate onClick={showMoreItems}>
              показать больше
            </ButtonAnimate>
          )}
        </div>
      </div>
    </section>
  );
};

export { AllGoodsHeader };
