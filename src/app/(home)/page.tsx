import { gql } from "@/graphql/client";
import HomePage from "@/pages/HomePage";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata = {
  title: "Главная",
  description: Meta_SEO.description,
};

// export async function generateMetadata() {
//   const { homePage } = await gql.GetSeoHomePage();

//   if (!homePage || !homePage.seo) {
//     return null;
//   }

//   const metadata = {
//     title: homePage.seo.meta_title,
//     description: homePage.seo.meta_description,
//   };

//   return metadata;
// }

export const revalidate = 60;

export default async function Home() {
  const { homePage } = await gql.GetHomePage();
  const { styleTips } = await gql.GetLastTwoStyleTips();
  const { lookBock } = await gql.GetHomePageLookBook();

  return (
    <HomePage styleTips={styleTips} homePage={homePage} lookBock={lookBock} />
  );
}
