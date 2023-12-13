"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import productImage from "@/app/assets/images/admin/Related1.png";
import { useDispatch } from "react-redux";
import { AssignAdminsidefalse } from "@/lib/store/slices/Allslices";

const array: any = [
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 299,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
];


const Products = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AssignAdminsidefalse())
  },[])
  return (
    <div className="">
      <div className="bg-white border col-span-2 p-5">
        <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
          Products
        </h1>
        <div className="relative mt-10 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-ubuntu-bold">
                  Price
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
                            src={productImage}
                            alt=""
                          />
                          {e.productName}
                        </th>
                        <td className="px-6 py-4 text-ubuntu-light">{e.color}</td>
                        <td className="px-6 py-4 text-ubuntu-light">
                        {e.category}
                        </td>
                        <td className="px-6 py-4 text-ubuntu-light">${e.price}</td>
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

export default Products;
