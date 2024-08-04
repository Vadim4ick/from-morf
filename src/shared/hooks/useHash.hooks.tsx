"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const useHash = () => {
  const [hash, setHash] = useState("");
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Функция для обновления хеша
    const updateHash = () => {
      const currentHash = window.location.hash.substring(1);
      setHash(currentHash);
    };

    // Обновляем хеш при монтировании
    updateHash();

    // Слушаем изменения хеша
    window.addEventListener("hashchange", updateHash);

    // Убираем слушатель при размонтировании
    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname, searchParams]);

  // Функция для изменения хеша в URL
  const handleTabChange = (newHash: string) => {
    window.location.hash = newHash;
  };

  return { hash, handleTabChange };
};

export { useHash };
