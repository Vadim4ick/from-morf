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
  last_name: string;
  address: string;
  first_name: string;
  number: string;
}

export interface UserPaymentSuccess {
  id: string;
  last_name: string;
  first_name: string;
}
