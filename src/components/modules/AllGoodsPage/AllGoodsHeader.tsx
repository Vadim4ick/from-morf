import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { NewItemCart } from "@/components/elements/NewItemCart";
import { GetGoodItemsQuery } from "@/graphql/__generated__";

const AllGoodsHeader = ({
  categories,
  sectionGoods,
}: {
  categories: string;
  sectionGoods: GetGoodItemsQuery["goods"];
}) => {
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
          <div className="grid w-full grid-cols-2 gap-x-[20px] gap-y-12 max-mobile:grid-cols-1 max-mobile:gap-y-6">
            {sectionGoods.map((item) => (
              <NewItemCart
                key={item.id}
                sizesImg="goods"
                item={item}
                link={`/goods/${item.direction.title}/${item.id}`}
              />
            ))}
          </div>

          <ButtonAnimate>показать больше</ButtonAnimate>
        </div>
      </div>
    </section>
  );
};

export { AllGoodsHeader };
