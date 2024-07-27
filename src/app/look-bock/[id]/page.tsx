import { gql } from "@/graphql/client";
import LookBookItemPage from "@/pages/LookBookItemPage";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const { lookBook_by_id } = await gql.GetLookBockById({ id: params.id });

  if (!Boolean(lookBook_by_id)) {
    return notFound();
  }

  return <LookBookItemPage lookBookItem={lookBook_by_id} />;
};

export default Page;
