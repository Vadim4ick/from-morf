import { Arrow } from "@/shared/icons/Arrow";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TableSize } from "@/components/elements/TableSize/TableSize";
import { useMediaQuery } from "@/shared/hooks/useMedia.hooks";
import { cn } from "@/lib/utils";

const TableSizeModal = () => {
  const isDesktop1100 = useMediaQuery(1100);

  return (
    <Sheet>
      <SheetTrigger className="flex w-full max-w-[197px] items-center justify-center gap-[8px] text-[#767676]">
        <span className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#767676] max-desktop:text-[14px]">
          Подобрать размер
        </span>

        <Arrow className="size-[10px] rotate-180 max-desktop:size-[9px]" />
      </SheetTrigger>

      <SheetContent
        side={isDesktop1100 ? "bottom" : "right"}
        className={cn(
          "w-full max-mobileSmall:pb-[33px] max-mobileSmall:pl-[16px] max-mobileSmall:pt-[40px] mobileSmall:p-4 desktop:max-w-[505px]",
        )}
      >
        <div className="max-desktop:px-[50px] max-mobile:px-0">
          <div className="flex flex-col gap-8 pb-[25px] max-desktop:gap-4 max-mobile:items-start max-mobileSmall:pr-4">
            <h2
              className={cn(
                "text-[18px] font-semibold uppercase leading-[22px] max-desktop:text-center mobile:pl-[44px]",
              )}
            >
              Таблица размеров
            </h2>

            <p
              className={cn(
                "w-full leading-[19px] max-desktop:text-center max-mobile:text-start desktop:max-w-[323px]",
              )}
            >
              Найдите в таблице параметры, близкие к вашим, чтобы определить
              свой размер.
            </p>
          </div>

          <TableSize />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export { TableSizeModal };
