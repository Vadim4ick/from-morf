import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { sizes } from "@/shared/const";
import { useState } from "react";

const SelectSizes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleValueChange = (value: string) => {
    setSelectedItem(value);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Select onValueChange={handleValueChange} onOpenChange={handleOpenChange}>
      <SelectTrigger
        className={cn("w-full bg-[#F4F4F4] text-[16px]", {
          "border border-[#B5B5B5]": !isOpen,
          "border-b border-[#B5B5B5]": isOpen,
        })}
      >
        <SelectValue placeholder="Выбрать размер" />
      </SelectTrigger>

      <SelectContent className="text-[14px]">
        {sizes.map((size) => {
          return (
            <SelectItem
              key={size.value}
              className={`mb-1 ${selectedItem === size.value ? "bg-[#E1E1E1]" : ""}`}
              value={size.value}
            >
              <div className="grid grid-cols-2 gap-[2px]">
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
