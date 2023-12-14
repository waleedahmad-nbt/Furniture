"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import image from "@/app/assets/images/Seller/Product.jpeg";
import { BiLink, BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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
const Content = () => {
  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all')
  const [data, setData] = useState([])


  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }


  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  useEffect(() => {
    setData([])
    if(category==="all"){
      setData(products)
    }
    else if(category==="Active"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Active'
        })
      )
    }
    else if(category==="Draft"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Draft'
        })
      )
    }
  },[category])


  return (
    <>
      <div className="p-5">
        <div className="py-3 mb-2 flex justify-between items-center">
          <h1 className="text-xl font-bold">Files</h1>
          <div className="flex justify-center gap-2 items-center">
            <Link href={'/dashboard-furniture/admin/products/new'}>
              <button className="p-1 border-none bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white text-xs px-2 rounded-lg">
                Upload files
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                All
              </button>
              <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                +
              </button>
            </div>
            <div className="flex">
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
                <BiSearch />
                <BsFilter />
              </button>
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <BiSort />
              </button>
            </div>
          </div>
          <div>
            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[54px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
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
                {data && data?.map((product: any, i: number) => {
                  const {image, name, date, size, reference} = product;
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
                      <div className={`p-1 px-2 rounded-lg w-max`}>
                        {date}
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-xs`}>
                      {size}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {reference!=="" ? 
                      <>
                         <Menu as="div" className="relative inline-block text-right">
                          <div>
                            <Menu.Button className="text-xs items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-2 py-1 font-semibold text-gray-900   hover:bg-[#E3E3E3]">
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
                    <button className="float-right rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
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
    </>
  );
};

export default Content;
