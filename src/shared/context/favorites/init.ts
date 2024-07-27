import { sample } from "effector";
import { getFavs, getFavsFx } from ".";
import { $favorites } from "./state";

sample({
  clock: getFavs,
  source: $favorites,
  fn: (_, data) => data,
  target: getFavsFx,
});
