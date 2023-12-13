"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiFillPicture, AiFillTags, AiOutlineHome } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { Assigncurrrent } from "@/lib/store/slices/Allslices";
import { RootState } from "@/lib/store";
import { CiHardDrive } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import { SiCoinmarketcap, SiSimpleanalytics } from "react-icons/si";
import { TbDiscount2 } from "react-icons/tb";

const Sidebar = () => {
  const dispatch = useDispatch();
  const Checkcurrent = useSelector((state: RootState) => state.currentTab);
  const [isOrdersDropdownOpen, setOrdersDropdownOpen] = useState(false);
  const orderItems = useSelector((state: RootState) => state.orderItems);

  const handleSidelis = (e: any) => {
    let val = e.target.innerText;
    dispatch(Assigncurrrent(val));
  };

  const toggleOrdersDropdown = () => {
    setOrdersDropdownOpen(!isOrdersDropdownOpen);
  };

  return (
    <div className="w-full p-2 h-[93.5vh] bg-[rgb(235,235,235)]">
      <ul className="space-y-2">
        <Link href={"/dashboard/seller"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Home" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <AiOutlineHome />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Home
            </li>
          </div>
        </Link>
        <Link href={"/dashboard/seller/orders"}>
          <div
            className={`rounded-md p-2 relative flex w-full cursor-pointer ${
              Checkcurrent == "Orders" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <CiHardDrive />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Orders
            </li>
            <span className="absolute right-2 h-max px-2 rounded-md text-HeadingColours bg-gray-200">{orderItems?.length}</span>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Orders" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/orders/drafts"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Drafts
              </li>
            </Link>
            <Link href={"/dashboard/seller/orders/Abandonedcheckouts"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Abandoned checkouts
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/products"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Products" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <AiFillTags />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Products
            </li>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Products" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/products/collection"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Collections
              </li>
            </Link>
            <Link href={"/dashboard/seller/products/inventory"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Inventory
              </li>
            </Link>
            <Link href={"/dashboard/seller/products/purchase"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Purchase products
              </li>
            </Link>
            <Link href={"/dashboard/seller/products/transfer"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Transfers
              </li>
            </Link>
            <Link href={"/dashboard/seller/products/giftcard"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Gift Cards
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/customers"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Customers" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <BiSolidUser />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Customers
            </li>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Customers" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/customers/segment"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Segments
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/content"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Content" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <AiFillPicture />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Content
            </li>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Content" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/content"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Files
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/analytices"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Analytics" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <SiSimpleanalytics />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Analytics
            </li>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Analytics" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/analytices/reports"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Reports
              </li>
            </Link>
            <Link href={"/dashboard/seller/analytices/liveview"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Live View
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/marketing"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Marketing" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <SiCoinmarketcap />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Marketing
            </li>
          </div>
        </Link>
        <div
          className={`${Checkcurrent === "Marketing" ? "block" : "hidden"}
          `}
        >
          <ul className="pl-10">
            <Link href={"/dashboard/seller/marketing/compaigns"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Compaigns
              </li>
            </Link>
            <Link href={"/dashboard/seller/marketing/automations"}>
              <li className="text-xs py-2 text-P_textColour cursor-pointer">
                Automations
              </li>
            </Link>
          </ul>
        </div>
        <Link href={"/dashboard/seller/discounts"}>
          <div
            className={`rounded-md p-2 flex w-full cursor-pointer ${
              Checkcurrent == "Discounts" ? "bg-white " : "hover:bg-[#ffffff77]"
            }`}
            onClick={handleSidelis}
          >
            <TbDiscount2 />
            <li className="text-sm px-2 text-ubuntu-medium text-HeadingColours">
              Discounts
            </li>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
