"use client";
import React, { useState } from "react";
import Image from "next/image";
import image1 from "@/app/assets/images/product/productImage2.svg";

const Purchase = () => {

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl text-ubuntu-bold">Purchase orders</h1>
      </div>

      <div className="bg-white border rounded-lg p-5 py-10 flex flex-col justify-center items-center">
          <Image src={image1} alt="" />
          <h1 className="text-sm text-ubuntu-bold text-HeadingColours">Manage your purchase orders</h1>
          <p className="text-xs text-ubuntu-regular text-P_textColour my-2">Track and receive inventory ordered from suppliers.</p>
          <div className="flex justify-center gap-2 items-center">
        <button className="rounded-lg text-xs p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
            Learn more
          </button>
          <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
            Create purchase order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
