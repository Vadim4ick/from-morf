export type TypeAuthForm = "auth" | "register";

export interface LoginData {
  data: {
    access_token: string;
    expires: number;
    refresh_token: string;
  };
}

export interface User {
  avatar: string | null;
  email: string;
}
