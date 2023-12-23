"use client";
import Image from "next/image";
import { AccountSideBar } from "../components";
import { FiX } from "react-icons/fi";

import Pro2 from "@/app/assets/products/table_03.png";
import React, { useEffect, useState } from "react";
import { publicRequest } from "@/requestMethods";

const MyOrders = () => {
  const products = [
    {
      _id: "1",
      name: "Rocket stool",
      images: [Pro2],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 2,
      status: "Delivered",
    },
    {
      _id: "2",
      name: "Rocket stool",
      images: [Pro2],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 0,
      status: "Pending",
    },
    {
      _id: "3",
      name: "Rocket stool",
      images: [Pro2],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 5,
      status: "In Transits",
    },
  ];

  const [orders, setOrders] = useState<any>([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get(`/order`);
  
        if(res.status === 200) {
          console.log(res.data.data);
          setOrders(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getOrders();
  }, []) 

  let token = localStorage.getItem("token");

  return (
    <div className="container">
      <h1 className="text-gray-900 font-medium text-3xl md:text-[48px] text-center my-7">
        My Orders
      </h1>
      <div className="bg-white px-5 md:px-10 py-10 rounded-sm flex flex-col lg:flex-row justify-center gap-5 mb-16">
        {token && (
          <div className="w-full lg:w-[30%] pr-0 md:pr-5">
            <AccountSideBar />
          </div>
        )}
        <div className="w-full lg:w-[65%] pl-0 md:pl-5 pr-2 mt-5 md:mt-0">
          <h2 className="text-gray-900 font-medium text-[20px] ps-5 md:ps-0">
            Orders
          </h2>
          <div className="bg-[#FCFCFC] rounded-md mt-6 overflow-x-auto">
            <table className="text-left w-full table-auto">
              <thead>
                <tr>
                  <th className="py-3 px-2 md:px-5 text-sm font-medium md:font-semibold">
                    Product
                  </th>
                  <th className="py-3 px-5 text-sm font-medium md:font-semibold">
                    Price
                  </th>
                  <th className="py-3 px-5 text-sm font-medium md:font-semibold">
                    Qty
                  </th>
                  <th className="py-3 px-0 md:px-5 text-sm font-medium md:font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 &&
                  orders?.map((order: any, index: number) => (
                    <React.Fragment key={index}>
                    {order?.products?.map((item: any, index: number) => (
                        <tr key={index}>
                          <td className="py-3 px-0 md:px-5">
                            <div className="flex items-center gap-0 md:gap-3">
                              <div className="flex items-center justify-center h-[74px] w-[100px] shrink-0">
                                <Image
                                  src={item?.image}
                                  width={100}
                                  height={100}
                                  alt="product"
                                  className="shrink-0 max-w-full max-h-full"
                                />
                              </div>
                              <div className="text-gray-300 text-xs md:text-sm hidden xs:block">
                                <p>{item?.name}</p>
                                <span>Sunny Premium</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 ps-5">
                            <p className="text-gray-300 text-xs md:text-sm">
                              AED {item?.price}
                            </p>
                          </td>
                          <td className="py-3 px-5">
                            <div className="w-[20px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center bg-white rounded-md border text-xs md:text-sm">
                              {item?.qty}
                            </div>
                          </td>
                          <td className="py-3 px-0 md:px-5 text-xs md:text-sm">
                            <span
                              className={`${
                                order?.status === "processing"
                                  ? "text-secondary"
                                  : order?.status === "completed"
                                  ? "text-green"
                                  : order?.status === "delivered" ? "text-gray-300" : ""
                              } capitalize`}
                            >
                              {order?.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
