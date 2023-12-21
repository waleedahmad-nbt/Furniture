import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = () => {
  let item = localStorage.getItem("token") || null;
  item ? JSON.parse(item) : null;

  return axios.create({
    baseURL: BASE_URL,
    headers: {
      token: item?.token,
    },
  });
};

// -------GET PRODUCTS--------------------------------------------------------
// @description       Get all products
// @route             GET http://localhost:8000/furniture/api/v1/product/
// @access            Public

// ---------------------------- Product Details -------------------------
// @description       Single product details
// @route             GET http://localhost:8000/furniture/api/v1/product/:productId
// @access            Public