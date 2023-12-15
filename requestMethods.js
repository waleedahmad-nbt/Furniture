import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const TOKEN = "access dummy";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: TOKEN,
  },
});
