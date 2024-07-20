import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProfileIcon } from "@/shared/icons/header/ProfileIcon";
import { VariantHeader } from "@/components/modules/Header/Header";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { $typeForm, toggleAuthForm } from "@/shared/context/auth";
import { AuthForm } from "./AuthForm";
import { useAuth } from "@/shared/hooks/useAuth.hooks";
import { $user } from "@/shared/context/user/state";
import Image from "next/image";
import { Arrow } from "@/shared/icons/Arrow";
import { Exit } from "@/shared/icons/Exit";
import { removeAccessToken, removeRefreshToken } from "@/lib/auth-token";
import { useRouter } from "next/navigation";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  const [currentForm, user] = useUnit([$typeForm, $user]);

  const { isAuth } = useAuth();

  const onExit = () => {
    removeAccessToken();
    removeRefreshToken();

    window.location.reload();
  };

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

      {!isAuth ? (
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

          <AuthForm />

          <Button
            onClick={() => toggleAuthForm()}
            className="mt-2 w-full"
            variant={"reset"}
          >
            {currentForm === "auth" ? "Нет аккаунта?" : "Уже есть аккаунт?"}
          </Button>
        </DialogContent>
      ) : (
        <DialogContent
          close={false}
          portal={false}
          className="w-full max-w-[415px] px-7 py-2"
        >
          <DialogHeader className="border-b border-[#CDCDCD] py-4">
            <button className="flex w-full items-center justify-between">
              <div className="flex gap-5">
                {user?.avatar ? (
                  <Image
                    width={52}
                    height={52}
                    alt="avatar"
                    src={user.avatar}
                    className="size-[52px] rounded-full"
                  />
                ) : (
                  <Image
                    width={52}
                    height={52}
                    alt="avatar"
                    src="/no-avatar.png"
                    className="size-[52px] rounded-full"
                  />
                )}

                <div className="flex flex-col items-start">
                  <p>{user?.email}</p>

                  <p className="text-[15px] text-[#939393]">{user?.email}</p>
                </div>
              </div>

              <Arrow className="rotate-180 cursor-pointer" />
            </button>
          </DialogHeader>

          <button className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]">
            <div className="flex flex-col items-start">
              <p>Сохранённые адреса:</p>

              <p className="text-[15px] text-[#939393]">
                Краснодар, ул. Красная 64, кв. 49
              </p>
            </div>

            <Arrow className="rotate-180 cursor-pointer" />
          </button>

          <button className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]">
            <p>Заказы:</p>

            <Arrow className="rotate-180 cursor-pointer" />
          </button>

          <button className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]">
            <p>Избранное:</p>

            <Arrow className="rotate-180 cursor-pointer" />
          </button>

          <button
            onClick={onExit}
            className="flex w-full items-center justify-between py-[20px]"
          >
            <p className="text-error">Выйти из аккаунта</p>

            <Exit />
          </button>
        </DialogContent>
      )}
    </Dialog>
  );
};

export { ProfileModal };
