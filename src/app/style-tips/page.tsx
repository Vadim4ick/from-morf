import { gql } from "@/graphql/client";
import StyleTipsPage from "@/pages/StyleTipsPage";
import { notFound } from "next/navigation";

const Page = async () => {
  const { styleTips } = await gql.GetTipsPage();

  if (!styleTips) {
    return notFound();
  }

  return <StyleTipsPage styleTips={styleTips} />;
};

export default Page;
