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
import { useUnit } from "effector-react";
import {
  $authFormEmail,
  $authFormPassword,
  $regiterError,
  $typeForm,
  changeAuthEmail,
  changeAuthPassword,
  changeRegisterError,
  toggleAuthForm,
  toggleConfirmPage,
} from "@/shared/context/auth";
import { FormEvent, useState } from "react";
import { authQuery } from "@/shared/queries/authQueries";
import { Eye } from "lucide-react";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  const [email, password, currentForm, regiterError] = useUnit([
    $authFormEmail,
    $authFormPassword,
    $typeForm,
    $regiterError,
  ]);

  const [visiblePass, setVisiblePass] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (currentForm === "auth") {
      console.log("email", email);
      console.log("password", password);
    } else {
      const { registered } = await authQuery.checkAuthEmail({ email });

      if (registered) {
        console.log("Такой email уже зарегистрирован");
        return changeRegisterError(true);
      }

      const { status, data } = await authQuery.sendMail({ email });

      if (status === 200) {
        localStorage.setItem("activateToken", data.activationToken);
        toggleConfirmPage(true);
      }
    }
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

        {currentForm === "register" && regiterError && (
          <div className="text-error mb-3 text-[15px]">
            Такой email уже зарегестрирован!
          </div>
        )}

        <form onSubmit={onSubmit} className="flex flex-col gap-[10px]">
          <Input
            placeholder="Email"
            className="rounded-[2px] bg-[#E2E2E2F]"
            value={email}
            onChange={(e) => changeAuthEmail(e.target.value)}
            onFocus={() =>
              currentForm === "register" && changeRegisterError(false)
            }
          />

          <div className="relative">
            <Input
              type={visiblePass ? "text" : "password"}
              placeholder="Пароль"
              className="rounded-[2px] bg-[#E2E2E2F]"
              value={password}
              onChange={(e) => changeAuthPassword(e.target.value)}
            />

            <Eye
              onClick={() => setVisiblePass(!visiblePass)}
              className="absolute right-2 top-1/2 size-5 -translate-y-1/2 cursor-pointer"
            />
          </div>

          <Button className="w-full" variant={"secondary"}>
            Продолжить
          </Button>
        </form>

        <Button
          onClick={() => toggleAuthForm()}
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
