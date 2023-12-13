'use client'
import React, { Fragment } from "react";
import Sellerlayout from "../../layouts/SellerDashboard";
import { BsFillCalendarFill, BsThreeDots } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { Marketgraph } from "../../components";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Image from "next/image"; 
import icon1 from '@/app/assets/images/Marketing/icon1.svg'
import icon2 from '@/app/assets/images/Marketing/icon2.svg'
import icon3 from '@/app/assets/images/Marketing/icon3.svg'
import icon4 from '@/app/assets/images/Marketing/icon4.svg'
import icon5 from '@/app/assets/images/Marketing/icon5.svg'

import applogo1 from '@/app/assets/images/Marketing/appLogo1.webp'
import applogo2 from '@/app/assets/images/Marketing/applogo2.webp'
import applogo3 from '@/app/assets/images/Marketing/appLogo1.webp'
import applogo4 from '@/app/assets/images/Marketing/applogo4.webp'
import applogo5 from '@/app/assets/images/Marketing/appLogo1.webp'

import email from '@/app/assets/images/Marketing/14711ad7477a3d0211488990623ad24c_32x32.webp'
import slider1 from '@/app/assets/images/Marketing/Still.webp'
import slider2 from '@/app/assets/images/Marketing/principles-of-advertising.webp'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products:any = [
  {
    id: 1,
    channel: "Facebook",
    image: icon1,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
  },
  {
    id: 1,
    channel: "Direct",
    image: icon2,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
  },
  {
    id: 1,
    channel: "Instagram",
    image: icon3,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
  },
  {
    id: 1,
    channel: "Unattributed",
    image: icon4,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
  },
  {
    id: 1,
    channel: "Bing",
    image: icon5,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
  }
  
]

