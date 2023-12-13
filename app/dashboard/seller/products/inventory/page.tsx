"use client";
import React, { Fragment, useState } from "react";
import Sellerlayout from "../../../layouts/SellerDashboard";
import Image from "next/image";
import image from "../../../../assests/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'
import Link from "next/link";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
const Inventory = () => {
  const [products, setProducts] = useState([
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
    {
      image: image,
      name: "( 2 In1 ) Kitchen Liquid Soap Pump",
      SKU:"	Q-052",
      committed:"0",
      available:20,
      onhand:20,
    },
  ]);

  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all')

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  const changeValue = (i:any, type:any) => {  
    setVal(i)
  }

  return (
    <Sellerlayout>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <div className="flex items-center">
          <h1 className="text-xl text-ubuntu-bold">Inventory:</h1>
          <Menu as="div" className="relative z-20 inline-block text-left">
      <div>
        <Menu.Button className=" text-lg text-ubuntu-bold inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-2 py-1 font-semibold text-gray-900   hover:bg-[#E3E3E3]">
        73-C Cavalary ground Lahore
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                  73-C Cavalary ground Lahore
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
                  Miltary accounts
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>



          </div>
          <div className="flex justify-center gap-2 items-center">
          <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded text-ubuntu-regular">
              Export
            </button>
            <button className="p-1 bg-[#E3E3E3] border-none hover:bg-[#D4D4D4] text-xs px-2 rounded text-ubuntu-regular">
              Import
            </button>
            <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
              Add Product
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                All
              </button>
              <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
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
              <thead className="bg-[#F7F7F7] sticky z-10 top-[54px]">
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
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    SKU
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Commited
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Available
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    On hand
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product,i) => (
                  <tr key={i} className="group">
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td>
                      <Image
                        className="h-[50px] w-max"
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-end w text-xs text-gray-500">
                      <div className="p-1 px-2 rounded-lg w-max text-end text-ubuntu-regular text-HeadingColours ">
                        {product.SKU}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs `}
                    >
                       <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className=" text-xs inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-2 py-1 font-semibold text-gray-900   hover:bg-[#E3E3E3]">
        {product.committed}
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
                      
                    </td>
                    <td
                      className={`px-6 py-4 flex items-center whitespace-nowrap text-xs `}
                    >
                      <input className="w-[100px] text-xs border rounded-lg border-gray-400 mr-2" type="number" defaultValue={product.available} />
                      <HiAdjustmentsHorizontal className="group-hover:opacity-100 opacity-0 text-lg text-P_textColour" />
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs `}
                    >
                      <input className="w-[100px] inline-block text-xs border rounded-lg border-gray-400 mr-2" type="number" defaultValue={product.available} />
                      <HiAdjustmentsHorizontal className="group-hover:opacity-100 opacity-0 text-lg inline-block text-P_textColour" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
                <div className="w-max p-5 m-auto">
                    <button className="p-1 rounded-tl-lg rounded-bl-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleLeftSolid /></button>
                    <button className="p-1 rounded-tr-lg rounded-br-lg bg-[#E3E3E3] hover:bg-[#D4D4D4] text-P_textColour"><LiaAngleRightSolid /></button>
                </div>
          </div>
        </div>
            <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">managing inventory</Link></p>
      </div>
    </Sellerlayout>
  );
};

export default Inventory;
