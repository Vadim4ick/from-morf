import { AllGoodsHeader } from "@/components/modules/AllGoodsPage/AllGoodsHeader";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";

const AllGoodsPage = ({ categories }: { categories: string }) => {
  return (
    <>
      <AllGoodsHeader />
      <StyleAdvice />
    </>
  );
};

export { AllGoodsPage };
