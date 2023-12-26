"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const useRequestMethods = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const item = localStorage.getItem("token");
    if (item) {
      const parsedItem = JSON.parse(item);
      setToken(parsedItem.token);
    }
  }, []);

  const publicRequest = axios.create({
    baseURL: BASE_URL,
  });

  const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
      token: token,
    },
  });

  return { publicRequest, userRequest };
};

export default useRequestMethods;
