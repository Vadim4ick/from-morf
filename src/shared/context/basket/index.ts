import { PaymentDetails } from "@/lib/create-payment";
import axios, { AxiosError } from "axios";
import { createDomain } from "effector";
import { toast } from "sonner";

export interface Basket {
  id: string;
  size: string;
  count: number;
  title: string;
  price: number;
  discount: number;
  images: {
    id: string;
    width: number;
    height: number;
  };
  totalPrice: number;
}

export const basket = createDomain();

export const makePaymentFx = basket.createEffect(
  async ({ amount, description, orderId }: PaymentDetails) => {
    try {
      const { data } = await axios.post("/api/create-payment", {
        description: description,
        orderId: orderId,
        amount: amount,
      });

      localStorage.setItem("paymentId", JSON.stringify(data.result.data.id));
      window.location.href = data.result.data.confirmation.confirmation_url;
    } catch (error) {
      const err =
        // @ts-ignore
        (error as AxiosError).response?.data.error || (error as Error).message;

      toast.error(err);
    }
  },
);

export const checkPaymentFx = basket.createEffect(
  async ({ paymentId }: { paymentId: string }) => {
    try {
      const { data } = await axios.post("/api/check-payment", { paymentId });

      return data;
    } catch (error) {
      toast.error((error as Error).message);
    }
  },
);

export const setSelectedSize = basket.createEvent<string>();

export const addBasketItem = basket.createEvent<Omit<Basket, "count">>();
export const setBasketOnLoad = basket.createEvent();
export const deleteBasket = basket.createEvent();

export const deleteAll = basket.createEvent();
export const deleteById = basket.createEvent<{ id: string; size: string }>();

export const incrementItemCount = basket.createEvent<{
  id: string;
  size: string;
}>();
export const decrementItemCount = basket.createEvent<{
  id: string;
  size: string;
}>();

export const $selectedSize = basket
  .createStore<string>("")
  .on(setSelectedSize, (_, val) => val);

export const $basket = basket
  .createStore<Basket[]>([])
  .on(addBasketItem, (state, newItem) => {
    let itemExists = false;

    const newArr = state.map((item) => {
      if (item.id === newItem.id && item.size === newItem.size) {
        const newCount = item.count + 1;

        itemExists = true;
        return { ...item, count: newCount, totalPrice: item.price * newCount };
      }
      return item;
    });

    if (!itemExists) {
      newArr.push({ ...newItem, count: 1, totalPrice: newItem.price * 1 });
    }

    localStorage.setItem("basket", JSON.stringify(newArr));
    return newArr;
  })
  .on(setBasketOnLoad, () => {
    const items = localStorage.getItem("basket");

    if (items) {
      return JSON.parse(items);
    } else {
      return [];
    }
  })
  .on(deleteAll, () => {
    localStorage.removeItem("basket");
    return [];
  })
  .on(deleteById, (state, props) => {
    const id = props.id;
    const size = props.size;

    const updatedItems = state.filter(
      (item) => !(item.id === id && item.size === size),
    );

    localStorage.setItem("basket", JSON.stringify(updatedItems));
    return updatedItems;
  })
  .on(deleteBasket, () => {
    localStorage.removeItem("basket");

    return [];
  })
  .on(incrementItemCount, (state, { id, size }) => {
    const newArr = state.map((item) => {
      if (item.id === id && item.size === size) {
        const newCount = item.count + 1;

        return {
          ...item,
          count: newCount,
          totalPrice: item.price * newCount,
        };
      }
      return item;
    });

    localStorage.setItem("basket", JSON.stringify(newArr));
    return newArr;
  })
  .on(decrementItemCount, (state, { id, size }) => {
    const newArr = state.map((item) => {
      if (item.id === id && item.size === size && item.count > 1) {
        const newCount = item.count - 1;

        return { ...item, count: newCount, totalPrice: item.price * newCount };
      }
      return item;
    });

    localStorage.setItem("basket", JSON.stringify(newArr));
    return newArr;
  });
