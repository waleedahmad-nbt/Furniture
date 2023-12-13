"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import productImage from "../../../assests/images/admin/Related1.png";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AssignAdminsidefalse } from "@/lib/store/slices/Allslices";

const array: any = [
  {
    customerName: "Microsoft Surface Pro",
    status: 'Delivered',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Delivered',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 299,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Delivered',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Delivered',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Canceled',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Delivered',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
  {
    customerName: "Microsoft Surface Pro",
    status: 'Canceled',
    date: '12/24/2023 - 01:05 PM',
    products: 12,
    price: 1999,
  },
];

const Orders = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AssignAdminsidefalse())
  },[])
  return (
    <div className="">
      <div className="bg-white border col-span-2 p-5">
        <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
          Orders
        </h1>
        <div className="relative mt-10 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Customer name
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Products
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  date
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {array &&
                array.map((e: any, i: any) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="flex items-center gap-3 text-ubuntu-regular text-HeadingColours px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                        >
                          {e.customerName}
                        </th>
                        <td className="px-6 py-4 text-ubuntu-light">{e.products}</td>
                        <td className="px-6 py-4 text-ubuntu-light">${e.price}</td>
                        <td className={`px-6 py-4 text-ubuntu-light`}>
                          <div className={` w-max h-max text-sm ${e.status==="Delivered"? "bg-[#198754]" : "bg-[#DC3545]"} text-white p-1 px-3 rounded-full`}>
                            {e.status}
                          </div>
                          </td>
                        <td className="px-6 py-4 text-ubuntu-light">{e.date}</td>
                        <td className="px-6 py-4 text-ubuntu-light flex justify-end items-start">
                          <MdDeleteOutline className="text-2xl cursor-pointer hover:text-[#DC3545]" />
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
