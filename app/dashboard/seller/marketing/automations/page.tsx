'use client'
import React, { Fragment } from "react";
import Sellerlayout from "../../../layouts/SellerDashboard";
import { BsFilter, BsThreeDots } from "react-icons/bs";

import Image from "next/image"; 

import slider1 from '@/app/assets/images/Marketing/7926d9cf-8703-4673-863f-efca26447dec.webp'
import { Menu, Transition } from '@headlessui/react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSearch, BiSort } from "react-icons/bi";
import Link from "next/link";

const activities:any = [
  {
    id: 1,
    activityHead: "Abandoned product browse",
    status: "Active",
    reach: 4,
    sessions: 0,
    orders: 0,
    conversionRate: '0%',
    sales: "0.00"
  },
  {
    id: 1,
    activityHead: "Abandoned product browse",
    status: "Active",
    reach: 4,
    sessions: 0,
    orders: 0,
    conversionRate: '0%',
    sales: "0.00"
  },
  {
    id: 1,
    activityHead: "Abandoned product browse",
    status: "Active",
    reach: 4,
    sessions: 0,
    orders: 0,
    conversionRate: '0%',
    sales: "0.00"
  },
  
]
const Automations = () => {


  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Sellerlayout>
      <div className=" py-6 w-3/5 m-auto">
        <div className="Orderbar w-full flex justify-between items-center mb-7">
          <div className="relative">
            <h1 className="text-xl text-HeadingColours text-ubuntu-bold flex items-center">
            Automations
            </h1>
          </div>

          <div className=" space-x-3">
            <button className="bg-HeadingColours px-2 rounded-lg py-1 text-sm text-white opacity-90 hover:opacity-100 ">
              Create automations
            </button>
          </div>
        </div>
 


        <div className="w-full mb-5 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Reach
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              16
              <span className="text-xs px-1 text-P_textColour flex items-center text-ubuntu-medium ">
                  ↑300%{" "}
              </span>{" "}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
            Sessions
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              0
              <span className="text-xs px-1 text-P_textColour flex items-center text-ubuntu-medium ">
              ↓100%{" "}
              </span>{" "}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
            Orders
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              0
              <span className="text-xs px-1 text-P_textColour flex items-center text-ubuntu-medium ">
                  —{" "}
              </span>{" "}
            </p>
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
            Sales
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
            Rs0.00
              <span className="text-xs px-1 text-P_textColour flex items-center text-ubuntu-medium ">
                  —{" "}
              </span>{" "}
            </p>
          </div>
        </div>



        <div className="py-2 pb-6 px-4 mb-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
          <div className="flex justify-between border-b py-5">
            <p className="text-sm">Automations</p>
          </div>
          <div className="flex justify-between items-center p-2  border-b py-3">
            <div className="flex justify-center items-center gap-2">
              <button className={`rounded-lg text-sm p-1 px-2 text-HeadingColours bg-[#EFEFEF] hover:bg-[#f3f3f3]`}>
                All automations
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

            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className=" sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-left text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Automation
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Reach
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Sessions
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Conversion rate
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((product:any,i:any) => (
                  <tr key={i} className="">
                    <td className="pr-3 flex items-center py-3 whitespace-nowrap text-left w text-xs">
                        <span className="m-1 text-ubuntu-bold p-0">{product.activityHead}</span> <br />
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.status}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.reach}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.sessions}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.orders}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.conversionRate}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      Rs {product.sales}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      <Menu as="div" className="relative z-30 inline-block text-left">
      <div>
        <Menu.Button className=" text-lg text-ubuntu-bold inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-2 py-1 font-semibold text-gray-900   hover:bg-[#E3E3E3]">
          <BsThreeDots />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }:any) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit workflow
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }:any) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Turn off automation
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }:any) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete automation
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
            View all installed marketing app activities
            </span>

        </div>


        <div className="mb-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">

          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider1} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Automate your marketing</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Send customers the right message at the right time—automatically. Watch this video to learn how marketing automations deliver targeted messaging while saving you time. Then get started with pre-built automations templates.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore automation templates
                      </button>
                    </div>
            </div>
          </div>
               


        </div>

        <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">automations</Link></p>



      </div>
    </Sellerlayout>
  );
};

export default Automations;
