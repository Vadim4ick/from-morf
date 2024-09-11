import { GetHomePageQuery } from "@/graphql/__generated__";

export interface LookBookDefaultProps {
  title: string;
  description: string;

  img1: GetHomePageQuery["homePage"]["images"][0]["directus_files_id"];
  img2: GetHomePageQuery["homePage"]["images"][1]["directus_files_id"];
  img3: GetHomePageQuery["homePage"]["images"][2]["directus_files_id"];
  img4: GetHomePageQuery["homePage"]["images"][3]["directus_files_id"];
}
