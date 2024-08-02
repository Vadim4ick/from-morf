import { GetHomePageLookBookQuery } from "@/graphql/__generated__";

export interface LookBookDefaultProps {
  title: string;
  description: string;

  img1: GetHomePageLookBookQuery["lookBock"]["images"][0]["directus_files_id"];
  img2: GetHomePageLookBookQuery["lookBock"]["images"][1]["directus_files_id"];
  img3: GetHomePageLookBookQuery["lookBock"]["images"][2]["directus_files_id"];
  img4: GetHomePageLookBookQuery["lookBock"]["images"][3]["directus_files_id"];
}
