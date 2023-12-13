"use client";
import { NavLink } from "@/app/(root)/components";
import SideLinks from "./SideLinks";

import { SiCoinmarketcap, SiSimpleanalytics } from "react-icons/si";
import { CiHardDrive } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { GoHomeFill } from "react-icons/go";
import { ImPriceTag } from "react-icons/im";
import { AiFillPicture } from "react-icons/ai";

const Sidebar = () => {

  const productsOptions = [
    { label: "Collections", link: "/dashboard-furniture/admin/products/collection" },
    { label: "Inventory", link: "/dashboard-furniture/admin/products/inventory" },
    { label: "Purchase products", link: "/dashboard-furniture/admin/products/purchase" },
    { label: "Transfers", link: "/dashboard-furniture/admin/products/transfer" },
    { label: "Gift Cards", link: "/dashboard-furniture/admin/products/giftcard" },
  ];

  const customerSubLink = [
    { label: "Segments", link: "/dashboard-furniture/admin/customers/segment" },
  ];

  const ordersSubLink = [
    { label: "Drafts", link: "/dashboard-furniture/admin/orders/drafts" },
    { label: "Abandoned checkouts", link: "/dashboard-furniture/admin/orders/Abandonedcheckouts" },
  ];

  const contentSubLink = [
    { label: "File", link: "/dashboard-furniture/admin/orders/content" },
  ];

  const analyticsSubLink = [
    { label: "Reports", link: "/dashboard-furniture/admin/analytices/reports" },
    { label: "Live View", link: "/dashboard-furniture/admin/analytices/liveview" },
  ];

  const marketsSubLink = [
    { label: "Compaigns", link: "/dashboard-furniture/admin/marketing/compaigns" },
    { label: "Automations", link: "/dashboard-furniture/admin/marketing/automations" },
  ];

  return (
    <div className="w-full p-2 h-[93.5vh] bg-[rgb(235,235,235)]">
      <ul>
        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
          >
            <GoHomeFill size={16}/>
            <span>Home</span>
          </NavLink>
        </li>

        <li className="text-sm">
          <SideLinks
            href={"/dashboard-furniture/admin/orders"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={ordersSubLink}
          >
            <CiHardDrive />
            <span>Orders</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/products"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={productsOptions}
          >
            <ImPriceTag size={14} />
            <span>Products</span>
          </SideLinks>
        </li>
        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/customers"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={customerSubLink}
          >
            <BiSolidUser />
            <span>Customers</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/content"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={contentSubLink}
          >
            <AiFillPicture />
            <span>Content</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/analytices"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={analyticsSubLink}
          >
            <SiSimpleanalytics />
            <span>Analytics</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/marketing"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
            subLinks={marketsSubLink}
          >
            <SiCoinmarketcap />
            <span>Marketing</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/discounts"}
            active="font-bold bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer"
          >
            <TbDiscount2 />
            <span>Discounts</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;