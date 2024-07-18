import { $apiBack, $apiFront } from "../api/api";

class AuthQueries {
  async sendMail({ email }: { email: string }) {
    const { data, status } = await $apiFront.post<{
      status: number;
      activationToken: string;
    }>("/api/send-email", {
      email: email,
    });

    return { data, status };
  }

  async register() {
    try {
      const { data, status } = await $apiBack.post(`/users`, {
        email: "firulvv@mail.ru",
        password: "d1r3ctu5",
        role: "7b9561f9-12bf-4b55-b1b3-6c282ded5ab2",
      });

      console.log(data);

      return status;
    } catch (error) {
      console.log((error as Error).message);
    }
  }
}

export const authQuery = new AuthQueries();
