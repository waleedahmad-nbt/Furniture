"use client";
import React, { useEffect, useState } from "react";
import Sellerlayout from "../../layouts/SellerDashboard";
import Image from "next/image";
import image from "../../../assests/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";

// Status	Method	Type	Combinations	

// Used
const products:any = [
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
  {
    id: 1,
    image: image,
    Title1: "MHBFVH9WPHDD",
    Title2: "Rs4,620.00 off Handicrafts • Applies once per order • One use per customer",
    status: "Expired",
    method: 'Code',
    type1: "Amount off products",
    type2: "Product discount",
    combinations: 'Order discounts',
    used: 0,
  },
]
const Discounts = () => {

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
    else if(category==="Expired"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Expired'
        })
      )
    }
  },[category])

  console.log(data);
  

  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Discounts</h1>
          <div className="flex justify-center gap-2 items-center">
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded text-ubuntu-regular">
              Export
            </button>
            <Link href={'/dashboard/seller/products/new'}>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Create discount
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                All
              </button>
              <button onClick={() => changeValue(1, 'Active')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===1 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                Active
              </button>
              <button onClick={() => changeValue(2, 'Scheduled')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===2 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Scheduled
              </button>
              <button onClick={() => changeValue(3, 'Expired')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===3 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Expired
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
                  <input type="checkbox" className="rounded mr-3" />
                    Title
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
                    Method
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
                    Combinations
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Used
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.map((product, i) => {
                  const {Title1, Title2, status, method, type1, type2, combinations, used} = product
                  return(
                  <tr key={i}>
                    <td className="px-6 py-3 flex items-center gap-2 text-xs">
                      <input type="checkbox" className="rounded" />
                      <div>
                        <h1 className="text-ubuntu-bold mb-2 text-HeadingColours">{Title1}</h1>
                        <p className="text-P_textColour">{Title2}</p>
                      </div>
                    </td>
                    {/* <td className="max-w-[300px] px-6 py-3  text-xs font-medium text-gray-900">
                    </td> */}
                    <td className="px-6 py-3 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular ${status === "Expired" ? "bg-[#EFEFEF] text-[#7C6361]" : "bg-[#E0F0FF] text-[#0E57A2]"}`}>
                        {status}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-3 whitespace-nowrap text-xs`}
                    >
                      {method}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap text-xs text-gray-500">
                      <h1 className="text-ubuntu-bold mb-2 ">{type1}</h1>
                        <p className="text-P_textColour">{type2}</p>
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap text-xs text-gray-500">
                      {combinations}
                    </td>
                    <td className="px-6 py-3 text-left whitespace-nowrap text-xs text-gray-500">
                      {used}
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Sellerlayout>
  );
};

export default Discounts;
