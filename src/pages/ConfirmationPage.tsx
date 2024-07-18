"use client";

import { LogoIcon } from "@/shared/icons/LogoIcon";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { verifyActivationToken } from "@/lib/utils";

const ConfirmationPage = () => {
  const [code, setCode] = useState("");
  const [email] = useState("");

  const handleSubmit = async (value: string) => {
    const token = localStorage.getItem("activateToken");

    if (!token) {
      return console.log("lol");
    }

    if (token) {
      const tes = verifyActivationToken(token);

      console.log(tes);

      // console.log("email", email);
      // console.log("activationCode", activationCode);

      // if (activationCode !== value) {
      //   console.log("Код не совпадает");
      //   return;
      // }
    }
  };

  useEffect(() => {}, []);

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
              <span>test@mail.ru</span>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center gap-7"
          >
            <InputOTP onComplete={(value) => handleSubmit(value)} maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>

            <button className="text-[15px]">Отправить еще раз</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ConfirmationPage };
