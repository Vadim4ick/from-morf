import { cn, pathImage } from "@/lib/utils";
import { ArrowLink } from "@/shared/icons/ArrowLink";
import Image from "next/image";
import Link from "next/link";
import { LookBookDefaultProps } from "./type";
import useImagePreloader from "@/shared/hooks/useImagePreloader.hooks";

const Desktop = (props: LookBookDefaultProps) => {
  const { description, img1, img2, img3, img4, title } = props;

  const { handleLoadingImageComplete, imgSpinner } = useImagePreloader();

  return (
    <div className="grid grid-cols-2 gap-[20px]">
      <div>
        <div className="mb-32">
          <h1 className="mb-[18px] text-[48px] font-bold uppercase">{title}</h1>
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
          width={img1.width}
          height={img1.height}
          src={pathImage(img1.id)}
          alt="Main Look"
          className={cn("", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
        />
      </div>

      <div className="flex flex-col gap-[20px]">
        <Image
          width={img2.width}
          height={img2.height}
          src={pathImage(img2.id)}
          alt="Main Look"
          className={cn("h-fit", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
        />

        <div className="flex gap-[20px]">
          <Image
            width={img3.width}
            height={img3.height}
            src={pathImage(img3.id)}
            alt="Main Look"
            className={cn("h-fit", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />

          <Image
            width={img4.width}
            height={img4.height}
            src={pathImage(img4.id)}
            alt="Main Look"
            className={cn("mt-[100px] h-fit", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
        </div>
      </div>
    </div>
  );
};

export { Desktop };
