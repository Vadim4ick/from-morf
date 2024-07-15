import { Arrow } from "@/shared/icons/Arrow";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TableSize } from "@/components/elements/TableSize/TableSize";

const TableSizeModal = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex w-full max-w-[197px] items-center justify-center gap-[8px] text-[#767676]">
        <span className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#767676] max-desktop:text-[14px]">
          Подобрать размер
        </span>

        <Arrow className="size-[10px] rotate-180 max-desktop:size-[9px]" />
      </SheetTrigger>

      <SheetContent className="max-w-[505px]">
        <div className="flex flex-col gap-8 pb-[25px]">
          <h2 className="pl-[44px] text-lg font-medium uppercase">
            Таблица размеров
          </h2>

          <p className="max-w-[323px]">
            Найдите в таблице параметры, близкие к вашим, чтобы определить свой
            размер.
          </p>
        </div>

        <TableSize />
      </SheetContent>
    </Sheet>
  );
};

export { TableSizeModal };
