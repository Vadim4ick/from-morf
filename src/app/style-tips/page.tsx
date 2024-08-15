import { gql } from "@/graphql/client";
import StyleTipsPage from "@/pages/StyleTipsPage";
import { Meta_SEO } from "@/shared/const/metadata";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Style Tips",
  description: Meta_SEO.description,
};

export const revalidate = 60;

const Page = async () => {
  const { styleTips } = await gql.GetTipsPage();

  if (!styleTips) {
    return notFound();
  }

  return <StyleTipsPage styleTips={styleTips} />;
};

export default Page;
