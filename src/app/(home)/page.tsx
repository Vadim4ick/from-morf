import { gql } from "@/graphql/client";
import HomePage from "@/pages/HomePage";

export const metadata = {
  title: "Главная",
};

export const revalidate = 60;

export default async function Home() {
  const { homePage } = await gql.GetHomePage();
  const { styleTips } = await gql.GetLastTwoStyleTips();
  const { lookBock } = await gql.GetHomePageLookBook();

  return (
    <HomePage styleTips={styleTips} homePage={homePage} lookBock={lookBock} />
  );
}
