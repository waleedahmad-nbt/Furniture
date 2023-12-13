"use client";
import React, { useState } from "react";
import Sellerlayout from "../../../layouts/SellerDashboard";
import Image from "next/image";
import image1 from "@/app/assets/images/product/productImage1.svg";
import Link from "next/link";

const GiftCard = () => {
 

  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Gift cards</h1>
        </div>

        <div className="bg-white border rounded-lg p-5 py-10 flex flex-col justify-center items-center">
            <Image src={image1} alt="" />
            <h1 className="text-sm text-ubuntu-bold text-HeadingColours">Start selling gift cards</h1>
            <p className="text-xs text-ubuntu-regular text-P_textColour my-2">Add gift card products to sell or issue gift cards directly to your customers.</p>
            <div className="flex justify-center gap-2 items-center">
            <button className="rounded-lg text-xs p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              Issue gift card
            </button>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Add gift card product
            </button>

          </div>
            <p className="text-center  py-5 mt-4 text-P_textColour text-sm">By using gift cards, you agree to our <Link href="#" className="text-blue-600 underline">Terms of Service</Link></p>
            
        </div>
        <p className="text-center py-5 mt-4 text-P_textColour text-sm">Learn more about <Link href="#" className="text-blue-600 underline">gift cards</Link></p>
        
      </div>
    </Sellerlayout>
  );
};

export default GiftCard;
