import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);
var parsedToken;
var TOKEN = "Dummy";
if (token != undefined) {
  parsedToken = JSON.parse(token);
  console.log(parsedToken.token);
  TOKEN = parsedToken.token;
}
// let token = "Dummy"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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
