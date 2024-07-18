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
import { useAuthForm } from "./model/hooks/useAuthForm";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  const {
    email,
    onChangeEmail,
    onChangePass,
    onSubmit,
    password,
    currentForm,
    onChangeForm,
  } = useAuthForm();

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
            {currentForm === "auth" ? "Авторизация" : "Регистрация"}
          </DialogTitle>

          <DialogDescription className="mb-14 max-w-[235px] text-[15px]">
            {currentForm === "auth"
              ? "Войдите в аккаунт с помощью логина и пароля"
              : " Мы отправим вам ПИСЬМО с кодом подтверждения на указанный вами email"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="flex flex-col gap-[10px]">
          <Input
            placeholder="Email"
            className="rounded-[2px] bg-[#E2E2E2F]"
            value={email}
            onChange={(e) => onChangeEmail(e)}
          />

          <Input
            placeholder="Пароль"
            className="rounded-[2px] bg-[#E2E2E2F]"
            value={password}
            onChange={(e) => onChangePass(e)}
          />

          <Button className="w-full" variant={"secondary"}>
            Продолжить
          </Button>
        </form>

        <Button
          onClick={onChangeForm}
          className="mt-2 w-full"
          variant={"reset"}
        >
          {currentForm === "auth" ? "Нет аккаунта?" : "Уже есть аккаунт?"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { ProfileModal };
