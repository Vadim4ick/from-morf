import { sample } from "effector";
import { getMeFx, loadUser } from ".";
import { $user } from "./state";

sample({
  clock: loadUser,
  source: $user,
  fn: (_, data) => data,
  target: getMeFx,
});
