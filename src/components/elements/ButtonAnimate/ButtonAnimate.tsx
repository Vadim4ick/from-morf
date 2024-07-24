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
      className={cn("buttonAnimate w-fit transition-colors hover:text-white", [
        cls.buttonAnimate,
        className,
      ])}
      variant={"default"}
    >
      <span className="z-20">{children}</span>
    </Button>
  );
};

export { ButtonAnimate };
