import crypto from "crypto";

export type Primitive = string | number | boolean | null | undefined;

export function makeToken(params: Record<string, Primitive>, password: string) {
  // Берем ТОЛЬКО плоские корневые поля (без вложенных объектов), исключаем Token
  const flatEntries = Object.entries(params).filter(
    ([k, v]) => k !== "Token" && (typeof v !== "object" || v === null),
  ) as [string, Primitive][];

  // Добавляем Password
  const map: Record<string, Primitive> = Object.fromEntries(flatEntries);
  map.Password = password;

  // Сортируем по ключам и конкатенируем значения
  const concat = Object.keys(map)
    .sort()
    .map((k) => String(map[k] ?? ""))
    .join("");

  return crypto.createHash("sha256").update(concat).digest("hex");
}
