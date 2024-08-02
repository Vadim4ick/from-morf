import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";
import { LookBookDefaultProps } from "./type";
import { pathImage } from "@/lib/utils";

const Mobile = (props: LookBookDefaultProps) => {
  const { description, img1, img2, img3, img4, title } = props;

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex flex-col justify-between gap-[20px]">
        <div className="max-w-[280px]">
          <h1 className="mb-[12px] text-[28px] font-bold">{title}</h1>
          <p className="mb-4 max-w-[440px] text-[14px] text-[#4F4F4F]">
            {description}
          </p>

          <Link
            className="flex items-center gap-[5px] font-medium underline"
            href="/look-bock"
          >
            <span>Смотреть</span>

            <ArrowLink className="text-[#545454]" />
          </Link>
        </div>

        <div className="flex w-full justify-end">
          <Image
            width={img1.width}
            height={img1.height}
            src={pathImage(img1.id)}
            alt="Main Look"
            className="max-mobileSmall:pl-[135px]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[20px]">
        <Image
          width={img2.width}
          height={img2.height}
          src={pathImage(img2.id)}
          alt="Main Look"
          className="w-full object-cover"
        />

        <div className="flex gap-[20px]">
          <Image
            width={img4.width}
            height={img4.height}
            src={pathImage(img4.id)}
            alt="Main Look"
            className="max-h-[400px] w-full object-cover"
          />

          <Image
            width={img3.width}
            height={img3.height}
            src={pathImage(img3.id)}
            alt="Main Look"
            className="max-h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export { Mobile };
