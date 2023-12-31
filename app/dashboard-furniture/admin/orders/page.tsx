"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { MdExpandMore } from "react-icons/md";
import { TbArrowsSort, TbFileReport } from "react-icons/tb";
import { FiArrowDownLeft, FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { Table } from "../../components";
import { BiSearch } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

const Orders = () => {
  const [currentTab, setcurrentTab] = useState("all");
  const [cureentlocationtab, setCureentlocationtab] = useState("All locations");
  const [Locationbox, setLocationbox] = useState(false);
  const [orders, setOrders] = useState<any>([]);

  const [stats, setStats] = useState<any>({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order`);
  
        if(res.status === 200) {
          setOrders(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    const OrderStats = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/all-todays-stats/orders`);

        if(res.status === 200) {
          setStats(res.data.data);
        }
      } catch (error) {
        console.log(error)
      }
    }

    getProducts();
    OrderStats();
  }, [])

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<any>('');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filter = (rows: any) => {
    let result = rows;
    if(currentTab==="all"){
      result = rows;
    }
    else if(currentTab==="Active"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Active'
      })
    }
    else if(currentTab==="Draft"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Draft'
      })
    }

    if(sortOrder) {
      result = sortByColumn(result);
    }

    return result.filter((row: any) =>
      ['contactInfo'].some((col) =>
        row[col]["firstName"]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['contactInfo']["firstName"]?.toString().toLowerCase();
      const valueB = b['contactInfo']["firstName"]?.toString().toLowerCase();

      if (sortOrder === 'asc') {
        return valueA?.localeCompare(valueB);
      } else {
        return valueB?.localeCompare(valueA);
      }
    });
  };

  const replaceMinus = (value: number) => {
    return Math.abs(value)?.toFixed();
  }

  return (
    <div className="px-5 w-full">
      <div className="Orderbar w-full flex justify-between items-center py-6">
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
          <button className="py-1.5 px-3 text-xs font-bold rounded-lg bg-gray-100/30 text-gray-600">
            Export
          </button>
          <Link
            href="/dashboard-furniture/admin/orders/drafts/new"
            className="py-1.5 px-3 text-xs font-bold rounded-lg bg_admin hover:bg-gray-900 text-white"
          >
            Create order
          </Link>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white flex shadow-md mb-6">
        <div className="flex items-center justify-center py-6 px-10 border-r shrink-0">
          <TbFileReport className="text-xl" />
          &nbsp; <span className="text-sm">Today</span>
        </div>
        <div className="grid grid-cols-5 grow">
          <div className="border-r flex items-center justify-center px-3">
            <div>
              <p className="text-gray-900">Orders</p>
              <p className="text-sm text-gray-900 font-bold flex items-end">
                <span className="text-lg leading-6">
                  {stats?.today?.totalOrders || 0}
                </span>
                {stats?.percentageChanges?.totalOrders < 0 ? (
                  <span className="text-xs px-1 text-Primary flex items-center text-secondary">
                    <FiArrowDownRight />
                    {replaceMinus(stats?.percentageChanges?.totalOrders)}%
                  </span>
                ) : (
                  <span className="text-xs px-1 text-Primary flex items-center text-green">
                    <FiArrowUpRight />
                    {stats?.percentageChanges?.totalOrders}%
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="border-r flex items-center justify-center px-3">
            <div>
              <p className="text-gray-900">Processing Orders</p>
              <p className="text-sm text-gray-900 font-bold flex items-end">
                <span className="text-lg leading-6">
                  {stats?.today?.totalProcessingOrders || 0}
                </span>
                {stats?.percentageChanges?.totalProcessingOrders < 0 ? (
                  <span className="text-xs px-1 text-Primary flex items-center text-secondary">
                    <FiArrowDownRight />
                    {replaceMinus(stats?.percentageChanges?.totalProcessingOrders)}%
                  </span>
                ) : (
                  <span className="text-xs px-1 text-Primary flex items-center text-green">
                    <FiArrowUpRight />
                    {stats?.percentageChanges?.totalProcessingOrders}%
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="border-r flex items-center justify-center px-3">
            <div>
              <p className="text-gray-900">Delivered Orders</p>
              <p className="text-sm text-gray-900 font-bold flex items-end">
                <span className="text-lg leading-6">
                  {stats?.today?.totalDeliveredOrders || 0}
                </span>
                {stats?.percentageChanges?.totalDeliveredOrders < 0 ? (
                  <span className="text-xs px-1 text-Primary flex items-center text-secondary">
                    <FiArrowDownRight />
                    {replaceMinus(stats?.percentageChanges?.totalDeliveredOrders)}%
                  </span>
                ) : (
                  <span className="text-xs px-1 text-Primary flex items-center text-green">
                    <FiArrowUpRight />
                    {stats?.percentageChanges?.totalDeliveredOrders}%
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="border-r flex items-center justify-center px-3">
            <div>
              <p className="text-gray-900">Completed Orders</p>
              <p className="text-sm text-gray-900 font-bold flex items-end">
                <span className="text-lg leading-6">
                  {stats?.today?.totalCompletedOrders || 0}
                </span>
                {stats?.percentageChanges?.totalCompletedOrders < 0 ? (
                  <span className="text-xs px-1 text-Primary flex items-center text-secondary">
                    <FiArrowDownRight />
                    {replaceMinus(stats?.percentageChanges?.totalCompletedOrders)}%
                  </span>
                ) : (
                  <span className="text-xs px-1 text-Primary flex items-center text-green">
                    <FiArrowUpRight />
                    {stats?.percentageChanges?.totalCompletedOrders}%
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center px-3">
            <div>
              <p className="text-gray-900">Orders Items</p>
              <p className="text-sm text-gray-900 font-bold flex items-end">
                <span className="text-lg leading-6">
                  {stats?.today?.totalItems || 0}
                </span>
                {stats?.percentageChanges?.totalItems < 0 ? (
                  <span className="text-xs px-1 text-Primary flex items-center text-secondary">
                    <FiArrowDownRight />
                    {replaceMinus(stats?.percentageChanges?.totalItems)}%
                  </span>
                ) : (
                  <span className="text-xs px-1 text-Primary flex items-center text-green">
                    <FiArrowUpRight />
                    {stats?.percentageChanges?.totalItems}%
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-600 rounded-xl border">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => setcurrentTab('all')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${currentTab === "all" ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => setcurrentTab('all')} className={`rounded-lg text-base font-bold py-1.5 px-2 ${currentTab === "+" ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              <IoIosAdd />
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
                  className={`duration-150 pr-3 pl-1 mx-2 text-xs rounded-md outline-none`}
                />
              </div>
              <label htmlFor="filter" onClick={() => setShowSearch(!showSearch)}>
                <div className="rounded-lg text-lg px-1 py-1 flex items-center">
                  <BiSearch />
                  <BsFilter />
                </div>
              </label>
            </div>
            <button onClick={toggleSortOrder} className="rounded-lg text-lg p-1 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <TbArrowsSort />
            </button>
          </div>
        </div>
        <Table data={filter(orders)} setOrders={setOrders}/>
      </div>
    </div>
  );
};

export default Orders;
