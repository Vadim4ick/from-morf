import Link from "next/link";
import { AdviceCart } from "./AdviceCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { GetLastTwoStyleTipsQuery } from "@/graphql/__generated__";

const StyleAdvice = ({
  styleTips,
}: {
  styleTips: GetLastTwoStyleTipsQuery["styleTips"];
}) => {
  // '/style-tips'
  return (
    <section className="bg-[#EDEDED] py-24 max-tabletBig:pt-[48px] max-mobile:pb-[72px]">
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="mb-5 text-2xl font-bold uppercase">
              Советы по стилю
            </h3>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[48px] max-tabletBig:grid-cols-2">
              {styleTips.map((el) => (
                <Link
                  className="max-mobileSmall:col-span-2"
                  key={el.id}
                  href={"/"}
                >
                  <AdviceCart item={el} />
                </Link>
              ))}

              <ButtonAnimate className="mx-auto self-end max-tabletBig:col-span-2">
                <Link href={"/style-tips"}>смотреть еще</Link>
              </ButtonAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StyleAdvice };
