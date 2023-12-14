"use client";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/app/assets/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";

const Collection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 2,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 3,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 4,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 5,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 6,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
  ]);

  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all');

  const changeValue = ( i: any, type: any ) => {
    setVal(i)
  }

  interface CheckboxState {
    [productId: string]: boolean;
  }

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});

  const handleCheckboxChange = (productId: string) => {
    setCheckboxes((prevCheckboxes) => {
      const isChecked = prevCheckboxes[productId] ?? false; // Default to false if undefined
      return {
        ...prevCheckboxes,
        [productId]: !isChecked,
      };
    });
  };

  const handleSelectAllChange = () => {
    const updatedCheckboxes: CheckboxState = {};

    products.map((product: any) => {
      const Id = product.id;
      updatedCheckboxes[Id] = !checkboxes[Id] ? !checkboxes[Id] : false;
    });

    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Collections</h1>
        <div className="flex justify-center gap-2 items-center">
          <button className="p-1 border-none bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white text-xs px-2 rounded-lg">
            Create collection
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              +
            </button>
          </div>
          <div className="flex">
            <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <BiSearch />
              <BsFilter />
            </button>
            <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
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
                  <input
                    type="checkbox"
                    className="rounded"
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
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
              {products?.map(( product: any, i: number ) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={checkboxes[product?.id] ?? false}
                      onChange={() => handleCheckboxChange(product?.id)}
                      id={product?.id}
                    />
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
                    <div className="p-1 px-2 rounded-lg w-max text-end">
                      {product.Products}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-xs`}
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
  );
};

export default Collection;
