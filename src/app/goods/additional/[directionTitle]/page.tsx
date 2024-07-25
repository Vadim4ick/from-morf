import { gql } from "@/graphql/client";
import AllGoodsPage from "@/pages/AllGoodsPage";
import Link from "next/link";

const Page = async ({
  params,
}: {
  params: {
    directionTitle: string;
  };
}) => {
  const { goods } = await gql.GetGoodItemsAdditional({
    additionalTitle: decodeURIComponent(params.directionTitle),
  });

  const { styleTips } = await gql.GetLastTwoStyleTips();

  if (!goods || !goods.length) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
        <p className="text-2xl font-medium">
          Товары в данной категории не найдены.
        </p>

        <Link className="underline" href="/">
          Вернуться на главную страницу
        </Link>
      </div>
    );
  }

  return (
    <AllGoodsPage
      categories={decodeURIComponent(params.directionTitle)}
      sectionGoods={goods}
      styleTips={styleTips}
    />
  );
};

export default Page;
