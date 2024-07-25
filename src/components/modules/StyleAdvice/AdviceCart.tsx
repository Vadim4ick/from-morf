import { GetLastTwoStyleTipsQuery } from "@/graphql/__generated__";
import { pathImage } from "@/lib/utils";
import Image from "next/image";

interface Props {
  item: GetLastTwoStyleTipsQuery["styleTips"][0];
}

const AdviceCart = (props: Props) => {
  const { item } = props;

  return (
    <article>
      <div className="h-full">
        <Image
          src={pathImage(item.mainImage.id)}
          width={item.mainImage.width}
          height={item.mainImage.height}
          alt={""}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 pt-4 max-tabletBig:pt-3">
        <p className="text-[14px] text-[#707070]">
          {new Date(item.date_created).toLocaleDateString()}
        </p>
        <p className="text-xl max-mobileSmall:text-base">{item.title}</p>
      </div>
    </article>
  );
};

export { AdviceCart };
