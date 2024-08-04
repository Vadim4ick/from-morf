import { TabFavourites } from "../../tab/TabFavourites";
import { TabOrders } from "../../tab/TabOrders";
import { TabProfile } from "../../tab/TabProfile";

export const tabs = [
  { value: "profile", label: "Личные данные", Content: TabProfile },
  { value: "orders", label: "Заказы", Content: TabOrders },
  { value: "favourites", label: "Избранное", Content: TabFavourites },
];