const activities:any = [
  {
    id: 1,
    activityHead: "Did something catch your eye?",
    activityPara: "Abandoned product browse",
    image: email,
    status: "--",
    CRT: "0%",
    cost: '-',
    sales: "0.00",
    sessions: 0,
  },
  {
    id: 1,
    activityHead: "Did something catch your eye?",
    activityPara: "Abandoned product browse",
    image: email,
    status: "--",
    CRT: "0%",
    cost: '-',
    sales: "0.00",
    sessions: 0,
  },
  {
    id: 1,
    activityHead: "Did something catch your eye?",
    activityPara: "Abandoned product browse",
    image: email,
    status: "--",
    CRT: "0%",
    cost: '-',
    sales: "0.00",
    sessions: 0,
  },
  
]
const Marketing = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Sellerlayout>
      <div className=" py-6 w-3/5 m-auto">
        <div className="Orderbar w-full flex justify-between items-center mb-7">
          <div className="relative">
            <h1 className="text-xl text-HeadingColours text-ubuntu-bold flex items-center">
              Marketing
            </h1>
          </div>

          <div className=" space-x-3">
            <button className="bg-HeadingColours px-2 rounded-lg py-1 text-sm text-white opacity-90 hover:opacity-100 ">
              Create campaign
            </button>
          </div>
        </div>
        <div className="flex justify-between text-ubuntu-regular ">
          <div className="flex justify-between w-[37%]">
            <div className="bg-white w-[46%] text-sm flex items-center justify-between h-max py-1 px-2 rounded-md shadow-md cursor-pointer active:scale-95">
              <BsFillCalendarFill className="text-HeadingColours" />
              <p>JUL 24-Aug 22,2023</p>
            </div>
            <div className="bg-white text-sm  w-[49%] flex justify-center items-center py-1 px-2 rounded-md shadow-md cursor-pointer active:scale-95">
              Compare:Previous period
            </div>
          </div>
          <div className="w-[16%]">
            <div className="bg-white w-full text-sm flex items-center justify-between h-max py-1 px-2 rounded-md shadow-md cursor-pointer active:scale-95">
              <SiSimpleanalytics className="text-HeadingColours" />
              <p>Last-non-direct click</p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-4 mt-8">
          <div className="p-5 bg-white rounded-xl">
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
            <Marketgraph />
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Online store sessions
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              1.93%
              <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                <FiArrowUpRight /> 55%{" "}
              </span>{" "}
            </p>
            <Marketgraph />
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Average order value
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              Rs 1,170.13
              <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                <FiArrowUpRight /> 48%{" "}
              </span>{" "}
            </p>
            <Marketgraph />
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Total sales
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              Rs 160,904.00
              <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                <FiArrowUpRight /> 241%{" "}
              </span>{" "}
            </p>
            <Marketgraph />
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Sales attributed to marketing
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              Rs 139,585.00
              <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                <FiArrowUpRight /> 333%{" "}
              </span>{" "}
            </p>
            <Marketgraph />
          </div>
          <div className="p-5 bg-white rounded-xl">
            <p className="w-max">
              Orders attributed to marketing
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
              127
              <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                <FiArrowUpRight /> 210%{" "}
              </span>{" "}
            </p>
            <Marketgraph />
          </div>
        </div>
        <div className="p-4 text-HeadingColours space-y-3">
          <h1 className="text-xl text-ubuntu-bold flex items-center">
            Marketing
          </h1>
          <p className="text-xs">
            Upgrade your plan to receive additional sales, customer, and
            marketing reports to help you understand and grow your business.
          </p>
          <div className="space-x-4">
            <button className="bg-HeadingColours px-2 rounded-lg py-1 text-sm text-white opacity-90 hover:opacity-100 ">
              View upgrade options
            </button>
            <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
              Learn More
            </span>
          </div>
        </div>
        <div className="py-6 px-4 mb-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
          <div className="flex justify-between ">
            <p className="text-sm">Top channel performance</p>
            <HiOutlineDocumentReport />
          </div>
          <p className="text-sm pt-6">
            Reporting is based on your UTM parameters and connected app
            activities to your online store. Reported with a 30-day attribution
            window.
          </p>
            <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
              Learn More
            </span>

            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className=" sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-left text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Channel
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Sales
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Sessions
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Conversion rate
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    AOV
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    First time customers
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product:any,i:any) => (
                  <tr key={i} className="">
                    <td className="max-w-[300px] pr-3 text-left py-2 flex items-center text-xs font-bold text-gray-900">
                      <Image className="w-[15px] mr-2" src={product.image} alt="" /> {product.channel}
                    </td>
                    <td className="pr-3 py-2 whitespace-nowrap text-right w text-xs">
                        {product.sales}
                    </td>
                    <td
                      className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                    >
                      {product.sessions}
                    </td>
                    <td
                      className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                    >
                      {product.orders}
                    </td>
                    <td
                      className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                    >
                      {product.conversionRate}
                    </td>
                    <td
                      className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                    >
                      {product.AOV}
                    </td>
                    <td
                      className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                    >
                      {product.FirstTimeCustomers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
              View channel reports
            </span>

        </div>


        <div className="py-6 px-4 mb-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
          <div className="flex justify-between ">
            <p className="text-sm">Installed marketing app activities</p>
          </div>

            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className=" sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-left text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Marketing activity
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
                    CTR
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Cost
                  </th>
                  <th
                    scope="col"
                    className="pr-3 py-4 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                  >
                    Sales
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
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activities.map((product:any,i:any) => (
                  <tr key={i} className="">
                    <td className="pr-3 flex items-center py-3 whitespace-nowrap text-left w text-xs">
                      <Image className="w-[15px] mr-2" src={product.image} alt="" /> {product.channel}
                      <div>
                        <span className="m-1 text-ubuntu-bold p-0">{product.activityHead}</span> <br />
                        <span className="m-1 p-0">{product.activityPara}</span>
                      </div>
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.status}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.CRT}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.cost}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.sales}
                    </td>
                    <td
                      className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                    >
                      {product.sessions}
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
                  View summary
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
                  View report
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

        
        <div className="py-6 px-4 mb-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
          <div className="flex justify-between ">
            <p className="text-sm">Marketing apps</p>
          </div>
          <p className="text-sm pt-6">
          Increase sessions, engage shoppers, and promote products by adding more marketing apps.
          </p>

                  <div className="my-3 grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="flex gap-3">  
                        <Image className="w-[20px] h-max rounded" src={applogo1} alt="" />
                        <div>
                          <h1 className="text-blue-600 my-1 text-xs hover:underline cursor-pointer hover:text-blue-800">Shop</h1>
                          <p className="text-ubuntu-regular text-sm">Boost your brand presence and connect with customers on Shop</p>
                          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
                          Set up app
                          </span>
                        </div>
                    </div>
                    <div className="flex gap-3">  
                        <Image className="w-[20px] h-max rounded" src={applogo2} alt="" />
                        <div>
                          <h1 className="text-blue-600 my-1 text-xs hover:underline cursor-pointer hover:text-blue-800">Shop</h1>
                          <p className="text-ubuntu-regular text-sm">Grow your business with shoppable ads on Snapchat!</p>
                          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
                          Set up app
                          </span>
                        </div>
                    </div>
                    <div className="flex gap-3">  
                        <Image className="w-[20px] h-max rounded" src={applogo3} alt="" />
                        <div>
                          <h1 className="text-blue-600 my-1 text-xs hover:underline cursor-pointer hover:text-blue-800">Shop</h1>
                          <p className="text-ubuntu-regular text-sm">Email marketing newsletters, automations, templates & restock</p>
                          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
                          Set up app
                          </span>
                        </div>
                    </div>
                    <div className="flex gap-3">  
                        <Image className="w-[20px] h-max rounded" src={applogo4} alt="" />
                        <div>
                          <h1 className="text-blue-600 my-1 text-xs hover:underline cursor-pointer hover:text-blue-800">Shop</h1>
                          <p className="text-ubuntu-regular text-sm">Drive sales with email marketing, newsletters, SMS, and popups</p>
                          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
                          Set up app
                          </span>
                        </div>
                    </div>
                    <div className="flex gap-3">  
                        <Image className="w-[20px] h-max rounded" src={applogo5} alt="" />
                        <div>
                          <h1 className="text-blue-600 my-1 text-xs hover:underline cursor-pointer hover:text-blue-800">Shop</h1>
                          <p className="text-ubuntu-regular text-sm">Email & Text Marketing, SMS Automation and Abandoned Carts</p>
                          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
                          Set up app
                          </span>
                        </div>
                    </div>
                  </div>

                  <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                  View more marketing apps
                  </button>

        </div>


        <div className="py-6 px-4 mb-4 pb-10 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
          <p className="text-sm pt-6">
            Boost your marketing mindset with expert advice from <span className="text-blue-600 text-sm underline cursor-pointer hover:text-blue-800">Shopify Learn.</span>
          </p>

                <Slider {...settings} className="dashboardSlider">
          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider1} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Introducing Shopify Email</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Learn how to connect with your customers using Shopify Email.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore Shopify Email
                      </button>
                    </div>
            </div>
          </div>
          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider2} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Introducing Shopify Email</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Learn how to connect with your customers using Shopify Email.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore Shopify Email
                      </button>
                    </div>
            </div>
          </div>
          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider1} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Introducing Shopify Email</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Learn how to connect with your customers using Shopify Email.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore Shopify Email
                      </button>
                    </div>
            </div>
          </div>
          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider2} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Introducing Shopify Email</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Learn how to connect with your customers using Shopify Email.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore Shopify Email
                      </button>
                    </div>
            </div>
          </div>
          <div className="my-2">
            <div className="w-full border overflow-hidden rounded-lg flex">
                    <Image className="w-[35%]" src={slider1} alt="" />
                    <div className="w-[65%] p-5">
                      <p className="text-ubuntu-bold my-2 text-sm">Introducing Shopify Email</p>
                      <p className="text-ubuntu-regular my-2 text-sm">Learn how to connect with your customers using Shopify Email.</p>
                      <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                        Explore Shopify Email
                      </button>
                    </div>
            </div>
          </div>
        </Slider>
               


        </div>


      </div>
    </Sellerlayout>
  );
};

export default Marketing;
