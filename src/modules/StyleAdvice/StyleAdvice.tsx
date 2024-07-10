import Link from "next/link";
import { AdviceCart } from "./AdviceCart";
import { Button } from "@/components/ui/button";

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
    <section className="bg-[#EDEDED] py-24">
      <div className="container">
        <div className="flex">
          <div>
            <h3 className="mb-5 text-2xl font-bold uppercase">
              Советы по стилю
            </h3>

            <div className="grid grid-cols-3 gap-[20px]">
              {arr.map((el) => (
                <Link key={el.id} href={"/"}>
                  <AdviceCart item={el} />
                </Link>
              ))}

              <Button
                className="buttonAnimate relative mx-auto w-fit self-end transition-colors hover:text-white"
                variant={"default"}
              >
                <span className="z-20">смотреть еще</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { StyleAdvice };
