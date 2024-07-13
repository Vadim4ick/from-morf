import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const Mobile = () => {
  return (
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
            className="max-mobileSmall:pl-[135px]"
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
            width={307}
            height={290}
            src="/lookBock/4.png"
            alt="Main Look"
            className="max-h-[400px] w-full object-cover"
          />

          <Image
            width={307}
            height={290}
            src="/lookBock/3.png"
            alt="Main Look"
            className="max-h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { Mobile };
