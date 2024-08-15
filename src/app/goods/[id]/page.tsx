import { gql } from "@/graphql/client";
import GoodsPage from "@/pages/GoodsPage";
import { notFound } from "next/navigation";

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
