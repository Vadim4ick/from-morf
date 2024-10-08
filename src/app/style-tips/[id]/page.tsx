import { gql } from "@/graphql/client";
import StyleTipsItemPage from "@/pages/StyleTipsItemPage";
import { Meta_SEO } from "@/shared/const/metadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { styleTips_by_id } = await gql.GetTipsItemPage({
    id: params.id,
  });

  if (!styleTips_by_id) {
    return notFound();
  }

  const metadata = {
    title: styleTips_by_id.title,
    description: Meta_SEO.description,
  };

  return metadata;
}

export const revalidate = 60;

const Page = async ({ params }: { params: { id: string } }) => {
  const { styleTips_by_id } = await gql.GetTipsItemPage({
    id: params.id,
  });

  const { styleTips } = await gql.GetLastTwoStyleTips();

  if (!styleTips_by_id) {
    return notFound();
  }

  return <StyleTipsItemPage item={styleTips_by_id} styleTwoTips={styleTips} />;
};

export default Page;
