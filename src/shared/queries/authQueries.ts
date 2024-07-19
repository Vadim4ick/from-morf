import { $apiBack, $apiFront } from "../api/api";

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
