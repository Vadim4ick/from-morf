import { Arrow } from "@/shared/icons/Arrow";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const TableSizeModal = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex w-full max-w-[197px] items-center justify-center gap-[8px] text-[#767676]">
        <span className="relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-full after:bg-[#767676] max-desktop:text-[14px]">
          Подобрать размер
        </span>

        <Arrow className="size-[10px] rotate-180 max-desktop:size-[9px]" />
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export { TableSizeModal };
