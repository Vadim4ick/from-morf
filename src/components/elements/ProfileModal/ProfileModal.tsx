import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProfileIcon } from "@/shared/icons/header/ProfileIcon";
import { VariantHeader } from "@/components/modules/Header/Header";
import clsx from "clsx";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ProfileIcon
          className={clsx("cursor-pointer text-transparent", {
            "stroke-darkGrayColor": variant === "black",
            "stroke-white": variant === "white",
          })}
        />
      </DialogTrigger>

      <DialogContent portal={false} className="w-full max-w-[415px]">
        <DialogHeader className="flex items-center">
          <DialogTitle className="mb-9 uppercase">
            вход или регистрация
          </DialogTitle>

          <DialogDescription className="mb-14 max-w-[235px] text-[15px]">
            Введите номер телефона (+7), мы отправим вам СМС с кодом
            подтверждения
          </DialogDescription>
        </DialogHeader>

        <Input
          placeholder="Email"
          className="mb-[10px] rounded-[2px] bg-[#E2E2E2F]"
        />

        <Button className="w-full" variant={"secondary"}>
          Продолжить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { ProfileModal };
