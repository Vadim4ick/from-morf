import { z } from "zod";

export const formProfileSchema = z.object({
  first_name: z.string().min(3, "Имя должно состоять минимум из 3-х символов"),
  last_name: z
    .string()
    .min(3, "Фамилия должно состоять минимум из 3-х символов"),
  email: z.string().email("Несуществующий email"),
  phone_number: z
    .string()
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона",
    ),
  user_address: z.string().min(20, "Введите город, улицу и дом"),
});

export type FormProfileSchema = z.infer<typeof formProfileSchema>;
