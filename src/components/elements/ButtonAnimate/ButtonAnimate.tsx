import { ReactNode } from "react";
import { Button } from "../../ui/button";
import cls from "./ButtonAnimate.module.scss";
import { cn } from "@/lib/utils";

const ButtonAnimate = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: VoidFunction;
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "buttonAnimate h-[42px] w-fit pb-[11px] pt-[13px] transition-colors hover:text-white max-mobile:h-[36px] max-mobile:pb-[9px] max-mobile:pt-[11px]",
        [cls.buttonAnimate, className],
      )}
      variant={"default"}
    >
      <span className="z-20 text-[14px] leading-[18px] max-mobile:text-[12px] max-mobile:leading-[16px]">
        {children}
      </span>
    </Button>
  );
};

export { ButtonAnimate };
