"use client";

import { useUnit } from "effector-react";
import { $basket, $basketItems } from "../context/basket";
import { useMemo } from "react";

const useBasket = () => {
  const [basketIdsAndSizeAndCount] = useUnit([$basket]);
  const [basketItems] = useUnit([$basketItems]);

  const ids = useMemo(() => {
    return basketIdsAndSizeAndCount.map((item) => item.id);
  }, [basketIdsAndSizeAndCount]);

  return { basketIdsAndSizeAndCount, ids, basketItems };
};

export { useBasket };
