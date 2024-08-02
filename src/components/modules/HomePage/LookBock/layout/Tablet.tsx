import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";
import { LookBookDefaultProps } from "./type";
import { pathImage } from "@/lib/utils";

const Tablet = (props: LookBookDefaultProps) => {
  const { description, img1, img2, img3, img4, title } = props;

  return (
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between gap-[20px]">
        <div className="mb-[60px] max-w-[240px]">
          <h1 className="mb-[18px] text-3xl font-bold">{title}</h1>
          <p className="mb-9 max-w-[440px] text-[#4F4F4F]">{description}</p>

          <Link
            className="flex items-center gap-[5px] font-medium underline"
            href="/look-bock"
          >
            <span>Смотреть</span>

            <ArrowLink className="text-[#545454]" />
          </Link>
        </div>

        <Image
          width={img2.width}
          height={img2.height}
          src={pathImage(img2.id)}
          alt="Main Look"
          className="max-h-[288px] object-cover"
        />
      </div>

      <div className="flex justify-between gap-[20px]">
        <div className="flex flex-col gap-[20px]">
          <Image
            width={img4.width}
            height={img4.height}
            src={pathImage(img4.id)}
            alt="Main Look"
            className="h-fit max-h-[283px]"
          />

          <Image
            width={img3.width}
            height={img3.height}
            src={pathImage(img3.id)}
            alt="Main Look"
            className="h-fit max-h-[283px]"
          />
        </div>

        <Image
          width={img1.width}
          height={img1.height}
          src={pathImage(img1.id)}
          alt="Main Look"
        />
      </div>
    </div>
  );
};

export { Tablet };
