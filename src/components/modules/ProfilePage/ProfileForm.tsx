"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProfileSchema, formProfileSchema } from "./model/formSchemas";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { SuccessInput } from "@/shared/icons/SuccessInput";
import { Warning } from "@/shared/icons/Warning";
import { updateUser } from "@/shared/context/user";
import { User } from "@/shared/types/authForm";
import Image from "next/image";
import { Avatar } from "./Avatar";

const ProfileForm = ({ user }: { user: User }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormProfileSchema>({
    resolver: zodResolver(formProfileSchema),
  });

  const [email, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState(user.phone || "");
  const [surname, setSurname] = useState(user.surname || "");
  const [name, setName] = useState(user.name || "");
  const [address, setAddress] = useState(user.address || "");

  const onSubmit: SubmitHandler<FormProfileSchema> = async (data) => {
    console.log(data);

    if (user) {
      updateUser({
        userData: {
          id: user.id,
          ...data,
        },
      });
    }
  };

  return (
    <form className="flex flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
      {/* Avatar */}
      <Avatar avatar={user.avatar} id={user.id} />

      <div className="flex flex-col gap-[72px]">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              {errors.name && (
                <div className="text-error">{errors.name.message}</div>
              )}

              <div className="flex items-center gap-3">
                <p className="text-sm">Имя*</p>

                {!user?.name && <Warning className="size-6" />}
                {user?.name && <SuccessInput />}
              </div>

              <Input
                {...register("name")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="flex w-full cursor-pointer flex-col gap-[6px]">
              {errors.surname && (
                <div className="text-error">{errors.surname.message}</div>
              )}

              <div className="flex items-center gap-3">
                <p className="text-sm"> Фамилия*</p>

                {!user?.surname && <Warning className="size-6" />}
                {user?.surname && <SuccessInput />}
              </div>

              <Input
                {...register("surname")}
                className="h-12 rounded-[2px] bg-[#EBEBEB]"
                value={surname || ""}
                onChange={(e) => setSurname(e.target.value)}
              />
            </label>
          </div>

          <p className="text-sm text-[#939393]">
            Проверьте правильность ввода личных данных, они необходимы для
            получения и оформления заказа
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium uppercase">Электронная почта</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.email && (
              <div className="text-error">{errors.email.message}</div>
            )}

            <div className="flex items-center gap-3">
              <p className="text-sm">Введите вашу почту</p>

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
          <h2 className="text-lg font-medium uppercase">Номер телефона</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.phone && (
              <div className="text-error">{errors.phone.message}</div>
            )}

            <div className="flex items-center gap-3">
              <p className="text-sm">Введите номер телефона (+7)</p>

              {!user?.phone && <Warning className="size-6" />}
              {user?.phone && <SuccessInput />}
            </div>

            <Input
              {...register("phone")}
              value={phone || ""}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 rounded-[2px] bg-[#EBEBEB]"
            />
          </label>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-medium uppercase">Адрес</h2>

          <label className="flex w-full cursor-pointer flex-col gap-[6px]">
            {errors.address && (
              <div className="text-error">{errors.address.message}</div>
            )}

            <div className="flex items-center gap-3">
              <p className="text-sm">Введите адрес доставки</p>

              {!user?.address && <Warning className="size-6" />}
              {user?.address && <SuccessInput />}
            </div>

            <Input
              {...register("address")}
              value={address || ""}
              onChange={(e) => setAddress(e.target.value)}
              className="h-12 rounded-[2px] bg-[#EBEBEB]"
            />
          </label>
        </div>

        <Button variant={"secondary"} className="w-full">
          Сохранить изменения
        </Button>
      </div>
    </form>
  );
};

export { ProfileForm };
