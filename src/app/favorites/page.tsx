import FavoritesPage from "@/pages/FavoritesPage";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata = {
  title: "Избранное",
  description: Meta_SEO.description,
};

const Page = () => {
  return <FavoritesPage />;
};

export default Page;
