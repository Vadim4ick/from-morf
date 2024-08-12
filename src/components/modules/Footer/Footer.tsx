import { pathImage } from "@/lib/utils";
import { Creatin } from "@/shared/icons/Creatin";
import { useGetFooter } from "@/shared/services/getFooter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { data } = useGetFooter();

  return (
    <footer className="bg-[#F8F8F8]">
      {/* 1-й уровень */}
      <div className="container">
        <div className="flex justify-between gap-5 pb-[90px] pt-[80px] max-tabletSmall:flex-col max-tabletSmall:items-center max-tabletSmall:justify-center max-tabletSmall:gap-[72px] max-tabletSmall:py-[72px]">
          {data?.footer && (
            <Link href={"/"}>
              <Image
                src={pathImage(data.footer.logo.id)}
                alt="1"
                width={412}
                height={188}
                className="max-w-full max-mobile:px-[48px]"
              />
            </Link>
          )}

          <div className="flex justify-center gap-[109px] max-tabletBig:gap-[70px] max-tabletSmall:gap-[32px] max-mobile:flex-col max-mobile:gap-[56px] max-mobileSmall:gap-[56px]">
            {data?.footer &&
              data.footer.links.map((el) => (
                <div key={el.id} className="flex flex-col">
                  <p className="relative mb-5 pb-5 text-center text-[20px] font-semibold leading-[25px] text-blackColor after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[25px] after:-translate-x-1/2 after:bg-black after:content-['']">
                    {el.footerLinks_id.title}
                  </p>

                  <ul className="text-darkGray flex flex-col items-center justify-center gap-[24px]">
                    {el.footerLinks_id.links.map((item) => (
                      <li
                        key={item.links_id.id}
                        className="text-center text-base leading-[20px]"
                      >
                        <Link
                          className="leading-[20px]"
                          href={item.links_id.button_links}
                        >
                          {item.links_id.button_title}
                        </Link>
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
              <a href="#" className="font-medium">
                Публичная оферта
              </a>
              <a href="#" className="font-medium">
                Пользовательское соглашение
              </a>
            </div>

            <div className="flex items-center gap-2 rounded-3xl bg-white pb-[3px] pl-[16px] pr-[3px] pt-[3px]">
              <span className="font-medium text-[#636363]">разработано</span>

              <div className="rounded-full bg-[#EDEDED] px-[18px] py-[10px]">
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
