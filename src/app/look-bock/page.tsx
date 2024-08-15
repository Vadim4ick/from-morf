import { gql } from "@/graphql/client";
import LookBookPage from "@/pages/LookBookPage";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata = {
  title: "Look Book",
  description: Meta_SEO.description,
};

export const revalidate = 60;

const Page = async () => {
  const { lookBook } = await gql.GetLookBock();

  return <LookBookPage lookBook={lookBook} />;
};

export default Page;
