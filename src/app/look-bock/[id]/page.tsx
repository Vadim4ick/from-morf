import { gql } from "@/graphql/client";
import { LookBookItemPage } from "@/pages/LookBookItemPage";

const Page = async ({ params }: { params: { id: string } }) => {
  const { lookBook_by_id } = await gql.GetLookBockById({ id: params.id });

  return <LookBookItemPage lookBookItem={lookBook_by_id} />;
};

export default Page;
