import { ButtonAnimate } from "@/components/elements/ButtonAnimate/ButtonAnimate";
import { NewItemCart } from "@/components/elements/NewItemCart";
import { StyleAdvice } from "@/components/modules/StyleAdvice/StyleAdvice";

const arr = [
  {
    id: 1,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 2,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 3,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 4,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 5,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 6,
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
];

const Page = ({ params }: { params: { categories: string } }) => {
  return (
    <>
      <section className="pb-32 pt-[var(--header-height)]">
        <div className="container">
          <div className="mb-8 flex flex-col items-center justify-center">
            <h1 className="pt-[48px] text-[32px] font-medium uppercase">
              Новинки
            </h1>

            <p className="text-[#7E7E7E]">6 товаров</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-12">
            <div className="grid w-full grid-cols-2 gap-x-[20px] gap-y-12">
              {arr.map((item) => (
                <NewItemCart key={item.id} item={item} />
              ))}
            </div>

            <ButtonAnimate>показать больше</ButtonAnimate>
          </div>
        </div>
      </section>

      <StyleAdvice />
    </>
  );
};

export default Page;
