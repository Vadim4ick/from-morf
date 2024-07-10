import Image from "next/image";

interface AdviceCart {
  id: number;
  date: string;
  desc: string;
  img: string;
}

interface Props {
  item: AdviceCart;
}

const AdviceCart = (props: Props) => {
  const { item } = props;

  return (
    <article>
      <div className="h-full">
        <Image
          src={item.img}
          width={465}
          height={575}
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
