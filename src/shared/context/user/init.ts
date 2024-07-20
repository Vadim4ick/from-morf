import { sample } from "effector";
import {
  getMeFx,
  loadUser,
  loginUser,
  loginUserFx,
  updateUser,
  updateUserFx,
} from ".";
import { $user } from "./state";

sample({
  clock: loadUser,
  source: $user,
  fn: (_, data) => data,
  target: getMeFx,
});

sample({
  clock: updateUser,
  source: $user,
  fn: (_, data) => data,
  target: updateUserFx,
});

sample({
  clock: loginUser,
  source: $user,
  fn: (_, data) => data,
  target: loginUserFx,
});
