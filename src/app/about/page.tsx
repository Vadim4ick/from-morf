import AboutPage from "@/pages/AboutPage";

export const metadata = {
  title: "О нас",
  description:
    "FROMMORF — молодой бренд из России, создающий ограниченные дропы. Осознанный подход, бережное потребление и вещи вне времени.",
};

export const revalidate = 60;

export default async function About() {
  return <AboutPage />;
}
