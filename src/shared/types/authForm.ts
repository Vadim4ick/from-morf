export type TypeAuthForm = "auth" | "register";

export interface LoginData {
  data: {
    access_token: string;
    expires: number;
    refresh_token: string;
  };
}

export interface User {
  id: string;
  avatar: string | null;
  email: string;
  surname: string;
  address: string;
  name: string;
  phone: string;
}
