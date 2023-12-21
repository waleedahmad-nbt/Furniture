import React from "react";
import { FurniturePortfolio } from "../components";
import { publicRequest } from "@/requestMethods";

const customizeFurniture = async () => {
  const res = await publicRequest.get("/portfolio");
  console.log(res.data);

  return (
    <>
      <FurniturePortfolio response={res.data.data} />
    </>
  );
};

export default customizeFurniture;

// export async function fetchData() {
//   const response = await publicRequest.get("/portfolio");
//   console.log(response.data);

//   return response.data;
// }
