import ProfilePage from "@/pages/ProfilePage";
import { Meta_SEO } from "@/shared/const/metadata";

export const metadata = {
  title: "Профиль",
  description: Meta_SEO.description,
};

const Page = () => {
  return <ProfilePage />;
};

export default Page;
