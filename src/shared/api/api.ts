import axios from "axios";

export const $apiFront = axios.create({
  baseURL: "",
});

export const $apiBack = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
