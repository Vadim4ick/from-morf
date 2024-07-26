import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const Tablet = () => {
  return (
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
            href="/look-bock"
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
        <div className="flex flex-col gap-[20px]">
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

        <Image width={380} height={586} src="/lookBock/1.png" alt="Main Look" />
      </div>
    </div>
  );
};

export { Tablet };
