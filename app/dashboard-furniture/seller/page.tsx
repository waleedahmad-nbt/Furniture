"use client";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrowUp } from "react-icons/bs";
import { FiArrowUpRight, FiUsers } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Wavechart from "../components/wavechart";
import { PieChart, Sellproductsgraph, Treemap } from "../components";
import userimg from "@/app/assets/images/admin/user-01.png";
import Image from "next/image";

const Admin = () => {
  const [checkTab, setchecktab] = useState(0);

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-10 md:grid-cols-2 grid-cols-1 ">
        <div className="bg-white border p-5">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#EFF2F7] rounded-full">
            <AiOutlineEye className="text-2xl text-[#00893E]" />
          </div>
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            $3.456K
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-ubuntu-regular text-P_textColour">
              Total views
            </p>
            <p className="text-sm text-ubuntu-regular text-[#00893E] flex items-center">
              0.43% <BsArrowUp />{" "}
            </p>
          </div>
        </div>
        <div className="bg-white border p-5">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#EFF2F7] rounded-full">
            <AiOutlineShoppingCart className="text-2xl text-[#00893E]" />
          </div>
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            $3.456K
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-ubuntu-regular text-P_textColour">
              Total views
            </p>
            <p className="text-sm text-ubuntu-regular text-[#00893E] flex items-center">
              0.43% <BsArrowUp />{" "}
            </p>
          </div>
        </div>
        <div className="bg-white border p-5">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#EFF2F7] rounded-full">
            <HiOutlineShoppingBag className="text-2xl text-[#00893E]" />
          </div>
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            3.456
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-ubuntu-regular text-P_textColour">
              Total views
            </p>
            <p className="text-sm text-ubuntu-regular text-[#00893E] flex items-center">
              0.43% <BsArrowUp />{" "}
            </p>
          </div>
        </div>
        <div className="bg-white border p-5">
          <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#EFF2F7] rounded-full">
            <FiUsers className="text-2xl text-[#00893E]" />
          </div>
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            3.456
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-sm text-ubuntu-regular text-P_textColour">
              Total views
            </p>
            <p className="text-sm text-ubuntu-regular text-[#00893E] flex items-center">
              0.43% <BsArrowUp />{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-3 xl:gap-10 xl:gap-y-0 gap-y-10 grid-cols-1  mt-10">
        <div className="bg-white border col-span-2 p-5">
          <div className="grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 gap-4 p-2">
            <div
              onClick={() => setchecktab(0)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 0 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">
                Sessions
                <hr className="h-[1px] border-dashed border-[1px]" />
              </p>
              <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                309
                <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                  <FiArrowUpRight /> 55%{" "}
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(1)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 1 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">
                Total Sales
                <hr className="h-[1px] border-dashed border-[1px]" />
              </p>
              <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                PKR5.76K
                <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                  <FiArrowUpRight /> 13%{" "}
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(2)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 2 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">
                Total Orders
                <hr className="h-[1px] border-dashed border-[1px]" />
              </p>
              <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                4
                <span className="text-xs px-1 flex items-center text-ubuntu-medium ">
                  ---
                </span>{" "}
              </p>
            </div>
            <div
              onClick={() => setchecktab(3)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 3 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">
                Conversation rate
                <hr className="h-[1px] border-dashed border-[1px]" />
              </p>
              <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                0.97%
                <span className="text-xs px-1 text-pricesAndDiscount flex items-center text-ubuntu-medium ">
                  <FiArrowUpRight className="rotate-90" /> 55%{" "}
                </span>{" "}
              </p>
            </div>
          </div>
          <Wavechart />
        </div>
        <div className="bg-white border p-5">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            Profit this week
          </h1>
          <Sellproductsgraph />
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-10 grid-cols-1  mt-10">
        <div className="bg-white border xl:col-span-1 p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
              Visitors Analytics
            </h1>
            <select
              name=""
              id=""
              className="border-none outline-none ring-0 focus:right-0"
            >
              <option value="Monthly" selected>
                Monthly
              </option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className="flex justify-center mt-10">
            <PieChart />
          </div>
        </div>
        <div className="bg-white border xl:col-span-2 p-5">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            Region labels
          </h1>
          <Treemap />
        </div>
      </div>

      <div className="grid xl:grid-cols-3 gap-10 grid-cols-1  mt-10">
        <div className="bg-white border xl:col-span-2 p-5">
        <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
        Top Channels
          </h1>
<div className="relative mt-10 overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Color
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">
                    White
                </td>
                <td className="px-6 py-4">
                    Laptop PC
                </td>
                <td className="px-6 py-4">
                    $1999
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
        <div className="bg-white border xl:col-span-1 p-5">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours mt-4">
            Chats
          </h1>
          <div className=" mt-10">

<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
<div className="flex mb-6 items-center space-x-4">
    <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
    <div className="font-medium dark:text-white">
        <div>Jese Leos</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
          </div>

        </div>
      </div>
    </div>
  );
};  

export default Admin;
