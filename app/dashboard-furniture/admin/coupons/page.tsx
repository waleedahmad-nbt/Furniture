"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { publicRequest } from "@/requestMethods";
import { FiTrash } from "react-icons/fi";

const Coupons = () => {

  const fields = [
    {
      couponCode: "kjadsfg09",
      description: "this is a test coupon",
      discountType: "Fixed cart discount",
      amount: "12",
      expdate: "10-29-2023",
      usageLimit: "5",
      perUserLimit: "1",
      minSpend: "1000",
      maxSpend: "90000",
    },
  ]

  const [val, setVal] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');
  const [data, setData] = useState<any>(fields);
  const [updating, setUpdating] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<any>('');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  const filter = (rows: any) => {
    let result = rows;
    if(category==="all"){
      result = rows;
    }
    else if(category==="Active"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Active'
      })
    }
    else if(category==="Draft"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Draft'
      })
    }

    if(sortOrder) {
      result = sortByColumn(result);
    }

    return result.filter((row: any) =>
      ['couponCode'].some((col) =>
        row[col]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['couponCode']?.toString().toLowerCase();
      const valueB = b['couponCode']?.toString().toLowerCase();

      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  };

  const deleteProduct = async (_id: string) => {
    setUpdating(_id);
    try {
      const res = await publicRequest.delete(`/product/delete/${_id}`);

      if(res.status === 200) {
        setData((prev: any) => prev.filter((item: any) => item?._id !== _id));
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coupons</h1>
        <div className="flex justify-center gap-2 items-center">
          <Link href={'/dashboard-furniture/admin/coupons/new'}>
            <button className="p-1 bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white border border-none text-xs px-2 rounded-lg">
              Add Coupon
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
            <div className="flex h-max items-center shadow-sm border bg-white hover:shadow-none rounded-md">
              <div className={`overflow-hidden duration-200 h-[14px] py-1 ${showSearch ? "w-max" : "w-[0px]"}`}>
                <input
                  type="text"
                  id="filter"
                  value={searchVal}
                  onChange={(e: any) => setSearchVal(e.target.value)}
                  className={`duration-150 pr-3 mx-2 text-xs rounded-md outline-none`}
                />
              </div>
              <label htmlFor="filter" onClick={() => setShowSearch(!showSearch)}>
                <div className="rounded-lg text-sm px-1 py-1 flex items-center">
                  <BiSearch />
                  <BsFilter />
                </div>
              </label>
            </div>
            <button onClick={toggleSortOrder} className="rounded-lg text-sm py-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
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
                  Coupon Code
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Discount Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Limit per Coupon
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Limit per User
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Minmium Spend
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Maximum Spend
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Expiry
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
                const { _id, description, couponCode, discountType, amount, expdate, usageLimit, perUserLimit, minSpend, maxSpend } = product;
                return (
                  <tr key={i}>
                    <td className="px-6">
                      {couponCode}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {description}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {discountType}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {usageLimit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {perUserLimit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {amount}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {minSpend}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {maxSpend}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {expdate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 text-base items-center">
                        <button
                          onClick={() => deleteProduct(_id)}
                          className="text-gray-300 hover:text-gray-900 duration-150 relative"
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {updating === _id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                          </div>
                          <span className={updating === _id ? "opacity-0" : ""}><FiTrash /></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Coupons
