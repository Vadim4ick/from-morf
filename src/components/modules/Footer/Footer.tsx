"use client";

import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
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
  const isTablet834 = useMediaQuery(834);

  return (
    <footer className="bg-[#F8F8F8]">
      {/* 1-й уровень */}
      <div className="container max-tabletSmall:px-[67px]">
        <div className="flex justify-between pb-[90px] pt-[80px] max-tabletSmall:flex-col max-tabletSmall:items-center max-tabletSmall:justify-center max-tabletSmall:gap-[72px] max-tabletSmall:py-[67px]">
          <Link href={"/"}>
            <Image
              src={"/footer-logo.png"}
              alt="1"
              width={!isTablet834 ? 412 : 315}
              height={!isTablet834 ? 188 : 145}
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-[109px] max-tabletSmall:gap-[32px] max-mobileSmall:gap-[56px]">
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
          <div className="flex items-center justify-between gap-4 py-4 text-[13px] max-tabletSmall:flex-col">
            <div className="flex items-center gap-[39px] max-tabletSmall:gap-4">
              <a href="#">Публичная оферта</a>
              <a href="#">Пользовательское соглашение</a>
            </div>

            <div className="flex items-center gap-[39px] max-tabletSmall:gap-2 max-tabletSmall:rounded-3xl max-tabletSmall:bg-white max-tabletSmall:pb-[3px] max-tabletSmall:pl-[16px] max-tabletSmall:pr-[3px] max-tabletSmall:pt-[3px]">
              <span>разработано</span>

              <div className="max-tabletSmall:rounded-full max-tabletSmall:bg-[#EDEDED] max-tabletSmall:px-[18px] max-tabletSmall:py-[10px]">
                <Creatin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
