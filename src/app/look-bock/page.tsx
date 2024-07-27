import { gql } from "@/graphql/client";
import LookBookPage from "@/pages/LookBookPage";
import { notFound } from "next/navigation";

const Page = async () => {
  const { lookBook } = await gql.GetLookBock();

  return <LookBookPage lookBook={lookBook} />;
};

export default Page;
