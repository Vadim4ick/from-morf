import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const Desktop = () => {
  return (
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
            href="/look-bock"
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
};

export { Desktop };
