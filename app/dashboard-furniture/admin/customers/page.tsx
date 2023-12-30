"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { BiSearch } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { TbArrowsSort } from "react-icons/tb";

const Customers = () => {

  const [data, setData] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [updating, setUpdating] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<any>('');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };
  
  useEffect(() => {
    
    const getCustomers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/all-customers`);

        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getCustomers();
  },[])

  const filter = (rows: any) => {
    let result = rows;

    if(sortOrder) {
      result = sortByColumn(result);
    }

    return result.filter((e: any) => {
      return e.firstName.toLowerCase().includes(value.toLowerCase())
    })
  }

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['firstName']?.toString().toLowerCase();
      const valueB = b["firstName"]?.toString().toLowerCase();

      if (sortOrder === 'asc') {
        return valueA?.localeCompare(valueB);
      } else {
        return valueB?.localeCompare(valueA);
      }
    });
  };
  
  const handleValue = (e:any) => {
    setValue(e.target.value)
  }

  const toggleAccount = async (customer: any) => {
    const { isActive, _id } = customer;
    setUpdating(_id);

    let apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/${isActive ? "disable" : "activate"}/${_id}`;

    try {
      const res = await axios.put(apiEndpoint);

      if(res.status === 200) {
        setData((prev: any) => prev.map((item: any) => {
          if(item?._id === _id) {
            return res.data.data;
          } else {
            return item;
          }
        }));
      }
    } catch (error) {
      console.error(error);
    }

    setUpdating("");
  }
  
  return (
    <>
      <div className="px-5">
        <div className="py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-600">Customers</h1>
          <div className="flex justify-center gap-2 items-center">
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded">
              Export
            </button>
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded">
              Import
            </button>
            <Link href={'/dashboard-furniture/admin/products/new'}>
            <button className="p-1 bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white text-xs px-2 rounded-lg">
              Add customer
            </button>
            </Link>
          </div>
        </div>

        <div className="bg-[#F7F7F7] border shadow mb-5 rounded-lg">
          <div className="flex justify-between items-center p-3 text-sm">
            <div className="flex justify-center items-center gap-2">
              <p><span className="text-black">{data?.length}</span> customers</p>
              <span className="mx-2">|</span>
              <p><span className="text-black">100%</span> of your customer base</p>
            </div>
            <div className="flex">
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center bg-transparent hover:bg-[#D4D4D4]">
                Add filter
                <FaAngleDown className="ml-2" />
              </button>
            </div>
          </div>
          <div>
            
          </div>
        </div>

        <div className="bg-white border rounded-lg">
          <div className="flex w-full items-center p-2">
            <div className="w-full flex justify-center items-center gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  className="openSearch w-full text-sm text-ubuntu-regular border-none hover:bg-[#FAFAFA] rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                  placeholder="Search customers"
                  onChange={handleValue}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 openSearch">
                  <BiSearch className="openSearch" />
                </div>
              </div>
              <button
                onClick={toggleSortOrder}
                className="rounded-lg text-lg p-1 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none"
              >
                <TbArrowsSort />
              </button>
            </div>
          </div>
          <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[53px] border-t border-b">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Customer name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Email subscription
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Amount spent
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {data && filter(data).map((customer: any, i: any) => {
                  const { _id, firstName, lastName, email, phoneNumber, orders, amountSpend, isActive} = customer;
                  return(
                  <tr key={i} className="group">
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs capitalize">
                      {firstName + " " + lastName}
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs">
                      {email}
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs">
                      {phoneNumber}
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs">
                      {orders} orders
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs">
                      AED {amountSpend}
                    </td>
                    <td className="px-6 py-1.5 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 items-center">
                        <button
                          onClick={() => toggleAccount(customer)}
                          className={`px-2 text-white py-1 rounded-md relative ${isActive ? "bg-secondary/90 hover:bg-secondary/100" : "bg-green/90 hover:bg-green/100"}`}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {updating === _id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                          </div>
                          <span className={updating === _id ? "opacity-0" : ""}>{isActive ? "Disable" : "Activate"}</span>
                        </button>
                        <Link href={`/dashboard-furniture/admin/customers/orders/${_id}`} className="px-2 text-white py-1 rounded-md relative bg_admin hover:bg-gray-900">
                          View Orders
                        </Link>
                      </div>
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
            <div className="w-max p-5 m-auto">
              <button className="p-1 rounded-tl-lg rounded-bl-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleLeftSolid /></button>
              <button className="p-1 rounded-tr-lg rounded-br-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleRightSolid /></button>
            </div>
            <div>
          </div>
        </div>

        <p className="text-center py-3 mt-4 font-medium text-gray-600">
          Learn more about{" "}
          <Link href="#" className="text-blue-600 underline">
            Customers
          </Link>
        </p>
      </div>
    </>
  );
};

export default Customers;
