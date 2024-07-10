"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AdviceCart } from "../StyleAdvice/AdviceCart";
import Image from "next/image";
import { Heart } from "@/shared/icons/Heart";

import { motion, useAnimation } from "framer-motion";

const variants = {
  hidden: { width: 0 },
  visible: (custom: { width: number }) => ({ width: custom.width }),
};

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

  const controls = useAnimation();

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
                <div key={item.id} className="group relative overflow-hidden">
                  <Link href={"/"}>
                    <Image
                      src={first.img}
                      alt="1.png"
                      width={305}
                      height={430}
                      className="h-full origin-center object-cover transition-all duration-500 group-hover:pr-[45px]"
                    />

                    <div className="mt-[12px] flex flex-col gap-1">
                      <p className="font-medium text-blackColor">
                        Жакет из португальского льна
                      </p>

                      <p className="font-bold">20 140 ₽</p>
                    </div>
                  </Link>

                  <motion.div className="absolute -right-[45px] top-0 h-full w-[45px] bg-darkGrayColor p-3 transition-all duration-500 group-hover:right-[0px]">
                    <div className="flex h-full flex-col justify-between">
                      <button>
                        <Heart />
                      </button>

                      <div className="flex flex-col items-center gap-2 border-b border-t border-[#888888] py-2 text-white">
                        <div>36</div>
                        <div>38</div>
                        <div>40</div>
                        <div>42</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
              {/* {otherElements.map((item) => (
                <div key={item.id} className="group relative">
                  <Link href={"/"}>
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

                  <div className="absolute right-0 top-0 hidden h-full w-[45px] bg-darkGrayColor p-3 group-hover:block">
                    <div className="flex h-full flex-col justify-between">
                      <button>
                        <Heart />
                      </button>

                      <div className="flex flex-col items-center gap-2 border-b border-t border-[#888888] py-2 text-white">
                        <div>36</div>
                        <div>38</div>
                        <div>40</div>
                        <div>42</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))} */}
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
