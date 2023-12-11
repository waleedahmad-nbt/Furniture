"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PaginationContainer, ProductCard } from "../components";

import { FaAngleDown, FaList, FaSlidersH } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

import angle from "@/app/assets/icons/angle-right.svg";
import check from "@/app/assets/icons/check.svg";

import bed from "@/app/assets/products/bed.png";
import kitchen from "@/app/assets/products/kitchen.png";
import Pro1 from "@/app/assets/products/table_02.png";
import Pro2 from "@/app/assets/products/table_03.png";
import arrowL from "@/app/assets/icons/arrow-left.svg";

const Products = () => {

  const [tab, setTab] = useState<string>("");
  const [pageData, setPageData] = useState<any>({
    start: 0,
    end: 0
  });

  const colors = ["#D76C66", "#7584DE", "#292929", "#B0D7E8", "#9D763B", "#D19D4A", "#E7AF96", "#BABABA", "#D76C66", "#A3CAAB"];
  const cats = [
    { label: "Adidas", quantity: 10 },
    { label: "Balmain", quantity: 39 },
    { label: "Balenciage", quantity: 95 },
    { label: "Burberry", quantity: 110 },
    { label: "Kenzo", quantity: 48 },
    { label: "Givenchy", quantity: 77 },
    { label: "Zara", quantity: 48 }
  ];
  const status = ["In Stock", "On Sale"];

  const [filters, setFilters] = useState({
    color: "",
    CAta: "",
    status: ""
  })

  const options = ["Bathroom", "Home Office"];

  const products = [
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
  ]

  const newArrival = [
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "new" },
  ]

  return (
    <>
      <div className="bg-[url('/products_Banner.png')] bg-no-repeat bg-center bg-cover">
        <div className="bg-[#00000099] relative">
          <div className="container mx-auto">
            <div className="text-white font-medium text-[18px] text-center py-20 w-3/4 mx-auto">
              <p className="uppercase">contact us for Guidline</p>
              <h1 className="text-[50px] my-5">Bed</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container">
          <div className="border-b-[2px] pb-4 border-[#858585]">
            <div className="flex items-center gap-2 mt-4">
              <p className="text-gray-200">Home</p>
              <Image src={angle} alt="icon"/>
              <p className="text-gray-300 font-medium">Shop</p>
            </div>
            <p className="text-gray-300 font-medium mt-2">Product Categories</p>
            <div className="flex flex-wrap gap-2 my-3">
              {options?.map((item: any, index: number) => (
                <button onClick={() => setTab(item)} className="bg-white flex items-center gap-2 px-3 py-2 shrink-0" key={index}>
                  <div className={`w-[17px] h-[15px] p-[2px] flex items-center justify-center text-white ${tab === item ? "bg-primary" : "bg-[#F1F3F5]"}`}>
                    {tab === item && (
                      <Image src={check} alt="icon"/>
                    )}
                  </div>
                  {item}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between">
              <p className="font-medium text-[18px] text-gray-300">Showing {pageData?.start}-{pageData?.end} of {products?.length} result</p>
              <div className="flex gap-3 items-center shrink-0 text-gray-300">
                <button className="bg-white flex items-center gap-2 px-6 py-2 shrink-0">
                  <FaSlidersH />
                  Filter
                </button>
                <button className="bg-white flex items-center gap-2 px-6 py-2 shrink-0 font-medium">
                  Default sorting
                  <FaAngleDown />
                </button>
                <button className="bg-primary text-white flex items-center justify-center w-[40px] h-[40px] shrink-0">
                  <CgMenuGridO size={22} />
                </button>
                <button className="bg-white flex items-center justify-center w-[40px] h-[40px] shrink-0">
                  <FaList />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <div className="flex -mx-[15px] mt-10">

            <div className="flex-[0_0_33%] px-[10px]">
              <div className="bg-[#FAFAFA] px-5 py-7">
                <p className="text-gray-900 font-bold">Filter by Color</p>
                <div className="flex flex-wrap mt-4 gap-4">
                  {colors?.map((item: any, index: any) => (
                    <button
                      className={`rounded-full border p-[5px] ${filters.color === item ? "border-primary" : "border-transparent"}`}
                      key={index}
                      onClick={() => setFilters((prev: any) => { return { ...prev, color: item } })}
                    >
                      <span className="block rounded-full w-[18px] h-[18px]" style={{ backgroundColor: item }}></span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Filter by Price</p>
                <div className="flex flex-wrap mt-4 gap-4">
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Filter by CAta</p>
                <div className="flex flex-wrap mt-4 gap-4">
                  {cats?.map((item: any, index: any) => (
                    <div key={index} className="flex items-center justify-between w-full cursor-pointer" onClick={() => setFilters((prev: any) => { return { ...prev, CAta: item.label } })}>
                      <div className="flex items-center gap-2">
                        <div className="w-[17px] h-[15px] p-[2px] border flex items-center justify-center text-white">
                          <div className={`w-[9px] h-[8px] ${filters.CAta === item.label ? "bg-[#272727]" : "bg-white"}`}></div>                          
                        </div>
                        <p className="text-gray-900">{item?.label}</p>
                      </div>
                      <span className="text-gray-200">{item?.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Product Status</p>
                <div className="flex flex-wrap mt-4 gap-4">
                  {status?.map((item: any, index: any) => (
                    <div key={index} className="flex items-center justify-between w-full cursor-pointer" onClick={() => setFilters((prev: any) => { return { ...prev, status: item } })}>
                      <div className="flex items-center gap-2">
                        <div className="w-[17px] h-[15px] p-[2px] border flex items-center justify-center text-white">
                          <div className={`w-[9px] h-[8px] ${filters.status === item ? "bg-[#272727]" : "bg-white"}`}></div>                          
                        </div>
                        <p className="text-gray-900">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-[0_0_66.66%] px-[10px]">
              <PaginationContainer items={products} setStats={(start: any, end: any) => setPageData({ start: start, end: end})}/>
            </div>

          </div>
        </div>                  
      </div>

      <div className="container my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[38px] text-gray-300 font-bold">Recently View</h1>
          <Link href="#" className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]">
            <span>view all</span>
            <Image src={arrowL} alt="icon"/>
          </Link>
        </div>
        <div className="w-full my-10">
          <div className="relative grid grid-cols-5 gap-6">
            {newArrival?.map((item: any, index: number) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products;
