import { gql } from "@/graphql/client";
import AllGoodsPage from "@/pages/AllGoodsPage";
import Link from "next/link";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata = {
  title: "Товары",
  description: Meta_SEO.description,
};

export const revalidate = 60;

const Page = async ({
  params,
}: {
  params: {
    directionTitle: string;
  };
}) => {
  const { goods } = await gql.GetGoodItems({
    directionTitle: decodeURIComponent(params.directionTitle),
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
