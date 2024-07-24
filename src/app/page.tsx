import { gql } from "@/graphql/client";
import HomePage from "@/pages/HomePage";

export default async function Home() {
  const { homePage } = await gql.GetHomePage();

  return <HomePage homePage={homePage} />;
}
