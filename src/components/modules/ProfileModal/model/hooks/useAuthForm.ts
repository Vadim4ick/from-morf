"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { TypeAuthForm } from "../types";
import { $apiFront } from "@/shared/api/api";

const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentForm, setCurrentForm] = useState<TypeAuthForm>("auth");

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

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onChangeForm = () => {
    if (currentForm === "auth") {
      setCurrentForm("register");
    } else {
      setCurrentForm("auth");
    }
  };

  return {
    email,
    password,
    onSubmit,
    onChangeEmail,
    onChangePass,
    onChangeForm,
    currentForm,
  };
};

export { useAuthForm };
