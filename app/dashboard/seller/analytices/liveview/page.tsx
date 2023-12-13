'use client'
import Sellerlayout from "@/app/dashboard/layouts/SellerDashboard";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import visitorImage from '../../../../assests/images/Analytics/157a132fd8922050.svg'
import { AiOutlineBarChart, AiOutlineEye } from "react-icons/ai";
import { BsArrowsAngleExpand } from "react-icons/bs";


import image from "../../../../assests/images/Seller/Product.jpeg";
import { BiLink, BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import Crusher from "../../../../assests/images/Analytics/Q-123-4_50x50@2x.jpg";

const products:any = [
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '1 product',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '1 product',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '1 product',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '',
  },
  {
    id: 1,
    image: image,
    name: "WhatsApp_Image_2023-08-07_at_7.00.51_PM",
    date: "Aug 8",
    size: '128.48 KB',
    reference: '1 product',
  },
]
const Live = () => {

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-ubuntu-bold text-HeadingColours">qshopin</h1>
              <p className="text-P_textColour text-sm text-ubuntu-regular">Sep 5, 2023 at 11:50 AM GMT+5</p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#8F71EF"></path><path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" stroke="#7F4AFA" stroke-opacity="0.15" stroke-width="4"></path></svg>
              <p className="text-P_textColour text-sm text-ubuntu-regular mr-3">Orders</p>
              <Image src={visitorImage} alt="" />
              <p className="text-P_textColour text-sm text-ubuntu-regular">Visitors right now</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 items-center">
          <button className="rounded-lg text-lg p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <AiOutlineEye />
              </button>
              <button className="rounded-lg text-lg p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <AiOutlineBarChart />
              </button>
              <button className="rounded-lg text-lg p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <BsArrowsAngleExpand />
              </button>
          </div>
        </div>


        <div className="grid grid-cols-1 overflow-hidden h-[77vh] lg:grid-cols-3">
          <div className="col-span-1 h-full p-5 overflow-auto">

          <div className="w-full mb-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
          <div className="p-3 bg-white rounded-xl">
            <p className="w-max text-sm">
            Visitors right now
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-xl text-HeadingColours flex text-ubuntu-bold">
            4
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <p className="w-max text-sm">
            Total sales
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-xl text-HeadingColours flex text-ubuntu-bold">
            Rs 234.00
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <p className="w-max text-sm">
            Total sessions
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-xl text-HeadingColours flex text-ubuntu-bold">
            278
            </p>
          </div>
          <div className="p-3 bg-white rounded-xl">
            <p className="w-max text-sm">
            Total orders
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-xl text-HeadingColours flex text-ubuntu-bold">
            3
            </p>
          </div>
        </div>


          <div className="p-3 mb-4 bg-white rounded-xl">
            <p className="w-max text-sm">
            Top locations
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
            <p className="text-xl text-HeadingColours flex text-ubuntu-bold">
            3
            </p>
              <div className="mb-1 text-xs  dark:text-white">Karachi • Pakistan</div>
              <div className="w-full rounded flex items-center h-2.5 mb-4">
                <div className="bg-[#079EE1] mr-2 h-2.5 rounded dark:bg-blue-500 w-[45%]"></div>
                <span className="text-xs text-P_textColour">45 sessions</span>
              </div>

              <div className="mb-1 text-xs  dark:text-white">Lahore • Pakistan</div>
              <div className="w-full rounded flex items-center h-2.5 mb-4">
                <div className="bg-[#079EE1] mr-2 h-2.5 rounded dark:bg-blue-500 w-[35%]"></div>
                <span className="text-xs text-P_textColour">30 sessions</span>
              </div>

              <div className="mb-1 text-xs  dark:text-white">Johannesburg • South Africa</div>
              <div className="w-full rounded flex items-center h-2.5 mb-4">
                <div className="bg-[#079EE1] mr-2 h-2.5 rounded dark:bg-blue-500 w-[30%]"></div> 
                <span className="text-xs text-P_textColour">24 sessions</span>
              </div>
            
          </div>
  


          <div className="p-3 mb-4 bg-white rounded-xl">
            <p className="w-max text-sm">
            Customers
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>
              <div className="mb-1 text-xs  dark:text-white">First-time</div>
              <div className="w-full rounded flex items-center h-2.5 mb-4">
                <div className="bg-[#6A42E9] mr-2 h-2.5 rounded dark:bg-blue-500 w-[75%]"></div>
                <span className="text-xs text-P_textColour">3 customers</span>
              </div>
              <div className="mb-1 text-xs  dark:text-white">Returning</div>
              <div className="mb-1 text-xs text-P_textColour">|  0 customers</div>

            
          </div>


          <div className="p-3 mb-4 bg-white rounded-xl">
            <p className="w-max text-sm">
              Top products
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>

            <div className="flex justify-between gap-2 items-center">
                <div className="flex my-4 text-sm items-center gap-2">
                  <Image src={Crusher} className="rounded w-[40px]" alt="" />
                  <Link href={'#'} className="text-blue-600 underline">
                    Hand Garlic Crusher
                  </Link>
                </div>
                <p className="text-P_textColour text-xs">Rs 900.00</p>
            </div>

          </div>


          <div className="p-3 mb-4 bg-white rounded-xl">
            <p className="w-max text-sm">
            Top products
              <hr className="h-[1px] border-dashed border-[1px]" />
            </p>

            <div className="flex justify-between gap-2 items-center">
                <div className="flex my-4 text-sm items-center gap-2">
                  <Image src={Crusher} className="rounded w-[40px]" alt="" />
                  <Link href={'#'} className="text-blue-600 underline">
                    Hand Garlic Crusher
                  </Link>
                </div>
                <p className="text-P_textColour text-xs">Rs 900.00</p>
            </div>

          </div>




          </div>
          <div className="col-span-2 overflow-auto">
            
          <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl text-ubuntu-bold">Files</h1>
          <div className="flex justify-center gap-2 items-center">
            <Link href={'/dashboard/seller/products/new'}>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Upload files
            </button>
            </Link>
          </div>
        </div>  

        <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button className={`rounded-lg text-sm p-1 px-2 text-HeadingColours  hover:bg-[#f3f3f3]`}>
                All
              </button>
              <button className={`rounded-lg text-sm p-1 px-2 text-HeadingColours  hover:bg-[#f3f3f3]`}>
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
              <thead className="bg-[#F7F7F7] sticky top-[0px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th></th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    	File name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    	Date added
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    References
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    	Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products && products.map((product:any, i:any) => {
                  const {image, name, date, size, reference} = product
                  return(
                  <tr key={i} className="group">
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td>
                      <Image
                        className="h-[50px] w-max"
                        src={image}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular `}>
                        {date}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs `}
                    >
                      {size}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {reference!=="" ? 
                      <>
                         <Menu as="div" className="relative inline-block text-right">
      <div>
        <Menu.Button className=" text-xs inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-2 py-1 font-semibold text-gray-900   hover:bg-[#E3E3E3]">
        {reference}
          <ChevronDownIcon className="group-hover:opacity-100 opacity-0 -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 w-max z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }:any) => (
                <p
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 No unfulfilled orders for this item
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
                      </> 
                      : <>--</>}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs text-gray-500">
                    <button className="float-right rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                      <BiLink />
                    </button>
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>

          </div>
        </div>


      </div>
    </Sellerlayout>
  );
};

export default Live;
