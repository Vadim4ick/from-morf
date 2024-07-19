import { z } from "zod";

export const formAuthSchema = z.object({
  email: z.string().email("Несуществующий email"),
  password: z.string().min(8, "Пароль должен быть минимум 8 символа"),
});

export type FormAuthSchema = z.infer<typeof formAuthSchema>;
