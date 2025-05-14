"use client";

import { motionConfigAnimate } from "@/shared/const";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      {...motionConfigAnimate}
      animate={
        inView ? motionConfigAnimate.animate : motionConfigAnimate.initial
      }
      className="pb-[160px] pt-[calc(var(--header-height)_+_96px)] max-tabletBig:pb-[96px] max-tabletBig:pt-[calc(var(--header-height)_+_36px)] max-mobile:pb-[72px] max-mobile:pt-[calc(var(--header-height)_+_60px)]"
    >
      <div className="container">
        <div className="grid grid-cols-2 gap-[30px] max-tabletBig:grid-cols-1 max-tabletBig:gap-[60px] max-mobile:gap-[36px]">
          <div className="flex flex-col justify-between gap-[25px]">
            <h4 className="text-[36px] leading-[125%] max-tabletBig:text-[28px] max-mobile:text-[24px]">
              О бренде
            </h4>

            <div className="flex flex-col gap-[25px] pb-[140px] pr-[100px] max-desktop:pb-[90px] max-desktop:pr-[50px] max-tabletBig:pb-0 max-tabletBig:pr-0">
              <p className="text-[20px] leading-[125%] text-[#4F4F4F] max-mobile:text-[16px]">
                FROM MORF — российский бренд женской деловой одежды, основанный
                в 2024 году. Его философия — переосмысление классического стиля,
                выход за рамки традиционных норм. Мы соединяем эстетику и
                интеллектуальность, превращая одежду в архитектурные формы, где
                каждая линия и изгиб продуманы до мельчайших деталей.
              </p>

              <p className="text-[20px] leading-[125%] text-[#4F4F4F] max-mobile:text-[16px]">
                Название FROM MORF происходит от греческого слова morphê,
                означающего «форма». Однако для нас это не только о внешнем
                облике, но и о внутренней сути вещей. Мы создаем не просто
                одежду, а образы, в которых чувствуется глубина, гармония и
                осознанность.
              </p>
            </div>
          </div>

          <Image src="/about/1@2x.png" alt="about" width={1000} height={1000} />
        </div>
      </div>

      <div className="mt-[20px] max-tabletBig:mt-[13px]">
        <div className="container">
          <Image src="/about/2@2x.png" alt="about" width={1300} height={660} />
        </div>
      </div>

      <div className="my-[96px] bg-[#F8F8F8] py-[78px] max-tabletBig:my-[60px] max-tabletBig:py-[60px] max-mobile:my-[48px] max-mobile:py-[36px]">
        <div className="container">
          <div className="flex justify-between gap-[70px] max-mobile:flex-col max-mobile:gap-[24px] mobile:items-center">
            <h4 className="max-w-[510px] text-[36px] leading-[125%] max-tabletBig:text-[28px] max-mobile:text-[24px]">
              Выразительность и простота
            </h4>

            <p className="max-w-[620px] text-[20px] leading-[125%] text-[#4F4F4F] max-mobile:text-[16px]">
              В основе бренда — баланс формы и функциональности, выразительности
              и простоты. Мы отдаем предпочтение натуральным тканям, глубоким и
              сложным оттенкам, которые дополняют образ без лишней кричащей
              детализации.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="relative grid grid-cols-[0.9fr_1.1fr] gap-[20px] max-tabletBig:grid-cols-1 max-tabletBig:gap-[96px] max-mobile:gap-[72px]">
          <Image
            src="/about/3@2x.png"
            alt="about"
            width={700}
            height={940}
            className="h-full w-full"
          />

          <div className="flex flex-col max-tabletBig:flex-col-reverse max-tabletBig:gap-[40px] max-mobile:gap-[24px]">
            <Image
              src="/about/4@2x.png"
              alt="about"
              width={672}
              height={356}
              className="w-full object-cover"
            />

            <div className="flex flex-col gap-[20px] max-tabletBig:gap-[25px] max-mobile:gap-4 tabletBig:pl-[44px] tabletBig:pt-[64px]">
              <h4 className="text-[36px] leading-[125%] max-tabletBig:text-[28px] max-mobile:text-[24px]">
                Исскуство форм
              </h4>

              <div className="flex flex-col gap-[25px]">
                <p className="text-[20px] leading-[125%] text-[#4F4F4F] max-mobile:text-[16px]">
                  Каждая коллекция FROM MORF — это история о превращении простой
                  ткани в произведение искусства, подобно тому, как архитектор
                  создает художественный образ здания из отдельных элементов.
                  Различные архитектурные формы, конструктивные приемы дизайна
                  будут воплощены в одежде этого бренда, чтобы подчеркнуть
                  интеллект и эстетику обладательницы. Это одежда, которая
                  всегда уместна, потому что в ней заложена философия спокойной
                  силы.
                </p>

                <p className="text-[20px] leading-[125%] text-[#4F4F4F] max-mobile:text-[16px]">
                  Наш подход минималистичен, но выразителен. Мы создаем силуэты,
                  которые говорят больше, чем слова. И говорим с вами на языке
                  искусства, осознанности и благородной простоты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPage;
