"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProfileSchema, formProfileSchema } from "./model/formSchemas";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { SuccessInput } from "@/shared/icons/SuccessInput";
import { Warning } from "@/shared/icons/Warning";
import { updateUser } from "@/shared/context/user";
import { User } from "@/shared/types/authForm";
import { Avatar } from "./Avatar";
import MaskInput from "react-maskinput";

const formatPhoneNumber = (phone: string) => {
  if (!phone) return "";
  const phoneStr = phone.toString();

  return `+7 (${phoneStr.slice(1, 4)}) ${phoneStr.slice(4, 7)}-${phoneStr.slice(7, 9)}-${phoneStr.slice(9, 11)}`;
};

const ProfileForm = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm<FormProfileSchema>({
    resolver: zodResolver(formProfileSchema),
  });

  const [email, setEmail] = useState(user.email || "");
  const [surname, setSurname] = useState(user.last_name || "");
  const [name, setName] = useState(user.first_name || "");
  const [address, setAddress] = useState(user.user_address || "");

  const onSubmit: SubmitHandler<FormProfileSchema> = async (data) => {
    const phone = data.phone_number.replace(/\D/g, "");

    if (user) {
      updateUser({
        userData: {
          id: user.id,
          ...data,
          phone_number: String(phone),
        },
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-16 max-mobile:gap-[32px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Avatar */}
      <Avatar avatar={user.avatar} id={user.id} />

      <div className="flex flex-col gap-[72px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 max-mobile:flex-col">
            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              {errors.first_name && (
                <div className="text-error">{errors.first_name.message}</div>
              )}

              <div className="flex items-center gap-3">
                <p className="text-sm font-medium">Имя*</p>

                {!user?.first_name && <Warning className="size-6" />}
                {user?.first_name && <SuccessInput />}
              </div>

              <Input
                {...register("first_name")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              {errors.last_name && (
                <div className="text-error">{errors.last_name.message}</div>
              )}

              <div className="flex items-center gap-3">
                <p className="text-sm font-medium"> Фамилия*</p>

                {!user?.last_name && <Warning className="size-6" />}
                {user?.last_name && <SuccessInput />}
              </div>

              <Input
                {...register("last_name")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
                value={surname || ""}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
          </div>

          <p className="text-sm leading-[18px] text-[#939393] max-mobile:max-w-[287px]">
            Проверьте правильность ввода личных данных, они необходимы для
            получения и оформления заказа
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold uppercase">Электронная почта</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.email && (
              <div className="text-error">{errors.email.message}</div>
            )}

            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">Введите вашу почту</p>

              {!user?.email && <Warning className="size-6" />}
              {user?.email && <SuccessInput />}
            </div>

            <Input
              {...register("email")}
              className="h-12 rounded-[2px] bg-[#EBEBEB]"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold uppercase">Номер телефона</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.phone_number && (
              <div className="text-error">{errors.phone_number.message}</div>
            )}
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">Введите номер телефона (+7)</p>

              {!user?.phone_number && <Warning className="size-6" />}
              {user?.phone_number && <SuccessInput />}
            </div>

            <Controller
              name="phone_number"
              control={control}
              defaultValue={formatPhoneNumber(user.phone_number) || ""}
              render={({ field: { onChange, value } }) => {
                return (
                  <MaskInput
                    alwaysShowMask
                    mask={"+7 (000) 000-00-00"}
                    showMask
                    maskChar="_"
                    value={value}
                    onChange={onChange}
                    // @ts-ignore
                    className="h-12 rounded-[2px] bg-[#EBEBEB] px-3 py-2 text-sm"
                  />
                );
              }}
            />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-semibold uppercase">Адрес</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.user_address && (
              <div className="text-error">{errors.user_address.message}</div>
            )}

            <div className="flex items-center gap-3">
              <p className="text-sm font-medium">Введите адрес доставки</p>

              {!user?.user_address && <Warning className="size-6" />}
              {user?.user_address && <SuccessInput />}
            </div>

            <Input
              {...register("user_address")}
              value={address || ""}
              onChange={(e) => setAddress(e.target.value)}
              className="h-12 rounded-[2px] bg-[#EBEBEB]"
            />
          </label>
        </div>

        <Button
          variant={"secondary"}
          className="h-[50px] w-full text-[14px] font-semibold uppercase leading-[17px]"
        >
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
};

export { ProfileForm };
