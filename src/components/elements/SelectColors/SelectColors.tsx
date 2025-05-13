import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GetGoodsQuery } from "@/graphql/__generated__";
import { cn } from "@/lib/utils";
import { setSelectedColor } from "@/shared/context/basket";
import { useEffect, useState } from "react";

const SelectColors = ({
  currentColors,
}: {
  currentColors: GetGoodsQuery["goods_by_id"]["available_colors"];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (id: string) => {
    const value = currentColors.find((color) => +color.colors_id.id === +id);
    setSelectedColor({
      title: value?.colors_id.title || "",
      color: value?.colors_id.color || "",
    });
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = "none";
    } else {
      const timeoutId = setTimeout(() => {
        document.body.style.pointerEvents = "auto";
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.body.style.pointerEvents = "auto";
      };
    }
  }, [isOpen]);

  return (
    <Select
      open={isOpen}
      onValueChange={(value) => handleValueChange(value)}
      onOpenChange={handleOpenChange}
    >
      <SelectTrigger
        isOpen={isOpen}
        className={cn(
          "w-full bg-[#F4F4F4] text-[16px] max-mobile:text-[14px] max-mobile:leading-[18px]",
          {
            "border border-[#B5B5B5]": !isOpen,
            "border-b border-[#B5B5B5]": isOpen,
          },
        )}
      >
        <SelectValue placeholder="Выбрать цвет" />
      </SelectTrigger>

      <SelectContent className="pointer-events-auto text-[14px]">
        {currentColors.map((colorItem) => {
          // const matchedSizes = currentSizes.includes(size.value);
          const color = colorItem.colors_id;

          return (
            <SelectItem
              key={color.id}
              // className={cn(`mb-1`, {
              //   "bg-[#E1E1E1]": selectedItem === size.value,
              // })}
              value={color.id}
            >
              <div className="flex items-center gap-2">
                <div
                  className="size-4 rounded-full"
                  style={{ backgroundColor: color.color }}
                />

                <span>{color.title}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export { SelectColors };
