import Link from "next/link";
import { AdviceCart } from "./AdviceCart";
import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";

const arr = [
  {
    id: 1,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    img: "/advice/1.png",
  },
  {
    id: 2,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    img: "/advice/1.png",
  },
  //   {
  //     id: 3,
  //     date: "17.06.24",
  //     desc: "Как создать капсульный гардероб: основные принципы и идеи",
  //     img: "/advice/1.png",
  //   },
];

const StyleAdvice = () => {
  return (
    <section className="bg-[#EDEDED] py-24 max-tabletBig:pt-[48px] max-mobile:pb-[72px]">
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="mb-5 text-2xl font-bold uppercase">
              Советы по стилю
            </h3>

            <div className="grid grid-cols-3 gap-x-[20px] gap-y-[48px] max-tabletBig:grid-cols-2">
              {arr.map((el) => (
                <Link
                  className="max-mobileSmall:col-span-2"
                  key={el.id}
                  href={"/"}
                >
                  <AdviceCart item={el} />
                </Link>
              ))}

              <ButtonAnimate className="mx-auto self-end max-tabletBig:col-span-2">
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
