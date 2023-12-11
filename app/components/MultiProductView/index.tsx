"use client"
import { useState } from "react";
import Image from "next/image";

import Heart from "@/app/assets/icons/heart_dark.svg";
import cart from "@/app/assets/icons/cart_dark.svg";
import zoom from "@/app/assets/icons/zoom.svg";

const MultiProductView = ({ item }: any) => {

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const bgColor = item?.status === "sale" ? "bg-secondary" : "bg-primary";

  return (
    <>
      <div className={`bg-white flex items-center justify-center relative group overflow-hidden h-full`}>
        {item?.status && (
          <span className={`absolute top-2 left-3 rounded-2xl px-2 uppercase py-1 text-white font-bold text-[10px] z-10 ${bgColor}`}>
            {item?.status}
          </span>
        )}
        <div className="absolute top-2 right-3 z-10">
          <button className="bg-white border rounded-full w-[32px] h-[32px] flex items-center justify-center">
            <Image src={Heart} alt="product"/>
          </button>
          <button className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1">
            <Image src={zoom} alt="product"/>
          </button>
          <button className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1">
            <Image src={cart} alt="product"/>
          </button>
        </div>
        {item?.images?.length > 0 && item?.images?.map((img: any, index: number) => (
          <div className={`mx-auto duration-200 ${index === activeIndex ? "relative opacity-100 visible" : "absolute opacity-0 invisible pointer-events-none"}`} key={index}>
            <Image src={img} alt="product"/>
          </div>
        ))}
        <div className="absolute bottom-0 group-hover:bottom-4 translate-y-full group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100">
          <button 
            className="bg-primary px-8 py-2 w-max text-white font-medium text-[14px]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {item?.images?.length > 1 && item?.images?.map((item: any, index: number) => (
          <div 
            className={`flex h-[4px] w-full cursor-pointer ${activeIndex === index ? "bg-gray-300" : "bg-gray-100 opacity-40"}`}
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          ></div>
        ))}
      </div>
    </>
  )
}

export default MultiProductView
