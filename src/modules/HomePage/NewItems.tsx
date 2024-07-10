"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { NewItemCart } from "@/components/elements/NewItemCart";

const arr = [
  {
    id: 1,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 2,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
  {
    id: 3,
    date: "17.06.24",
    desc: "Как создать капсульный гардероб: основные принципы и идеи",
    images: ["/newItem/1.png", "/newItem/2.png", "/newItem/3.png"],
    sizes: [36, 38, 40, 42],
  },
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
              src={first.images[0]}
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
            <div className="flex gap-5">
              {otherElements.map((item) => (
                <NewItemCart key={item.id} item={item} />
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
