"use client";

import Link from "next/link";
import { AdviceCart } from "./AdviceCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { GetLastTwoStyleTipsQuery } from "@/graphql/__generated__";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const StyleAdvice = ({
  styleTips,
  className,
  title = "Советы по стилю",
}: {
  styleTips: GetLastTwoStyleTipsQuery["styleTips"];
  className?: string;
  title?: string;
}) => {
  const router = useRouter();

  return (
    <section
      className={cn("py-24 max-tabletBig:pt-[48px] max-mobile:pb-[72px]", {}, [
        className,
      ])}
    >
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="mb-5 text-2xl font-bold uppercase">{title}</h3>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[48px] max-tabletBig:grid-cols-2">
              {styleTips.map((el) => (
                <div className="max-mobileSmall:col-span-2" key={el.id}>
                  <AdviceCart item={el} />
                </div>
              ))}

              <ButtonAnimate
                onClick={() => router.push("/style-tips")}
                className="mx-auto self-end max-tabletBig:col-span-2"
              >
                смотреть еще
              </ButtonAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StyleAdvice };
