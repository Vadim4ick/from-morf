import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "О нас",
};

export const revalidate = 60;

export default async function About() {
  return <AboutPage />;
}
