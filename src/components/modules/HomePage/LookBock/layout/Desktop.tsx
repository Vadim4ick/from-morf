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
          unoptimized
          src={pathImage(img1.id)}
          alt="Main Look"
          className={cn("h-full max-h-[790px] w-full object-cover", {
            skeleton: imgSpinner,
          })}
          onLoad={handleLoadingImageComplete}
        />
      </div>

      <div className="relative flex flex-col gap-[20px]">
        <div className="relative h-full max-h-[482px] w-full">
          <Image
            fill
            unoptimized
            src={pathImage(img2.id)}
            alt="Main Look"
            className={cn("h-full w-full object-cover", {
              skeleton: imgSpinner,
            })}
            onLoad={handleLoadingImageComplete}
          />
        </div>

        <div className="flex h-full w-full gap-[20px]">
          <div className="relative h-full max-h-[390px] w-full">
            <Image
              fill
              unoptimized
              src={pathImage(img3.id)}
              alt="Main Look"
              className={cn("object-cover", {
                skeleton: imgSpinner,
              })}
              onLoad={handleLoadingImageComplete}
            />
          </div>

          <div className="relative h-full max-h-[390px] w-full">
            <Image
              fill
              unoptimized
              src={pathImage(img4.id)}
              alt="Main Look"
              className={cn("mt-[100px] object-cover", {
                skeleton: imgSpinner,
              })}
              onLoad={handleLoadingImageComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Desktop };
