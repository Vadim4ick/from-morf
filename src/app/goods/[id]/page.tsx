import { gql } from "@/graphql/client";
import GoodsPage from "@/pages/GoodsPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (!id) {
    return notFound();
  }

  const { goods_by_id } = await gql.GetGoods({ id: params.id });

  if (!goods_by_id) {
    return notFound();
  }

  const metadata = {
    title: goods_by_id.name,
    description:
      "Жилеты, платья, юбки и другие модели FROMMORF. Преимущественно натуральные ткани, сдержанная палитра и архитектурный крой.",
  };

  return metadata;
}

export const revalidate = 60;

const Page = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);

  if (!id) {
    return notFound();
  }

  const { goods_by_id } = await gql.GetGoods({ id: params.id });

  if (!goods_by_id) {
    return notFound();
  }

  return <GoodsPage item={goods_by_id} />;
};

export default Page;
