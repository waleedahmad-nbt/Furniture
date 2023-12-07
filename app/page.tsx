"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Features, ProductCard } from "./components";

import arrowL from "@/app/assets/icons/arrow-left.svg";
import mirror from "@/app/assets/products/mirror.png";
import table from "@/app/assets/products/table.png";
import desk from "@/app/assets/products/desk.png";
import chair from "@/app/assets/products/chair.png";
import bed from "@/app/assets/products/bed.png";
import kitchen from "@/app/assets/products/kitchen.png";

export default function Home() {

  const tabs = ["Bedroom", "Dining Room", "Living Room"];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const cats = [
    { title: "Bedroom", image: mirror, quantity: "12" },
    { title: "Dining room", image: table, quantity: "12" },
    { title: "Home office", image: desk, quantity: "12" },
    { title: "Kitchen", image: kitchen, quantity: "12" },
    { title: "Living room", image: chair, quantity: "12" },
    { title: "Bed room", image: bed, quantity: "12" },
  ]

  const products = [
    { name: "Rocket stool", image: chair, priceWas: "27.90", priceNow: "18.80", quantity: "12" },
    { name: "Rocket stool", image: chair, priceWas: "27.90", priceNow: "18.80", quantity: "12" },
  ]


  return (
    <>
      <div className="relative bg-cream">
        <div className="container">
          <div className="flex -mx-[15px] Home_Banner">
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] px-[15px]">
              <div className="text-gray-300">
                <span className="text-[18px] font-medium">Trending Furniture</span>
                <h1 className="text-[50px] font-medium">Great Furniture<br />Sale</h1>
                <p className="border-l-[3px] border-gray-300 my-10 pl-5">Limited time<br />sale up to 30% off</p>
                <Link href="#" className="flex items-center gap-3 bg-primary px-6 py-3 w-max text-white">
                  <span>Shop now</span>
                  <Image src={arrowL} alt="icon"/>
                </Link>
              </div>
            </div>
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] px-[15px]"></div>
          </div>
        </div>
      </div>
      
      <div className="container my-10">
        <Features />
      </div>

      <div className="container my-10">
        <div className="text-center">
          <h1 className="text-[38px] text-gray-300 font-bold">Our Categories</h1>
          <p className="text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
        </div>
        <div className="grid grid-cols-6 gap-5 my-14">
          {cats?.map((item: any, index: number) => (
            <div key={index}>
              <div className="bg-cream h-[170px] flex items-center justify-center">
                <Image src={item?.image} alt="product" className="mx-auto"/>
              </div>
              <h3 className="text-center font-medium text-gray-300 mt-3">{item?.title}</h3>
              <p className="text-center text-gray-300 text-[14px]">{item?.quantity} Products</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[38px] text-gray-300 font-bold">Best Selling Products</h1>
          <div className="flex items-center justify-between">
            {tabs?.map((item: any, index: number) => (
              <button onClick={() => setActiveTab(item)} className={`px-5 text-gray-200 rounded-md ${activeTab === item ? "bg-gray-100" : ""}`} key={index}>
                {item}
              </button>
            ))}
          </div>
          <Link href="#" className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]">
            <span>view all</span>
            <Image src={arrowL} alt="icon"/>
          </Link>
        </div>
        <div className="grid grid-cols-6 gap-5 my-14">
          {products?.map((item: any, index: number) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
