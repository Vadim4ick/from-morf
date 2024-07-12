"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const LookBock = () => {
  const isTablet834 = useMediaQuery(834);
  const isMobile768 = useMediaQuery(768);

  const desktop = (
    <div className="grid grid-cols-2 gap-[20px]">
      <div>
        <div className="mb-32">
          <h1 className="mb-[18px] text-3xl font-bold">LOOK BOOK</h1>
          <p className="mb-9 max-w-[440px] text-[#4F4F4F]">
            Изысканный костюм и белая рубашка – символы безупречного вкуса.
            Сумки светлых тонов завершают ваш образ, добавляя нотку роскоши.
          </p>

          <Link
            className="flex items-center gap-[5px] font-medium underline"
            href="/"
          >
            <span>Смотреть</span>

            <ArrowLink className="text-[#545454]" />
          </Link>
        </div>
        <Image width={630} height={795} src="/lookBock/1.png" alt="Main Look" />
      </div>

      <div className="flex flex-col gap-[20px]">
        <Image
          width={630}
          height={482}
          src="/lookBock/2.png"
          alt="Main Look"
          className="h-fit"
        />

        <div className="flex gap-[20px]">
          <Image
            width={304}
            height={390}
            src="/lookBock/3.png"
            alt="Main Look"
            className="h-fit"
          />

          <Image
            width={304}
            height={390}
            src="/lookBock/4.png"
            alt="Main Look"
            className="mt-[100px] h-fit"
          />
        </div>
      </div>
    </div>
  );

  const tablet = (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between gap-[20px]">
        <div className="mb-[60px] max-w-[240px]">
          <h1 className="mb-[18px] text-3xl font-bold">LOOK BOOK</h1>
          <p className="mb-9 max-w-[440px] text-[#4F4F4F]">
            Изысканный костюм и белая рубашка – символы безупречного вкуса.
            Сумки светлых тонов завершают ваш образ, добавляя нотку роскоши.
          </p>

          <Link
            className="flex items-center gap-[5px] font-medium underline"
            href="/"
          >
            <span>Смотреть</span>

            <ArrowLink className="text-[#545454]" />
          </Link>
        </div>

        <Image
          width={380}
          height={288}
          src="/lookBock/2.png"
          alt="Main Look"
          className="max-h-[288px] object-cover"
        />
      </div>

      <div className="flex justify-between gap-[20px]">
        <div className="flex gap-[20px] max-tabletSmall:flex-col">
          <Image
            width={300}
            height={283}
            src="/lookBock/4.png"
            alt="Main Look"
            className="h-fit max-h-[283px] tabletSmall:mt-[100px]"
          />

          <Image
            width={300}
            height={283}
            src="/lookBock/3.png"
            alt="Main Look"
            className="h-fit max-h-[283px]"
          />
        </div>

        <Image width={380} height={586} src="/lookBock/1.png" alt="Main Look" />
      </div>
    </div>
  );

  const mobile = (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col justify-between gap-[20px]">
        <div className="max-w-[280px]">
          <h1 className="mb-[12px] text-[28px] font-bold">LOOK BOOK</h1>
          <p className="mb-4 max-w-[440px] text-[14px] text-[#4F4F4F]">
            Изысканный костюм и белая рубашка – символы безупречного вкуса.
            Сумки светлых тонов завершают ваш образ, добавляя нотку роскоши.
          </p>

          <Link
            className="flex items-center gap-[5px] font-medium underline"
            href="/"
          >
            <span>Смотреть</span>

            <ArrowLink className="text-[#545454]" />
          </Link>
        </div>

        <div className="flex w-full justify-end">
          <Image
            width={380}
            height={586}
            src="/lookBock/1.png"
            alt="Main Look"
            className="pl-[135px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <Image
          width={380}
          height={288}
          src="/lookBock/2.png"
          alt="Main Look"
          className="w-full object-cover"
        />

        <div className="flex gap-[20px]">
          <Image
            width={300}
            height={283}
            src="/lookBock/4.png"
            alt="Main Look"
            className="h-fit max-h-[283px]"
          />

          <Image
            width={300}
            height={283}
            src="/lookBock/3.png"
            alt="Main Look"
            className="h-fit max-h-[283px]"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="container my-32 py-4 max-tabletSmall:px-4 tabletSmall:px-[67px]">
      {!isTablet834 && desktop}

      {isTablet834 && !isMobile768 && tablet}

      {isMobile768 && mobile}
    </section>
  );
};

export { LookBock };
