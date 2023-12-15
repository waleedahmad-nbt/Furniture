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


// -------GET PRODUCTS--------------------------------------------------------
// @description       Get all products
// @route             GET http://localhost:8000/furniture/api/v1/product/
// @access            Public

// ---------------------------- Product Details -------------------------
// @description       Single product details
// @route             GET http://localhost:8000/furniture/api/v1/product/:productId
// @access            Public