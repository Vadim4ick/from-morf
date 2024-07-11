import { Creatin } from "@/shared/icons/Creatin";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    title: "Узнать",
    items: [
      { title: "О нас", href: "#" },
      { title: "Доставка и оплата", href: "#" },
      { title: "Возврат товара", href: "#" },
    ],
  },
  {
    id: 2,
    title: "Связаться",
    items: [
      { title: "ВКонтакте", href: "#" },
      { title: "Телеграм", href: "#" },
      { title: "YouTube", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      {/* 1-й уровень */}
      <div className="container">
        <div className="flex justify-between pb-[90px] pt-[80px]">
          <Link href={"/"}>
            <Image src={"/footer-logo.png"} alt="1" width={412} height={188} />
          </Link>

          <div className="flex gap-[109px]">
            {footerLinks.map((el) => (
              <div key={el.id} className="flex flex-col">
                <p className="relative mb-5 pb-5 text-center text-[20px] text-blackColor after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[25px] after:-translate-x-1/2 after:bg-black after:content-['']">
                  {el.title}
                </p>

                <ul className="text-darkGray flex flex-col items-center justify-center gap-5">
                  {el.items.map((item) => (
                    <li key={item.title}>
                      <Link href={item.href}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2-й уровень */}
      <div className="custom-shadow-footer relative after:absolute after:top-0 after:h-[1px] after:w-full after:bg-[#CDCDCD] after:content-['']">
        <div className="container">
          <div className="flex items-center justify-between py-4 text-[13px]">
            <div className="flex gap-[39px]">
              <a href="#">Публичная оферта</a>
              <a href="#">Пользовательское соглашение</a>
            </div>

            <div className="flex items-center gap-[39px]">
              <span>разработано</span>

              <Creatin />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
