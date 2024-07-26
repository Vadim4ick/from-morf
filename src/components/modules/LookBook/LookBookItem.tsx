import { GetLookBockQuery } from "@/graphql/__generated__";
import { pathImage } from "@/lib/utils";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";

const LookBookItem = ({
  lookBook,
}: {
  lookBook: GetLookBockQuery["lookBook"][0];
}) => {
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
        <div className="flex flex-col justify-between gap-[20px]">
          <Image
            width={lookBook.img1.width}
            height={lookBook.img1.height}
            src={pathImage(lookBook.img1.id)}
            alt="Main Look"
            className="h-full object-cover"
          />
          <Image
            width={lookBook.img2.width}
            height={lookBook.img2.height}
            src={pathImage(lookBook.img2.id)}
            alt="Main Look"
            className="h-full object-cover"
          />
        </div>

        <Image
          width={lookBook.img3.width}
          height={lookBook.img3.height}
          src={pathImage(lookBook.img3.id)}
          alt="Main Look"
          className="h-full w-full object-fill"
        />
      </div>
    </div>
  );
};

export { LookBookItem };
