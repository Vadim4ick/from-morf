import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AdviceCart } from "../StyleAdvice/AdviceCart";
import Image from "next/image";

const arr = [
  {
    id: 1,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    img: "/newItem/1.png",
  },
  {
    id: 2,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    img: "/newItem/1.png",
  },
  {
    id: 3,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    img: "/newItem/1.png",
  },
  //   {
  //     id: 3,
  //     date: "17.06.24",
  //     desc: "Как создать капсульный гардероб: основные принципы и идеи",
  //     img: "/advice/1.png",
  //   },
];

const NewItems = () => {
  const first = arr[0];
  const otherElements = arr.slice(1);

  return (
    <section className="pt-16">
      <div className="container">
        <h3 className="mb-5 text-2xl font-bold uppercase">новинки</h3>

        <div className="flex gap-5">
          <Link href={"/"}>
            <Image
              src={first.img}
              alt="1.png"
              width={628}
              height={676}
              className="object-cover"
            />

            <div className="mt-[12px] flex flex-col gap-1">
              <p className="font-medium text-blackColor">
                Жакет из португальского льна
              </p>

              <p className="font-bold">20 140 ₽</p>
            </div>
          </Link>

          <div className="flex flex-col justify-between">
            <div className="flex h-[430px] gap-5">
              {otherElements.map((item) => (
                <Link key={item.id} href={"/"}>
                  <Image
                    src={first.img}
                    alt="1.png"
                    width={305}
                    height={430}
                    className="h-full object-cover"
                  />

                  <div className="mt-[12px] flex flex-col gap-1">
                    <p className="font-medium text-blackColor">
                      Жакет из португальского льна
                    </p>

                    <p className="font-bold">20 140 ₽</p>
                  </div>
                </Link>
              ))}
            </div>

            <Button className="mb-12 ml-auto w-fit" variant={"default"}>
              все новинки
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { NewItems };
