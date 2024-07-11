import { ReactNode } from "react";
import { Button } from "../../ui/button";
import cls from "./ButtonAnimate.module.scss";
import { cn } from "@/lib/utils";

const ButtonAnimate = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button
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
