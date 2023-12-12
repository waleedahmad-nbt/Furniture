"use client"
import { useState } from "react";
import Image from "next/image";
import { AccountSideBar } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FiX } from "react-icons/fi";

import Pro2 from "@/app/assets/products/table_03.png";

const MyOrders = () => {

  const products = [
    { _id: "1", name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "Delivered" },
    { _id: "2", name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "Pending" },
    { _id: "3", name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "In Transits" },
  ]

  return (
    <div className="container">
      <h1 className="text-gray-900 font-medium text-[48px] text-center my-7">My Orders</h1>
      <div className="bg-white px-10 py-10 rounded-sm flex flex-wrap mb-16">
        <div className="flex-[0_0_30%] pr-5">
          <AccountSideBar />
        </div>
        <div className="flex-[0_0_70%] pl-5">
          <h2 className="text-gray-900 font-medium text-[20px]">Orders</h2>
          <div className="bg-[#FCFCFC] rounded-md mt-6">
            <table className="text-left w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="py-3 px-5">Product</th>
                  <th className="py-3 px-5">Price</th>
                  <th className="py-3 px-5">Qty</th>
                  <th className="py-3 px-5">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 && products?.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className="px-2 text-gray-200 text-xl">
                      <button onClick={() => console.log(item?._id)}>
                        <FiX />
                      </button>
                    </td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-[74px] max-w-[100px] shrink-0">
                          <Image src={item?.images[0]} alt="product" className="shrink-0 max-h-full w-auto"/>
                        </div>
                        <div className="text-gray-300">
                          <p>{item?.name}</p>
                          <span>Sunny Premium</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5">
                      <span className="text-gray-300">AED {item?.priceNow}</span>
                    </td>
                    <td className="py-3 px-5">
                      <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-md border">{item?.quantity}</div>
                    </td>
                    <td className="py-3 px-5">
                      <span
                        className={`${item?.status === "Pending" ? "text-secondary" : item?.status === "In Transits" ? "text-green" : "text-gray-300"}`}
                      >
                        {item?.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders