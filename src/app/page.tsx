import { gql } from "@/graphql/client";
import HomePage from "@/pages/HomePage";

export default async function Home() {
  const { homePage } = await gql.GetHomePage();
  const { styleTips } = await gql.GetLastTwoStyleTips();

  return <HomePage styleTips={styleTips} homePage={homePage} />;
}
