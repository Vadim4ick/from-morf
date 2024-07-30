import { AdviceCart } from "@/components/modules/StyleAdvice/AdviceCart";
import { gql } from "@/graphql/client";

const Page = async () => {
  const { styleTips } = await gql.GetTipsPage();

  return (
    <section className="pb-[160px] pt-[calc(var(--header-height)_+_48px)]">
      <div className="container">
        <h1 className="heading pb-8 max-tabletBig:pb-6">Советы по стилю</h1>

        <div className="grid max-w-[962px] grid-cols-2 gap-x-[20px] gap-y-[48px] max-mobile:grid-cols-1 max-mobile:justify-items-center max-mobile:gap-y-9">
          {styleTips.map((el) => (
            <article key={el.id} className="max-w-[466px]">
              <AdviceCart item={el} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
