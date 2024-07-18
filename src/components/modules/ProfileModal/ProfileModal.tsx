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
  $typeForm,
  changeAuthEmail,
  changeAuthPassword,
  toggleAuthForm,
} from "@/shared/context/auth";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { $apiFront } from "@/shared/api/api";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  const [email, password, currentForm] = useUnit([
    $authFormEmail,
    $authFormPassword,
    $typeForm,
  ]);

  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (currentForm === "auth") {
      console.log("email", email);
      console.log("password", password);
    } else {
      const { data, status } = await $apiFront.post<{
        status: number;
        activationToken: string;
      }>("/api/send-email", {
        email: email,
        password: password,
      });

      if (status === 200) {
        localStorage.setItem("activateToken", data.activationToken);
        router.push("/test");
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

        <form onSubmit={onSubmit} className="flex flex-col gap-[10px]">
          <Input
            placeholder="Email"
            className="rounded-[2px] bg-[#E2E2E2F]"
            value={email}
            onChange={(e) => changeAuthEmail(e.target.value)}
          />

          <Input
            placeholder="Пароль"
            className="rounded-[2px] bg-[#E2E2E2F]"
            value={password}
            onChange={(e) => changeAuthPassword(e.target.value)}
          />

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
