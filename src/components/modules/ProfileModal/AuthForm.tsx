/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  $loginError,
  $regiterError,
  $typeForm,
  changeRegisterError,
  toggleConfirmPage,
} from "@/shared/context/auth";
import { authQuery } from "@/shared/queries/authQueries";
import { useUnit } from "effector-react";
import { Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormAuthSchema, formAuthSchema } from "./model/formSchemas";
import { loginUser } from "@/shared/context/user";
import emailjs from "@emailjs/browser";
import { createActivationToken } from "@/lib/utils";

const AuthForm = () => {
  const [visiblePass, setVisiblePass] = useState(false);

  const form = useRef(null);

  const [currentForm, regiterError, loginError] = useUnit([
    $typeForm,
    $regiterError,
    $loginError,
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormAuthSchema>({
    resolver: zodResolver(formAuthSchema),
  });

  useEffect(() => {
    reset();
  }, [currentForm]);

  const onSubmit: SubmitHandler<FormAuthSchema> = async (data) => {
    const { email, password } = data;

    if (currentForm === "auth") {
      loginUser({ email, password });
    } else {
      const { registered } = await authQuery.checkAuthEmail({ email });

      if (registered) {
        console.log("Такой email уже зарегистрирован");

        changeRegisterError(true);

        setTimeout(() => {
          changeRegisterError(false);
        }, 2000);

        return;
      }

      const { token, activationCode } = await createActivationToken(
        email,
        password,
      );

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_serviceID as string,
          process.env.NEXT_PUBLIC_EMAILJS_templateID as string,
          {
            to_email: email,
            activationCode,
          },
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_publicKey as string,
          },
        )
        .then(
          () => {
            console.log("SUCCESS!");
            localStorage.setItem("activateToken", token);
            toggleConfirmPage(true);
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );

      // const { status, data } = await authQuery.sendMail({ email, password });

      // if (status === 200) {
      // localStorage.setItem("activateToken", data.activationToken);
      // toggleConfirmPage(true);
      // }
    }
  };

  return (
    <>
      {currentForm === "register" && regiterError && (
        <div className="mb-3 text-[15px] text-error">
          Такой email уже зарегестрирован!
        </div>
      )}
      {currentForm === "auth" && loginError && (
        <div className="mb-3 text-[15px] text-error">
          Неправильный логин или пароль!
        </div>
      )}

      {errors.email && (
        <div className="mb-3 text-[15px] text-error">
          {errors.email.message}
        </div>
      )}

      {errors.password && (
        <div className="mb-3 text-[15px] text-error">
          {errors.password.message}
        </div>
      )}

      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px]"
      >
        <Input
          {...register("email")}
          placeholder="Email"
          className="rounded-[2px] bg-[#E2E2E2F] text-base"
          onFocus={() =>
            currentForm === "register" && changeRegisterError(false)
          }
        />

        <div className="relative">
          <Input
            {...register("password")}
            type={visiblePass ? "text" : "password"}
            placeholder="Пароль"
            className="rounded-[2px] bg-[#E2E2E2F] text-base"
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
    </>
  );
};

export { AuthForm };
