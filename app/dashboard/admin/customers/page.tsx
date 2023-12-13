"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import customerImage from "@/app/assets/images/admin/user-01.png";
import { useDispatch } from "react-redux";
import { AssignAdminsidefalse } from "@/lib/store/slices/Allslices";

const array: any = [
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
  {
    name: "Danish Heilium Ui/Ux Designer",
    image: customerImage,
    product: "Microsoft Surface Pro",
    orders: 4,
    amount: 1999,
  },
];

const Customers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AssignAdminsidefalse())
  },[])
  return (
    <div className="">
      <div className="bg-white border col-span-2 p-5">
        <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
        Customers
        </h1>
        <div className="relative mt-10 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Orders
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Amount
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
                          <Image
                            className="w-[40px] rounded-lg"
                            src={e.image}
                            alt=""
                          />
                          {e.name}
                        </th>
                        <td className="px-6 py-4 text-ubuntu-light">{e.product}</td>
                        <td className="px-6 py-4 text-ubuntu-light">
                        {e.orders}
                        </td>
                        <td className="px-6 py-4 text-ubuntu-light">${e.amount}</td>
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

export default Customers;

