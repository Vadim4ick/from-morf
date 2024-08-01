"use client";

import { useUnit } from "effector-react";
import { $basket } from "../context/basket";

const useBasket = () => {
  const [basketIdsAndSizeAndCount] = useUnit([$basket]);

  return { basketIdsAndSizeAndCount };
};

export { useBasket };
