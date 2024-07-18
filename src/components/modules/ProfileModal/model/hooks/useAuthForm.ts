"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { TypeAuthForm } from "../types";

const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentForm, setCurrentForm] = useState<TypeAuthForm>("auth");

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
    onClick,
    onChangeEmail,
    onChangePass,
    onChangeForm,
    currentForm,
  };
};

export { useAuthForm };
