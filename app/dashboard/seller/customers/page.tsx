"use client";
import React, { useEffect, useState } from "react";
import Sellerlayout from "../../layouts/SellerDashboard";
import Image from "next/image";
import image from "../../../assests/images/Seller/Product.jpeg";
import { BiLink, BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const products:any = [
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
  {
    id: 1,
    name: "Naseem Ahmad",
    subscription: "Not subscribed",
    location: "Chichawatni, Pakistan",
    Orders: 3,
    amount: "2,939.00",
  },
]
const Customers = () => {

  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  
  
      useEffect(() => {
          setData(
              products.filter((e:any,i:any) => {
                  return e.name.toLowerCase().includes(value.toLowerCase())
              })
          )
      },[value])
  
  
      const handleValue = (e:any) => {
          setValue(e.target.value)
      }
  

  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Customers</h1>
          <div className="flex justify-center gap-2 items-center">
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded text-ubuntu-regular">
              Export
            </button>
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded text-ubuntu-regular">
              Import
            </button>
            <Link href={'/dashboard/seller/products/new'}>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Add customer
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#F7F7F7] border shadow mb-5 rounded-lg">
          <div className="flex justify-between items-center p-3 text-sm">
            <div className="flex justify-center items-center gap-2">
              <p className="text-P_textColour  text-ubuntu-regular"><span className="text-black">1294</span> customers</p>
              <span className="text-P_textColour mx-2">|</span>
              <p className="text-P_textColour  text-ubuntu-regular"><span className="text-black">100%</span> of your customer base</p>
            </div>
            <div className="flex">
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center  text-HeadingColours bg-transparent hover:bg-[#D4D4D4]">
              Add filter
              <FaAngleDown className="ml-2" />
              </button>
            </div>
          </div>
          <div>
            
          </div>
        </div>

        <div className="bg-white border rounded-lg">
          <div className="flex w-full items-center p-2">
            <div className="w-full flex justify-center items-center gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  className="openSearch w-full text-sm text-ubuntu-regular border-none hover:bg-[#FAFAFA] rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                  placeholder="Search customers"
                  onChange={handleValue}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 openSearch">
                  <BiSearch className="openSearch" />
                </div>
              </div>
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <BiSort />
              </button>
            </div>
          </div>
          <table className="table-hover min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Customer name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email subscription
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount spent
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.map((product:any, i:any) => {
                  const {name, subscription, location, Orders, amount} = product
                  return(
                  <tr key={i} className="group">
                    <td className="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="max-w-[300px] px-6 py-1  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 py-1 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 ${subscription==="subscribed" ? "bg-[#CDFEE1] text-[#415831]" :  subscription==="Not subscribed" ? "bg-[#EFEFEF] text-[#656C73]"  : "bg-transparent"} rounded-lg w-max text-ubuntu-regular `}>
                        {subscription}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-1 whitespace-nowrap text-xs `}
                    >
                      {location}
                    </td>
                    <td className="px-6 py-1 text-left whitespace-nowrap text-xs text-gray-500">
                      {Orders} orders
                    </td>
                    <td className="px-6 py-1 text-left whitespace-nowrap text-xs text-gray-500">
                      <p>
                      Rs {amount}
                      </p>
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
            <div className="w-max p-5 m-auto">
                    <button className="p-1 rounded-tl-lg rounded-bl-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleLeftSolid /></button>
                    <button className="p-1 rounded-tr-lg rounded-br-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleRightSolid /></button>
                </div>
          <div>
            
          </div>
        </div>
        <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">customers</Link></p>

      </div>
    </Sellerlayout>
  );
};

export default Customers;
