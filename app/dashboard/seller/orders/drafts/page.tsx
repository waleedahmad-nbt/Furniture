"use client";
import Sellerlayout from "@/app/dashboard/layouts/SellerDashboard";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Radio } from "@material-tailwind/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Draftstable } from "@/app/dashboard/components";

const Drafts = () => {
  const Router = useRouter();
  const [Export, setExport] = useState(false);
  const [currentTab, setcurrentTab] = useState("All");

  const handleorder = () => {
    Router.push("/dashboard/seller/orders/drafts/new");
  };

  return (
    <Sellerlayout>
      <div className="p-6">
        <div className="Orderbar w-full flex justify-between items-center mb-10">
          <div className="relative">
            <h1 className="text-xl text-HeadingColours text-ubuntu-bold flex items-center">
              Drafts
            </h1>
          </div>

          <div className=" space-x-3">
            <button
              onClick={() => setExport(true)}
              className="bg-gray-200 px-2 rounded-lg py-1 text-sm text-HeadingColours opacity-90 hover:opacity-100 "
            >
              Export
            </button>
            <button
              onClick={handleorder}
              className="bg-HeadingColours px-2 rounded-lg py-1 text-sm text-white opacity-90 hover:opacity-100 shadow-sm"
            >
              Create order
            </button>
          </div>
        </div>
        <div
          className={`absolute h-screen flex justify-center items-center w-full left-0 z-[10] bg-[#00000067] ${
            !Export ? "-top-[100vh]" : "-top-1"
          }`}
        >
          <div className="w-1/3 rounded-2xl bg-white overflow-hidden">
            <div className="flex justify-between items-center text-lg bg-gray-200 text-HeadingColours p-4 border-b-[1px] border-P_textColour">
              <h1 className="text-ubuntu-bold ">Export orders</h1>
              <h1
                onClick={() => setExport(false)}
                className="text-ubuntu-medium cursor-pointer px-2 rounded-md hover:bg-gray-300"
              >
                x
              </h1>
            </div>
            <div className="py-6 px-2">
              <p className="text-ubuntu-regular text-sm ">Export</p>
              <Radio name="type" label="Current page" className="rad" /> <br />
              <Radio name="type" label="All orders" className="rad" /> <br />
              <Radio
                name="order"
                label="Selected: 0 orders"
                disabled
                checked
                className="rad"
              />{" "}
              <br />
              <Radio
                name="order search"
                label="50+ orders matching your search"
                checked
                disabled
                className="rad"
              />{" "}
              <br />
              <Radio name="type" label="Orders by date" className="rad" />
              <br />
            </div>
            <div className="py-0 px-2">
              <p className="text-ubuntu-regular text-sm ">Export as</p>
              <Radio
                name="Exportas"
                label="CSV for Excel, Numbers, or other spreadsheet programs"
                className="rad"
              />{" "}
              <br />
              <Radio
                name="Exportas"
                label="Plain CSV fil"
                className="rad"
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="w-full rounded-t-xl bg-white flex justify-between items-center px-2 shadow-md mt-4 py-2">
          <ul className="flex space-x-4 text-xs text-ubuntu-regular px-4 ">
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours ${
                currentTab === "All" ? "bg-gray-200" : ""
              }`}
            >
              All
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours ${
                currentTab === "Open and invoice sent" ? "bg-gray-200" : ""
              }`}
            >
              Open and invoice sent
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours ${
                currentTab === "Open" ? "bg-gray-200" : ""
              }`}
            >
              Open
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours ${
                currentTab === "Invoice sent" ? "bg-gray-200" : ""
              }`}
            >
              Invoice sent
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours ${
                currentTab === "Completed" ? "bg-gray-200" : ""
              }`}
            >
              Completed
            </li>
            <li className="hover:bg-gray-200 px-2 py-1 rounded-lg cursor-pointer text-HeadingColours">
              +
            </li>
          </ul>
          <div className="flex space-x-3">
            <div className="flex items-center justify-center shadow-md py-1 px-2 border-[1px] space-x-2 rounded-md cursor-pointer">
              <AiOutlineSearch className="text-lg" />
              <BiMenuAltRight className="text-lg" />
            </div>
            <div className="flex items-center justify-center shadow-md py-1 px-2 border-[1px] rounded-md cursor-pointer">
              <BsArrowUp className="text-lg" />
              <BsArrowDown className="text-lg -ml-[10px]" />
            </div>
          </div>
        </div>
        <Draftstable />
      </div>
    </Sellerlayout>
  );
};

export default Drafts;
