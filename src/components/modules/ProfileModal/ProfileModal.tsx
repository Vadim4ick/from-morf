import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUnit } from "effector-react";
import {
  $authFormOpen,
  $typeForm,
  toggleAuthForm,
  toggleAuthFormOpen,
} from "@/shared/context/auth";
import { AuthForm } from "./AuthForm";
import { useAuth } from "@/shared/hooks/useAuth.hooks";
import { $user } from "@/shared/context/user/state";
import Image from "next/image";
import { Arrow } from "@/shared/icons/Arrow";
import { Exit } from "@/shared/icons/Exit";
import { removeAccessToken, removeRefreshToken } from "@/lib/auth-token";
import { cn, pathImage, visibleNameFn } from "@/lib/utils";
import { clearUser } from "@/shared/context/user";
import { Warning } from "@/shared/icons/Warning";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { protectedPath } from "@/shared/const";
import { Button } from "@/components/ui/button";

const ProfileModal = () => {
  const [currentForm, user, authFormOpen] = useUnit([
    $typeForm,
    $user,
    $authFormOpen,
  ]);

  const { isAuth } = useAuth();

  const pathname = usePathname();
  const route = useRouter();

  const onExit = () => {
    removeAccessToken();
    removeRefreshToken();

    clearUser();
    protectedPath.map((el) => {
      if (pathname === el) {
        route.push("/");
      }
    });
  };

  return (
    <Dialog open={authFormOpen} onOpenChange={() => toggleAuthFormOpen()}>
      <DialogContent
        portal={false}
        close={!isAuth ? true : false}
        className={cn(
          "right-0 w-full max-w-[415px] max-tabletSmall:left-1/2 max-tabletSmall:top-1/2 max-tabletSmall:-translate-x-1/2 max-tabletSmall:-translate-y-1/2 tabletSmall:absolute",
          {
            "px-7 py-2": isAuth,
          },
        )}
      >
        {!isAuth ? (
          <>
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
          </>
        ) : (
          <>
            <DialogHeader className="border-b border-[#CDCDCD] py-4">
              <Link
                onClick={() => toggleAuthFormOpen()}
                href={"/profile"}
                className="flex w-full items-center justify-between"
              >
                <div className="flex gap-5">
                  <Image
                    width={52}
                    height={52}
                    alt="avatar"
                    src={
                      user?.avatar ? pathImage(user.avatar) : "/no-avatar.png"
                    }
                    className="size-[52px] rounded-full"
                  />

                  <div className="flex flex-col items-start">
                    <p>{visibleNameFn(user)}</p>

                    <p className="text-[15px] text-[#939393]">{user?.email}</p>
                  </div>
                </div>

                <Arrow className="rotate-180 cursor-pointer" />
              </Link>
            </DialogHeader>

            <Link
              onClick={() => toggleAuthFormOpen()}
              href={"/profile"}
              className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]"
            >
              <div className="flex flex-col items-start">
                <p>Сохранённые адреса:</p>

                <div
                  className={cn("text-[15px]", {
                    "text-[#939393]": user?.address,
                    "text-error": !user?.address,
                  })}
                >
                  {user?.address ? (
                    user.address
                  ) : (
                    <p className="flex items-center justify-center gap-2">
                      <span className="pt-[4px]">Добавьте адрес доставки!</span>
                      <Warning className="size-4" />
                    </p>
                  )}
                </div>
              </div>

              <Arrow className="rotate-180 cursor-pointer" />
            </Link>

            <button className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]">
              <p>Заказы:</p>

              <Arrow className="rotate-180 cursor-pointer" />
            </button>

            <Link
              onClick={() => toggleAuthFormOpen()}
              href={"/favorites"}
              className="flex w-full items-center justify-between border-b border-[#CDCDCD] py-[20px]"
            >
              <p>Избранное:</p>

              <Arrow className="rotate-180 cursor-pointer" />
            </Link>

            <button
              onClick={onExit}
              className="flex w-full items-center justify-between py-[20px]"
            >
              <p className="text-error">Выйти из аккаунта</p>

              <Exit />
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { ProfileModal };
