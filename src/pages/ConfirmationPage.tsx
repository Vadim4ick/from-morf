"use client";

import { LogoIcon } from "@/shared/icons/LogoIcon";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn, parseJwt, verifyActivationToken } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authQuery } from "@/shared/queries/authQueries";
import { useUnit } from "effector-react";
import { $authFormPassword, resetAuthForm } from "@/shared/context/auth";

const ConfirmationPage = () => {
  const [password] = useUnit([$authFormPassword]);
  const [email, setEmail] = useState("");

  const [timer, setTimer] = useState(30);

  const router = useRouter();

  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (value: string) => {
    const token = localStorage.getItem("activateToken");

    if (!token && token !== "undefined") {
      console.log("Упc... Отсутсвует токен.");

      resetAuthForm();
      return router.push("/");
    }

    if (token) {
      const { status } = await verifyActivationToken(token);

      if (status === 401) {
        localStorage.removeItem("activateToken");
        resetAuthForm();
        return router.push("/");
      }

      const { activationCode } = parseJwt(token);

      if (activationCode !== value) {
        setError("Неверный код");
        return;
      }

      const statusRegister = await authQuery.register({ email, password });

      if (statusRegister === 200) {
        console.log("Вы зарегались!");
        resetAuthForm();
        router.push("/");
      }
    }
  };

  const sendMore = async () => {
    setError(null);

    const { status, data } = await authQuery.sendMail({ email });

    if (status === 200) {
      localStorage.setItem("activateToken", data.activationToken);
      setTimer(30);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("activateToken");

    if (!token && token !== "undefined") {
      return console.log("Упc... Отсутсвует токен.");
    }

    const { email } = parseJwt(token);

    setEmail(email);
  }, []);

  useEffect(() => {
    const int = setInterval(() => {
      if (timer > 0) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(int);
  }, [timer]);

  return (
    <div className="h-screen w-full pt-[var(--header-height)]">
      <div className="container h-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-[55px]">
          <div className="flex flex-col items-center justify-center">
            <LogoIcon className="mb-[36px]" />

            <p className="mb-[14px] text-[32px] font-bold uppercase">
              Код из СМС
            </p>

            <div className="flex flex-col items-center justify-center text-[15px] text-[#939393]">
              Отправили его на email
              <span>{email}</span>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-6">
              <InputOTP
                onChange={() => setError(null)}
                onComplete={(value) => handleSubmit(value)}
                maxLength={4}
              >
                <InputOTPGroup>
                  <InputOTPSlot
                    index={0}
                    className={cn("", {
                      "text-red-600 ring-1 ring-red-600": error,
                    })}
                  />
                  <InputOTPSlot
                    index={1}
                    className={cn("", {
                      "text-red-600 ring-1 ring-red-600": error,
                    })}
                  />
                </InputOTPGroup>

                <InputOTPSeparator
                  className={cn("", {
                    "text-red-600": error,
                  })}
                />

                <InputOTPGroup>
                  <InputOTPSlot
                    index={2}
                    className={cn("", {
                      "text-red-600 ring-1 ring-red-600": error,
                    })}
                  />
                  <InputOTPSlot
                    index={3}
                    className={cn("", {
                      "text-red-600 ring-1 ring-red-600": error,
                    })}
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {error && <p className="pb-2 text-[15px] text-red-600">{error}</p>}

            {Boolean(timer) ? (
              <div className="text-[#939393]">{timer}</div>
            ) : (
              <button onClick={sendMore} className="text-[15px]">
                Отправить еще раз
              </button>
            )}

            {/* <button onClick={sendMore} className="text-[15px]">
              Отправить еще раз
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export { ConfirmationPage };
