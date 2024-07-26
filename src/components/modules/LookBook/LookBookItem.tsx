import { LookBook } from "@/graphql/__generated__";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const LookBookItem = ({ lookBook }: { lookBook: LookBook }) => {
  return (
    <div className="grid grid-cols-[432px_1fr] justify-between gap-[105px]">
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-[19px]">
          <h2 className="text-[28px]">{lookBook.title}</h2>
          <p className="text-[#4F4F4F]">{lookBook.description}</p>
        </div>

        <Link
          className="flex items-center gap-[5px] font-medium underline"
          href={`/look-bock/${lookBook.id}`}
        >
          Смотреть
          <ArrowLink className="text-[#545454]" />
        </Link>
      </div>

      <div className="grid h-full w-full grid-cols-[250px_1fr] gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <Image
            width={250}
            height={275}
            src="/lookBock/4.png"
            alt="Main Look"
            className="max-h-[275px] object-fill"
          />
          <Image
            width={250}
            height={275}
            src="/lookBock/3.png"
            alt="Main Look"
            className="max-h-[275px] object-fill"
          />
        </div>

        <Image
          width={470}
          height={570}
          src="/lookBock/1.png"
          alt="Main Look"
          className="revert w-full object-fill"
        />
      </div>
    </div>
  );
};

export { LookBookItem };
