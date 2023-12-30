// "use client";
import React from "react";
import { FurniturePortfolio } from "../components";
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
}

async function fetchCats() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/category`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    throw error;
  }
}

const customizeFurniture = async () => {
  async function fetchData() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching portfolio:", error);
      throw error;
    }
  }

  const images: any = await fetchData();
  const cats: any = await fetchCats();

  return (
    <>
      <FurniturePortfolio response={images.data} allCategories={cats.data} />
    </>
  );
};

export default customizeFurniture;
