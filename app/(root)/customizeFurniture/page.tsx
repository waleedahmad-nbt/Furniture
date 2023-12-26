import React from "react";
import { FurniturePortfolio, useRequestMethods } from "../components";
// import { publicRequest } from "@/requestMethods";

async function fetchData() {
  const { publicRequest } = useRequestMethods();

  try {
    const response = await publicRequest.get("/portfolio");
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
}

const customizeFurniture = async () => {
  const images: any = await fetchData();

  return (
    <>
      <FurniturePortfolio response={images.data} />
    </>
  );
};

export default customizeFurniture;
