"use client";
import React, { useEffect, useState } from "react";

import Wavechart from "../components/wavechart";

import { FiArrowUpRight } from "react-icons/fi";
import { CiHardDrive } from "react-icons/ci";
import { TbMathGreater } from "react-icons/tb";

import axios from "axios";

const Admin = () => {
  const [checkTab, setchecktab] = useState(0);
  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>("Months");
  const [totals, setTotals] = useState<any>({});

  useEffect(() => {
    const data = async () => {

      let apiEndPoint = "";

      if(checkTab === 0) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/statistics`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/weeklystats`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/dailystats`;
        }
      } else if(checkTab === 2) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/statistics/orders`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/weekly-statistics/orders`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-statistics/orders`;
        }
      } else if(checkTab === 1) {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/sales/orders`;
  
        if(type === "Weeks") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/weekly-sales/orders`;
        } else if(type === "Days") {
          apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-sales/orders`;
        }
      }


      try {
        const res = await axios.get(apiEndPoint);

        if(res.status === 200) {
          setData(res.data.data);
        }
        
      } catch (error) {
        console.log(error)
      }
    }

    data();
  }, [type, checkTab])

  useEffect(() => {
    const totals = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/stats/all-totals`);

        if(res.status === 200) {
          setTotals(res.data.data);
        }

      } catch (error) {
        console.log(error);
      }
    }

    totals();
  }, [])

  function formatNumberToK(number: any) {
    if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(2);
      return `${formattedNumber}K`;
    }
    return number;
  }

  return (
    <div className="w-full">
      <div className="w-1/2 py-4 m-auto">
        <div className="w-full bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-3 gap-4 p-2">
            <div
              onClick={() => setchecktab(0)}
              className={`p-3 rounded-lg cursor-pointer ${
                checkTab == 0 ? "bg-[rgb(241,241,241)]" : ""
              }`}
            >
              <p className="w-max">Total Customers</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                {totals?.customerTotal}
                <span className="text-xs px-1 text-Primary flex items-center font-bold text-green">
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
              <p className="w-max">Total Sales</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                AED{formatNumberToK(totals?.salesTotal)}
                <span className="text-xs px-1 text-Primary flex items-center font-bold text-green">
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
              <p className="w-max">Total Orders</p>
              <hr className="h-[1px] border-dashed border-[1px]" />
              <p className="text-2xl text-gray-900 font-bold flex">
                {totals?.orderTotal}
                <span className="text-xs px-1 flex items-center font-bold text-green">
                  ---
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="px-3">
            <div className="flex justify-end mb-3">
              <select onChange={(e: any) => setType(e.target.value)} value={type} className="px-1 py-1 rounded-md bg-gray-900 text-white flex gap-3 items-center text-xs">
                <option value="Months">Monthly</option>
                <option value="Weeks">Weekly</option>
                <option value="Days">Daily</option>
              </select>
            </div>
            <Wavechart data={data} checkTab={checkTab}/>
          </div>
        </div>
        <div className="w-full mt-5 p-2 bg-white rounded-lg shadow-md">
          <div className="py-3 px-2 flex items-center justify-between cursor-pointer">
            <p className="font-bold text-base flex items-center">
              <CiHardDrive />
              &nbsp;&nbsp; {totals?.orderTotal} Orders &nbsp;
              <span className="font-normal text-sm">to fulfill</span>
            </p>
            <TbMathGreater className="text-sm text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
