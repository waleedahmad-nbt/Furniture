"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AiOutlineEllipsis,
  AiOutlineReload,
  AiOutlineSearch,
} from "react-icons/ai";
import userimg from "@/app/assets/images/admin/user-01.png";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AssignAdminsidefalse } from "@/lib/store/slices/Allslices";

const array: any = [
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 299,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
  {
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: 1999,
  },
];

const Products = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(AssignAdminsidefalse())
  },[])
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="">
      <h1 className="text-2xl mb-5 text-ubuntu-bold text-HeadingColours mt-4">
        Messages
      </h1>
      <div className="bg-white border col-span-2 p-5">
        <div className="flex flex-col lg:flex-row">
          <aside className="w-[250px] hidden lg:block p-4 border-r">
            <h1 className="text-xl ">Active Conversations</h1>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] mt-10 items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
            <div className="flex py-4 px-3 cursor-pointer hover:bg-[#F1F5F9] items-center space-x-4">
              <Image className="w-10 h-10 rounded-full" src={userimg} alt="" />
              <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Joined in August 2014
                </div>
              </div>
            </div>
          </aside>
          <div className="flex-1 h-max flex flex-col ">
            <header className="border-b chatBox grid-cols-2  text-white">
              <div className="flex px-10">
                <div className="w-[55%] flex items-center space-x-5">
                  <MdDeleteOutline className="text-gray-500 text-xl" />
                  <AiOutlineReload className="text-gray-500 text-xl" />
                  <AiOutlineEllipsis className="text-gray-500 text-xl" />
                </div>
              </div>
              <div>
                <div className="md:flex">
                  <div className="w-full p-3">
                    <div className="relative">
                      <AiOutlineSearch className="absolute text-2xl text-gray-400 top-[8px] left-4" />
                      <input
                        type="text"
                        className="bg-white w-full text-HeadingColours px-12 rounded-lg focus:outline-none focus:ring-0 border-0"
                        name=""
                        placeholder="Type to Search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div className="">
              <main className="flex-1 p-4">
                {/* <h1 className="text-2xl font-semibold">Main Content List</h1> */}

                <div className="container  mx-auto">
                  <div className="w-full rounded">
                    <div>
                      <div className="w-full ">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                          <Image
                            className="object-cover w-10 h-10 rounded-full"
                            src={userimg}
                            alt="username"
                          />
                          <span className="block ml-2 font-bold text-gray-600">
                            Jese Leos
                          </span>
                        </div>
                        <div className="relative w-full p-6 overflow-y-auto h-[26rem]">
                          <ul className="space-y-2">
                            <li className="flex justify-start">
                              <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-[#EFF4FB] rounded-br-full rounded-bl-full rounded-tr-full shadow">
                                <span className="block">Hi</span>
                              </div>
                            </li>
                            <li className="flex justify-end">
                              <div className="relative max-w-xl px-4 py-2 text-white bg-[#3C50E0] rounded-bl-full rounded-tl-full rounded-tr-full shadow">
                                <span className="block">Hiiii</span>
                              </div>
                            </li>
                            <li className="flex justify-end">
                              <div className="relative max-w-xl px-4 py-2 text-white bg-[#3C50E0] rounded-bl-full rounded-tl-full rounded-tr-full shadow">
                                <span className="block">how are you?</span>
                              </div>
                            </li>
                            <li className="flex justify-start">
                              <div className="relative max-w-xl px-4 py-2 text-gray-700 bg-[#EFF4FB] rounded-br-full rounded-bl-full rounded-tr-full shadow">
                                <span className="block">
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing elit.{" "}
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                              />
                            </svg>
                          </button>

                          <input
                            type="text"
                            placeholder="Message"
                            className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                            name="message"
                            required
                          />
                          <button>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                              />
                            </svg>
                          </button>
                          <button type="submit">
                            <svg
                              className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
