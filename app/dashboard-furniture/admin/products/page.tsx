"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "@/app/assets/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";

const products: any = [
  {
    id: 1,
    image: image,
    name: "This is first test product.",
    status: "Active",
    stock: 10,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 2,
    image: image,
    name: "This is second test product.",
    status: "Active",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 3,
    image: image,
    name: "Product B",
    status: "Draft",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 4,
    image: image,
    name: "Product B",
    status: "Draft",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 5,
    image: image,
    name: "Product B",
    status: "Draft",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 6,
    image: image,
    name: "Product B",
    status: "Active",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 7,
    image: image,
    name: "Product B",
    status: "Active",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
  {
    id: 8,
    image: image,
    name: "Product B",
    status: "Draft",
    stock: 5,
    sales: 2,
    market: 2,
    type: "",
    vender: "Qshopin",
  },
]
const Products = () => {

  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all')
  const [data, setData] = useState([])

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  useEffect(() => {
    setData([])
    if(category==="all"){
      setData(products)
    }
    else if(category==="Active"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Active'
        })
      )
    }
    else if(category==="Draft"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Draft'
        })
      )
    }
  },[category])

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
        <h1 className="text-xl font-bold">Products</h1>
        <div className="flex justify-center gap-2 items-center">
          <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded duration-100">
            Export
          </button>
          <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded duration-100">
            Import
          </button>
          <Link href={'/dashboard-furniture/admin/products/new'}>
            <button className="p-1 bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white border border-none text-xs px-2 rounded-lg">
              Add Product
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(1, 'Active')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===1 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Active
            </button>
            <button onClick={() => changeValue(2, 'Draft')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===2 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Draft
            </button>
            <button onClick={() => changeValue(3, 'archived')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===3 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Archived
            </button>
            <button onClick={() => changeValue(4, 'all')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
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
                  <input type="checkbox" className="rounded" onChange={() => handleSelectAllChange()} />
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Inventory
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Products
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Sales channels
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Markets
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Vendor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data && data?.map((product: any, i: number) => {
                const { id, image, name, status, stock, sales, market, type, vender} = product;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" checked={checkboxes[id] ?? false} onChange={() => handleCheckboxChange(id)} id={id} />
                    </td>
                    <td className="px-6">
                      <Image
                        className="h-[50px] w-max"
                        src={image}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular ${status === "Active" ? "bg-[#CDFEE1] text-[#083D25]" : "bg-[#E0F0FF] text-[#0E57A2]"}`}>
                        {status}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs ${
                        stock <= 5 ? "text-red-700" : "text-gray-500"
                      }`}
                    >
                      {stock} in stock
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs text-gray-500">
                      {sales}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs text-gray-500">
                      {market}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs text-gray-500">
                      {type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {vender}
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
