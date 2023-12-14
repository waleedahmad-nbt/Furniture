"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSearch, BiSort, BiTachometer } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";

const products: any = [
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "ab",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "ca",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },

  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
  {
    id: 1,
    name: "Customers who have purchased at least once",
    size: "aciquations",
    activity: "Created on Jul 12, 2023",
    Author: "Shopify",
  },
];

const Analyticesresports = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setData(
      products.filter((e: any, i: any) => {
        return e.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  }, [value]);

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl">
        Reports
      </h1>
      <div className="bg-white rounded-lg mt-6 shadow-sm px-2">
        <div className="flex w-full items-center py-2">
          <div className="w-full flex justify-center items-center gap-2">
            <div className="relative w-full">
              <input
                type="text"
                className="openSearch w-full text-sm text-ubuntu-regular border-none hover:bg-[#FAFAFA] rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                placeholder="Search customers"
                // onChange={handleValue}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 openSearch">
                <BiSearch className="openSearch" />
              </div>
            </div>
            <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
            <BiSort />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-ubuntu-light">
            <select
              name="Author"
              className="h-8 text-xs my-2 rounded-md bg-gray-100 cursor-pointer px-2"
            >
              <option value="0">Authors</option>
              <option value="Shopyify">Shopyify</option>
            </select>
            <select
              name="Catagory"
              className=" h-8 text-xs my-2 rounded-md bg-gray-100 cursor-pointer px-2"
            >
              <option value="0">Catagories</option>
              <option value="Acquisition">Acquisition</option>
              <option value="Behavior">Behavior</option>
              <option value="Finances">Finances</option>
              <option value="Fraud">Fraud</option>
              <option value="Inventory">Inventory</option>
              <option value="Marketing">Marketing</option>
              <option value="Orders">Orders</option>
            </select>
            <div className="p-1 border-dotted text-xs my-2 flex items-center rounded-md bg-gray-100 border-[1px] cursor-pointer px-2">
              <BiTachometer className="text-lg" />
              <span className="ml-1">Banchmarks available</span>
            </div>
          </div>
          <p className="text-P_textColour text-xs text-ubuntu-light">
            42 results
          </p>
        </div>
        <table className="table-hover min-w-full text-xs divide-y divide-gray-200">
          <thead className="bg-[#F7F7F7] sticky top-[54px]">
            <tr className="text-ubuntu-regular">
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
                Catagory
              </th>
              <th
                scope="col"
                className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Last Viewed
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
            {data &&
              data.map((product: any, i: any) => {
                const { name, size, activity, Author } = product;
                return (
                  <tr
                    key={i}
                    className="group hover:bg-gray-50"
                  >
                    <td className="max-w-[300px] px-6 py-2  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 h-full whitespace-nowrap text-xs">
                      <div className="p-1 w-[100px] h-full bg-gray-100 px-2 rounded-lg text-center">
                        {size}
                      </div>
                    </td>
                    <td className={`px-6 py-2 whitespace-nowrap text-xs`}>
                      {activity}
                    </td>
                    <td className="px-6 py-2 text-left whitespace-nowrap text-xs text-gray-500">
                      {Author}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analyticesresports;
