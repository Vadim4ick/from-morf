import { gql } from "@/graphql/client";
import { StyleTipsPage } from "@/pages/StyleTipsPage";

const Page = async () => {
  const { styleTips } = await gql.GetTipsPage();

  return <StyleTipsPage styleTips={styleTips} />;
};

export default Page;
