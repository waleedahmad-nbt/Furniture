"use client";
import React, { useState } from "react";
import Sellerlayout from "../../../layouts/SellerDashboard";
import Image from "next/image";
import image from "../../../../assests/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";

const Collection = () => {
  const [products, setProducts] = useState([
    {
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
      {
        image: image,
        name: "New Year Sale",
        Products: 276,
        ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
      },
  ]);

  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all')


  const changeValue = (i:any, type:any) => {
    setVal(i)
  }

  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Collections</h1>
          <div className="flex justify-center gap-2 items-center">
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Create collection
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                All
              </button>
              <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                +
              </button>
            </div>
            <div className="flex">
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                <BiSearch />
                <BsFilter />
              </button>
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <BiSort />
              </button>
            </div>
          </div>
          <div>
            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th></th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Products
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product conditions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product,i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td>
                      <Image
                        className="h-[50px] w-max"
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end w text-xs text-gray-500">
                      <div className="p-1 px-2 rounded-lg w-max text-end text-ubuntu-regular text-HeadingColours ">
                        {product.Products}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs `}
                    >
                      {product.ProductCondition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">collections</Link></p>
      </div>
    </Sellerlayout>
  );
};

export default Collection;
