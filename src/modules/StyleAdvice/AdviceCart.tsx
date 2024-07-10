import Image from "next/image";

interface AdviceCart {
  id: number;
  date: string;
  desc: string;
  img: string;
}

interface Props {
  item: AdviceCart;
  widthPhoto?: number;
  heightPhoto?: number;
}

const AdviceCart = (props: Props) => {
  const { item, widthPhoto = 465, heightPhoto = 575 } = props;

  return (
    <article>
      <div className="h-full">
        <Image
          src={item.img}
          width={widthPhoto}
          height={heightPhoto}
          // width={widthPhoto === "default" ? 465 : 305}
          // height={widthPhoto === "default" ? 575 : 430}
          alt={""}
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-[14px] text-[#707070]">{item.date}</p>
        <p className="text-xl">{item.desc}</p>
      </div>
    </article>
  );
};

export { AdviceCart };
