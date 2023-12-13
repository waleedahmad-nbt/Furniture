"use client";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const products:any = [
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "65%",
    activity: "Created on Jul 12, 2023",
    Author: 'Shopify',
  },
  {
    id: 1,
    name: "ab",
    size: "65%",
    activity: "Created on Jul 12, 2023",
    Author: 'Shopify',
  },
  {
    id: 1,
    name: "ca",
    size: "65%",
    activity: "Created on Jul 12, 2023",
    Author: 'Shopify',
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "65%",
    activity: "Created on Jul 12, 2023",
    Author: 'Shopify',
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "65%",
    activity: "Created on Jul 12, 2023",
    Author: 'Shopify',
  },
]



const Segment = () => {

const [data, setData] = useState([])
const [value, setValue] = useState('')


    useEffect(() => {
        setData(
            products.filter((e:any,i:any) => {
                return e.name.toLowerCase().includes(value.toLowerCase())
            })
        )
    },[value])


    const handleValue = (e:any) => {
        setValue(e.target.value)
    }


  return (
    <>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Segments</h1>
          <div className="flex justify-center gap-2 items-center">
            <Link href={'/dashboard/seller/products/new'}>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Create segment
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-white border rounded-lg">
          <div className="flex w-full items-center p-2">
            <div className="w-full flex justify-center items-center gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  className="openSearch w-full text-sm text-ubuntu-regular border-none hover:bg-[#FAFAFA] rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                  placeholder="Search segments"
                  onChange={handleValue}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 openSearch">
                  <BiSearch className="openSearch" />
                </div>
              </div>
            </div>
          </div>
          <table className="table-hover min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Segment name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                   	Segment size %
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last activity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Author
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.map((product:any, i:any) => {
                  const {name, size, activity, Author} = product
                  return(
                  <tr key={i} className="group">
                    <td className="max-w-[300px] px-6 py-2  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 h-full whitespace-nowrap text-xs">
                      <div className={`p-1 w-[100px] h-full text-right bg-[#7cade6] px-2 text-ubuntu-regular `}>
                        {size}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-2 whitespace-nowrap text-xs `}
                    >
                      {activity}
                    </td>
                    <td className="px-6 py-2 text-left whitespace-nowrap text-xs text-gray-500">
                      {Author}
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
          <div>
            
          </div>
        </div>
        <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">segments</Link></p>

      </div>
    </>
  );
};

export default Segment;
