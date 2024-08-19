import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { sizes } from "@/shared/const";
import { $selectedSize, setSelectedSize } from "@/shared/context/basket";
import { useUnit } from "effector-react";
import { useEffect, useState } from "react";

const SelectSizes = ({ currentSizes }: { currentSizes: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem] = useUnit([$selectedSize]);

  const handleValueChange = (value: string) => {
    setSelectedSize(value);
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
      onValueChange={handleValueChange}
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
        <SelectValue placeholder="Выбрать размер" />
      </SelectTrigger>

      <SelectContent className="pointer-events-auto text-[14px]">
        {sizes.map((size) => {
          const matchedSizes = currentSizes.includes(size.value);

          return (
            <SelectItem
              key={size.value}
              disabled={!matchedSizes}
              className={cn(`mb-1`, {
                "bg-[#E1E1E1]": selectedItem === size.value,
              })}
              value={size.value}
            >
              <div
                className={`grid grid-cols-2 gap-[${size.value.length * 2}px]`}
              >
                {size.value}

                <span className="text-[#8D8D8D]">{size.description}</span>
              </div>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export { SelectSizes };
