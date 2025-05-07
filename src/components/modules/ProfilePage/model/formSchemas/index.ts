import { z } from "zod";

export const formProfileSchema = z.object({
  first_name: z.string().min(1, "Заполните имя"),
  last_name: z.string().min(1, "Заполните Фамилию"),
  email: z.string().email("Несуществующий email"),
  number: z
    .string()
    .regex(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Введите корректный номер телефона",
    ),
  address: z.string().min(10, "Введите город, улицу и дом"),
});

export type FormProfileSchema = z.infer<typeof formProfileSchema>;
