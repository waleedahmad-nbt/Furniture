"use client";
import React, { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { TbFileReport } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { Smallchart, Table } from "../../components";
import { BiMenuAltRight } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { Radio } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface DataRow {
  id: string,
  orderNumber: string;
  orderFlags: boolean;
  date: string;
  customer: string;
  channel: string;
  total: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  items: number;
  deliveryStatus: string;
  deliveryMethod: string;
  tags: string[];
}

const dataRows: DataRow[] = [
  {
    id: "1",
    orderNumber: "12345",
    orderFlags: true,
    date: "2023-08-29",
    customer: "John Doe",
    channel: "Online",
    total: "$150.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
    items: 3,
    deliveryStatus: "In Transit",
    deliveryMethod: "Standard",
    tags: ["Urgent", "High Value"],
  },
  {
    id: "2",
    orderNumber: "67890",
    orderFlags: false,
    date: "2023-09-01",
    customer: "Jane Smith",
    channel: "Retail Store",
    total: "$75.50",
    paymentStatus: "Pending",
    fulfillmentStatus: "Processing",
    items: 2,
    deliveryStatus: "Not Shipped",
    deliveryMethod: "Express",
    tags: ["Priority"],
  },
];

const Orders = () => {
  const Router = useRouter();
  const [currentTab, setcurrentTab] = useState("All");
  const [cureentlocationtab, setCureentlocationtab] = useState("All locations");
  const [Locationbox, setLocationbox] = useState(false);
  const [Export, setExport] = useState(false);

  const handleorder = () => {
    Router.push("/dashboard-furniture/admin/orders/drafts/new");
  };

  const filter = (rows: any) => {
    if(currentTab==="All"){
      return rows;
    }
    else if(currentTab==="Unfulfilled"){
      return rows.filter((e:any, i:any) => {
        return e.fulfillmentStatus !== 'Processing'
      })
    }
    else if(currentTab==="Unpaid"){
      return rows.filter((e:any, i:any) => {
          return e.paymentStatus === 'Pending'
      })
    }
  };

  return (
    <>
      <div className="p-6 w-full">
        <div className="Orderbar w-full flex justify-between items-center mb-10">
          <div className="relative">
            <h1 className="text-xl font-bold text-gray-900 flex items-center">
              Orders:
              <span
                onClick={() => setLocationbox(!Locationbox)}
                className="px-2 py-1 cursor-pointer hover:bg-gray-200 hover:text-white duration-100 ml-1 rounded-lg flex items-center"
              >
                All locations &nbsp;
                <MdExpandMore />
              </span>{" "}
            </h1>
            <div
              className={`${
                !Locationbox ? "hidden" : "block"
              } absolute left-20 shadow-md border-[1px] w-72 z-[2] bg-white py-2 px-2 rounded-md`}
            >
              <ul className="text-sm space-y-2">
                <li
                  onClick={(e: any) =>
                    setCureentlocationtab(e.target.innerText)
                  }
                  className={`px-2 py-1 text-ubuntu-regular cursor-pointer rounded-md text-gray-900 ${
                    cureentlocationtab == "All locations" ? "bg-gray-200" : ""
                  }`}
                >
                  All locations
                </li>
                <li
                  onClick={(e: any) =>
                    setCureentlocationtab(e.target.innerText)
                  }
                  className={`px-2 py-1 text-ubuntu-regular cursor-pointer rounded-md text-gray-900 ${
                    cureentlocationtab == "73-C Cavalary ground Lahore"
                      ? "bg-gray-200"
                      : ""
                  }`}
                >
                  73-C Cavalary ground Lahore
                </li>
                <li
                  onClick={(e: any) =>
                    setCureentlocationtab(e.target.innerText)
                  }
                  className={`px-2 py-1 text-ubuntu-regular cursor-pointer rounded-md text-gray-900 ${
                    cureentlocationtab == "Miltary Accounts"
                      ? "bg-gray-200"
                      : ""
                  }`}
                >
                  Miltary Accounts
                </li>
              </ul>
            </div>
          </div>

          <div className=" space-x-3">
            <button
              onClick={() => setExport(true)}
              className="bg-gray-100/30 px-2 rounded-lg py-1 text-sm text-gray-900 opacity-90 hover:opacity-100 "
            >
              Export
            </button>
            <button
              onClick={handleorder}
              className="bg-gray-900/80 hover:bg-gray-900/100 duration-100 px-2 rounded-lg py-1 text-sm text-white shadow-sm"
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
            <div className="flex justify-between items-center text-lg bg-gray-200 text-gray-900 p-4 border-b-[1px] border-P_textColour">
              <h1 className="font-bold">Export orders</h1>
              <h1
                onClick={() => setExport(false)}
                className="font-medium cursor-pointer px-2 rounded-md hover:bg-gray-300"
              >
                x
              </h1>
            </div>
            <div className="py-6 px-2">
              <p className="text-sm">Export</p>
              <Radio name="type" label="Current page" className="rad" crossOrigin="anonymous"/>{" "}
              <br />
              <Radio name="type" label="All orders" className="rad" crossOrigin="anonymous"/> <br />
              <Radio
                name="order"
                label="Selected: 0 orders"
                disabled
                checked
                className="rad"
                crossOrigin="anonymous"
              />{" "}
              <br />
              <Radio
                name="order search"
                label="50+ orders matching your search"
                checked
                disabled
                className="rad"
                crossOrigin="anonymous"
              />{" "}
              <br />
              <Radio name="type" label="Orders by date" className="rad" crossOrigin="anonymous"/>
              <br />
            </div>
            <div className="py-0 px-2">
              <p className="text-sm">Export as</p>
              <Radio
                name="Exportas"
                label="CSV for Excel, Numbers, or other spreadsheet programs"
                className="rad"
                crossOrigin="anonymous"
              />{" "}
              <br />
              <Radio
                name="Exportas"
                label="Plain CSV fil"
                className="rad"
                crossOrigin="anonymous"
              />{" "}
              <br />
            </div>
          </div>
        </div>
        <div className="w-full rounded-xl bg-white flex shadow-md">
          <div className="w-[8%] cursor-pointer flex items-center justify-center p-6 border-r-[1px]">
            <TbFileReport className="text-xl" />
            &nbsp; <span className="text-sm">Today</span>
          </div>
          <div className="w-[17%] border-r-[1px] flex items-center justify-center px-6">
            <div>
              <p className="w-max font-light text-sm">orders</p>
              <p className="text-sm text-gray-900 font-bold flex">
                309
                <span className="text-xs px-1 text-Primary flex items-center text-green">
                  <FiArrowUpRight /> 55%{" "}
                </span>{" "}
              </p>
            </div>
            <div>
              <Smallchart />
            </div>
          </div>
          <div className="w-[17%] border-r-[1px] flex items-center justify-center px-6">
            <div>
              <p className="w-max font-light text-sm">Ordered items</p>
              <p className="text-sm text-gray-900 font-bold flex">
                1
                <span className="text-xs px-1 text-Primary flex items-center text-green">
                  <FiArrowUpRight /> 45%{" "}
                </span>{" "}
              </p>
            </div>
            <div>
              <Smallchart />
            </div>
          </div>
          <div className="w-[17%] border-r-[1px] flex items-center justify-center px-6">
            <div>
              <p className="w-max font-light text-sm">Returned items</p>
              <p className="text-sm text-gray-900 font-bold flex">
                1
                <span className="text-xs px-1 text-Primary flex items-center text-green">
                  <FiArrowUpRight /> 45%{" "}
                </span>{" "}
              </p>
            </div>
            <div>
              <Smallchart />
            </div>
          </div>
          <div className="w-[17%] border-r-[1px] flex items-center justify-center px-6">
            <div>
              <p className="w-max font-light text-sm">Fulfilled orders</p>
              <p className="text-sm text-gray-900 font-bold flex">
                6
                <span className="text-xs px-1 text-Primary flex items-center text-green">
                  <FiArrowUpRight /> 25%{" "}
                </span>{" "}
              </p>
            </div>
            <div>
              <Smallchart />
            </div>
          </div>
          <div className="w-[23%] flex items-center justify-center">
            <div>
              <p className="w-max font-light text-sm">Time to fulfill</p>
              <p className="text-sm text-gray-900 font-bold flex">
                1 day 10 hr
                <span className="text-xs px-1 text-Primary flex items-center text-green">
                  <FiArrowUpRight /> 25%{" "}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full rounded-t-xl bg-white flex justify-between items-center px-2 shadow-md mt-4 py-2">
          <ul className="flex space-x-4 text-xs text-ubuntu-regular px-4 ">
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer ${
                currentTab === "All" ? "bg-gray-blue/20" : ""
              }`}
            >
              All
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer ${
                currentTab === "Unfulfilled" ? "bg-gray-blue/20" : ""
              }`}
            >
              Unfulfilled
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer ${
                currentTab === "Unpaid" ? "bg-gray-blue/20" : ""
              }`}
            >
              Unpaid
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer ${
                currentTab === "Open" ? "bg-gray-blue/20" : ""
              }`}
            >
              Open
            </li>
            <li
              onClick={(e: any) => setcurrentTab(e.target.innerText)}
              className={`hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer ${
                currentTab === "Closed" ? "bg-gray-blue/20" : ""
              }`}
            >
              Closed
            </li>
            <li className="hover:bg-gray-blue/20 px-2 py-1 rounded-lg cursor-pointer">
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
        <Table data={filter(dataRows)}/>
      </div>
    </>
  );
};

export default Orders;
