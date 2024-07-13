import { AllGoodsPage } from "@/pages/AllGoodsPage";

const Page = ({ params }: { params: { categories: string } }) => {
  return <AllGoodsPage categories={params.categories} />;
};

export default Page;
