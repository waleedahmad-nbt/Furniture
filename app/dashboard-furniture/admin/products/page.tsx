"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "@/app/assets/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { publicRequest } from "@/requestMethods";

const Products = () => {

  const [val, setVal] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');
  const [data, setData] = useState<any>([]);

  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/product`);
  
        console.log(res);
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, [])  

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  const filter = (rows: any) => {
    if(category==="all"){
      return rows;
    }
    else if(category==="Active"){
      return rows.filter((e:any, i:any) => {
        return e.status === 'Active'
      })
    }
    else if(category==="Draft"){
      return rows.filter((e:any, i:any) => {
        return e.status === 'Draft'
      })
    }
  };

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

    data.map((product: any) => {
      const Id = product?._id;
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
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
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
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data && filter(data)?.map((product: any, i: number) => {
                const { _id, Images, title, status, qty, inStock, category, price, type, vender} = product;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" checked={checkboxes[_id] ?? false} onChange={() => handleCheckboxChange(_id)} id={_id} />
                    </td>
                    <td className="px-6">
                      <Image
                        className="h-[50px] w-max"
                        src={Images[0]}
                        width={100}
                        height={50}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {title}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular ${status === "Active" ? "bg-[#CDFEE1] text-[#083D25]" : "bg-[#E0F0FF] text-[#0E57A2]"}`}>
                        {status}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs ${
                        qty <= 5 ? "text-red-700" : "text-gray-500"
                      }`}
                    >
                      {qty} in stock
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      PKR {price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      No Action
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
