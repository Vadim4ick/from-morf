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
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfileModal = ({ variant }: { variant: VariantHeader }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onClick = async () => {
    const { data, status } = await axios.post<{
      status: number;
      activationToken: string;
    }>("http://localhost:3000/api/send-email", {
      email: email,
      password: password,
    });

    if (status === 200) {
      localStorage.setItem("activateToken", data.activationToken);
      router.push("/test");
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
            вход или регистрация
          </DialogTitle>

          <DialogDescription className="mb-14 max-w-[235px] text-[15px]">
            Если вы регистрируетесь, то мы отправим вам ПИСЬМО с кодом
            подтверждения на ваш указанный email
          </DialogDescription>
        </DialogHeader>

        <Input
          placeholder="Email"
          className="mb-[10px] rounded-[2px] bg-[#E2E2E2F]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Пароль"
          className="mb-[10px] rounded-[2px] bg-[#E2E2E2F]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={onClick} className="w-full" variant={"secondary"}>
          Продолжить
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export { ProfileModal };
