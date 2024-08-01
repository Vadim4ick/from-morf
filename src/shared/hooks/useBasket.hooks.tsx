"use client";

import { useUnit } from "effector-react";
import { $basket } from "../context/basket";
import { useEffect, useState } from "react";

const useBasket = () => {
  const [basketIdsAndSizeAndCount] = useUnit([$basket]);

  const [discountCount, setDiscountCount] = useState(0);

  useEffect(() => {
    const res = basketIdsAndSizeAndCount.filter((el) => el.discount);

    setDiscountCount(res.length);
  }, [basketIdsAndSizeAndCount]);

  return { basketIdsAndSizeAndCount, discountCount };
};

export { useBasket };
