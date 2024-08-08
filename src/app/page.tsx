"use client";

import { gql } from "@/graphql/client";
import HomePage from "@/pages/HomePage";
import { useEffect } from "react";

function test() {
  fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/items/goods`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

export default function Home() {
  // const { homePage } = await gql.GetHomePage();
  // const { styleTips } = await gql.GetLastTwoStyleTips();
  // const { lookBock } = await gql.GetHomePageLookBook();

  useEffect(() => {
    test();
  }, []);

  // return (
  //   <HomePage styleTips={styleTips} homePage={homePage} lookBock={lookBock} />
  // );

  return <div>123</div>;
}
