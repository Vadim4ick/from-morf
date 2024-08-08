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
  user_address: string;
  first_name: string;
  phone_number: string;
}
