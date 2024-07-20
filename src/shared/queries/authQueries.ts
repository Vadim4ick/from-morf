import {
  getRefreshToken,
  saveAccessTokenStorage,
  saveRefreshTokenStorage,
} from "@/lib/auth-token";
import { $apiBack, $apiFront } from "../api/api";
import { LoginData, User } from "../types/authForm";
import axios from "axios";

class AuthQueries {
  async sendMail({ email, password }: { email: string; password: string }) {
    const { data, status } = await $apiFront.post<{
      status: number;
      activationToken: string;
    }>("/api/send-email", {
      email: email,
      password: password,
    });

    return { data, status };
  }

  async register({ email, password }: { email: string; password: string }) {
    try {
      const { data, status } = await $apiBack.post(`/users`, {
        email: email,
        password: password,
        role: "7b9561f9-12bf-4b55-b1b3-6c282ded5ab2",
      });

      console.log(data);

      return status;
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async login({ email, password }: { email: string; password: string }) {
    try {
      const { data } = await axios.post<LoginData>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`,
        {
          email: email,
          password: password,
        },
      );

      saveAccessTokenStorage(data.data.access_token);
      saveRefreshTokenStorage(data.data.refresh_token);

      console.log("data", data);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async updateUser({ userData }: { userData: User }) {
    try {
      const { data } = await $apiBack.patch<LoginData>(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/users/${userData.id}`,
        {
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          address: userData.address,
          phone: userData.phone,
          avatar: userData.avatar,
        },
      );

      console.log("data", data);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async refresh() {
    const token = getRefreshToken();

    if (!token) {
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/refresh`,
        {
          refresh_token: token,
        },
      );

      saveAccessTokenStorage(data.data.access_token);
      saveRefreshTokenStorage(data.data.refresh_token);

      console.log("data", data);
    } catch (error) {
      console.log((error as Error).message);
    }
  }

  async checkAuthEmail({ email }: { email: string }) {
    const { data } = await $apiFront.post<{
      registered: boolean;
      status: number;
    }>("/api/check-email", {
      email: email,
    });

    return data;
  }
}

export const authQuery = new AuthQueries();
