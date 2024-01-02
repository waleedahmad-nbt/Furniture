"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Wavechart from "../components/wavechart";

import { FiArrowUpRight } from "react-icons/fi";
import { CiHardDrive } from "react-icons/ci";
import { BsCreditCard2Front } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";

import Product from "@/app/assets/images/Seller/Product.jpeg";
import Instagrampic from "@/app/assets/images/Seller/Instagram.svg";
import Facebookpic from "@/app/assets/images/Seller/facebook.jpg";
import axios from "axios";

const Admin = () => {
  const [checkTab, setchecktab] = useState(0);
  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>("Months");
  const [chartType, setChartType] = useState<string>("Months");

  useEffect(() => {
    const data = async () => {

      let apiEndPoint = "";

      if(checkTab === 0) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/statistics`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/statistics`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/dailystats`;
        }
      } else if(checkTab === 2) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/statistics/orders`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/statistics/orders`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-statistics/orders`;
        }
      } else if(checkTab === 1) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/sales/orders`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/sales/orders`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-sales/orders`;
        }
      }


      try {
        const res = await axios.get(apiEndPoint);

        if(res.status === 200) {
          setData(res.data.data);
          setChartType(type);
        }
        
      } catch (error) {
        console.log(error)
      }
    }

    data();
  }, [type, checkTab])  

  return (
    <div className="w-full">
      <div className="w-1/2 py-4 m-auto">
        <div className="w-full bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-4 gap-4 p-2">
            <div
              onClick={() => setchecktab(0)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 0 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">Total Customers</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                309
                <span className="text-xs px-1 text-Primary flex items-center font-bold text-green">
                  <FiArrowUpRight /> 55%{" "}
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(1)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 1 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">Total Sales</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                PKR5.76K
                <span className="text-xs px-1 text-Primary flex items-center font-bold text-green">
                  <FiArrowUpRight /> 13%{" "}
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(2)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 2 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">Total Orders</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                4
                <span className="text-xs px-1 flex items-center font-bold text-green">
                  ---
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(3)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 3 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">Conversation rate</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                0.97%
                <span className="text-xs px-1 text-pricesAndDiscount flex items-center font-bold text-secondary">
                  <FiArrowUpRight className="rotate-90" /> 55%{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="px-3">
            <div className="flex justify-end mb-3">
              <select onChange={(e: any) => setType(e.target.value)} value={type} className="px-1 py-1 rounded-md bg-gray-900 text-white flex gap-3 items-center text-xs">
                <option value="Months">Months</option>
                <option value="Weeks">Weeks</option>
                <option value="Days">Days</option>
              </select>
            </div>
            <Wavechart data={data} type={chartType} checkTab={checkTab}/>
          </div>
        </div>
        <div className="w-full mt-5 p-2 bg-white rounded-lg shadow-md">
          <div className="border-b-[1px] py-3 px-2 flex justify-between cursor-pointer">
            <p className="font-bold text-base flex items-center">
              <CiHardDrive />
              &nbsp;&nbsp; 10 Orders &nbsp;
              <span className="font-normal text-sm">to fulfill</span>
            </p>
            <TbMathGreater className="text-sm text-gray-300" />
          </div>
          <div className="py-3 px-2 flex justify-between cursor-pointer">
            <p className="font-bold text-base flex items-center">
              <BsCreditCard2Front />
              &nbsp;&nbsp; 50+ Payments &nbsp;
              <span className="font-normal text-sm">to capture</span>
            </p>
            <TbMathGreater className="text-sm text-gray-300" />
          </div>
        </div>
        <div className="w-full mt-5 p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-300 text-xs">In the last 14 days</p>
          <h2 className="text-gray-900 font-bold py-4">
            Visitors from these social sites are spending time in your store
          </h2>
          <h2 className="text-gray-900 py-4 text-sm">
            Here’s how many pages they viewed and how long they stayed.
          </h2>
          <div className="flex justify-between py-3">
            <span>Product</span>
            <h1 className="text-gray-900 font-bold">Aug 10–Aug 23</h1>
          </div>
          <div className="border-[1px] rounded-lg">
            <div className="">
              <div className="flex items-center justify-between border-b-[1px]">
                <div className="space-x-6 p-4 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src={Product}
                    alt="Product.jpg"
                  />
                  <p className="text-sm text-blue-600 hover:underline ">
                    <Link href={"/dashboard/seller"}>
                      Self Steering Mug (20% OFF Azadi Sale)
                    </Link>
                  </p>
                </div>
                <p className="text-sm px-2 text-gray-300">2,015 views</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px]">
                <div className="space-x-6 p-4 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src={Product}
                    alt="Product.jpg"
                  />
                  <p className="text-sm text-blue-600 hover:underline ">
                    <Link href={"/dashboard/seller"}>
                      ( 2 In1 ) Kitchen Liquid Soap Pump
                    </Link>
                  </p>
                </div>
                <p className="text-sm px-2 text-gray-300">580 views</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px]">
                <div className="space-x-6 p-4 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src={Product}
                    alt="Product.jpg"
                  />
                  <p className="text-sm text-blue-600 hover:underline ">
                    <Link href={"/dashboard/seller"}>
                      Nicer Dicer quick Fruit Vegetable Cutter 5 in 1 Slicer
                      Speedy Chopper
                    </Link>
                  </p>
                </div>
                <p className="text-sm px-2 text-gray-300">516 views</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-5 p-4 bg-white rounded-lg shadow-md">
          <p className="text-xs">Since store launch</p>
          <h2 className="text-gray-300 font-bold py-4">
            Visitors from these social sites are spending time in your store
          </h2>
          <h2 className="text-gray-300 py-4 text-sm">
            Here’s how many pages they viewed and how long they stayed.
          </h2>
          <div className="flex justify-between py-3">
            <span>Referrer</span>
            <h1 className="text-gray-300 font-bold">Average length of stay</h1>
          </div>
          <div className="border-[1px] rounded-lg">
            <div className="">
              <div className="flex items-center justify-between border-b-[1px]">
                <div className="space-x-6 p-4 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src={Instagrampic}
                    alt="Product.jpg"
                  />
                  <div className="space-y-1">
                    <p className="text-sm">Instagram</p>
                    <p className="text-sm">Average page views: 3</p>
                  </div>
                </div>
                <p className="text-sm px-2 text-gray-300">half a minute</p>
              </div>
              <div className="flex items-center justify-between border-b-[1px]">
                <div className="space-x-6 p-4 flex items-center">
                  <Image
                    className="h-10 w-10"
                    src={Facebookpic}
                    alt="Product.jpg"
                  />
                  <div className="space-y-1">
                    <p className="text-sm">Facebook</p>
                    <p className="text-sm">Average page views: 1.8</p>
                  </div>
                </div>
                <p className="text-sm px-2 text-gray-300">
                  less than 20 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
