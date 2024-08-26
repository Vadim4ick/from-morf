/* eslint-disable react/display-name */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProfileSchema, formProfileSchema } from "./model/formSchemas";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SuccessInput } from "@/shared/icons/SuccessInput";
import { Warning } from "@/shared/icons/Warning";
import { updateUser } from "@/shared/context/user";
import { User } from "@/shared/types/authForm";
import { Avatar } from "./Avatar";
import MaskInput from "react-maskinput";
import { memo, useMemo } from "react";

const formatPhoneNumber = (phone: string) => {
  if (!phone) return "";
  const phoneStr = phone.toString();

  return `+7 (${phoneStr.slice(1, 4)}) ${phoneStr.slice(4, 7)}-${phoneStr.slice(7, 9)}-${phoneStr.slice(9, 11)}`;
};

const ProfileForm = memo(({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    control,
  } = useForm<FormProfileSchema>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      phone_number: formatPhoneNumber(user.phone_number) || "",
      email: user.email || "",
      user_address: user.user_address || "",
    },
  });

  // Оптимизация перерисовок через useMemo
  const validationResults = useMemo(() => {
    return {
      first_name: formProfileSchema.shape.first_name.safeParse(
        watch("first_name"),
      ).success,
      last_name: formProfileSchema.shape.last_name.safeParse(watch("last_name"))
        .success,
      email: formProfileSchema.shape.email.safeParse(watch("email")).success,
      phone_number: formProfileSchema.shape.phone_number.safeParse(
        watch("phone_number"),
      ).success,
      user_address: formProfileSchema.shape.user_address.safeParse(
        watch("user_address"),
      ).success,
    };
  }, [
    watch("first_name"),
    watch("last_name"),
    watch("email"),
    watch("phone_number"),
    watch("user_address"),
  ]);

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

                {!validationResults.first_name && (
                  <Warning className="size-6" />
                )}
                {validationResults.first_name && <SuccessInput />}
              </div>

              <Input
                {...register("first_name")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
              />
            </label>

            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              {errors.last_name && (
                <div className="text-error">{errors.last_name.message}</div>
              )}

              <div className="flex items-center gap-3">
                <p className="text-sm font-medium"> Фамилия*</p>

                {!validationResults.last_name && <Warning className="size-6" />}
                {validationResults.last_name && <SuccessInput />}
              </div>

              <Input
                {...register("last_name")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
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

              {!validationResults.email && <Warning className="size-6" />}
              {validationResults.email && <SuccessInput />}
            </div>

            <Input
              {...register("email")}
              className="h-12 rounded-[2px] bg-[#EBEBEB]"
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

              {!validationResults.phone_number && (
                <Warning className="size-6" />
              )}
              {validationResults.phone_number && <SuccessInput />}
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

              {!validationResults.user_address && (
                <Warning className="size-6" />
              )}
              {validationResults.user_address && <SuccessInput />}
            </div>

            <Input
              {...register("user_address")}
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
});

export { ProfileForm };
