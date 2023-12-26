// import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// // Check if running in a browser environment before accessing localStorage
// let item;
// if (typeof window !== "undefined") {
//   item = localStorage.getItem("token");
//   item ? JSON.parse(item) : "";
// }

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     token: item?.token,
//   },
// });

// // -------GET PRODUCTS--------------------------------------------------------
// // @description       Get all products
// // @route             GET http://localhost:8000/furniture/api/v1/product/
// // @access            Public

// // ---------------------------- Product Details -------------------------
// // @description       Single product details
// // @route             GET http://localhost:8000/furniture/api/v1/product/:productId
// // @access            Public
