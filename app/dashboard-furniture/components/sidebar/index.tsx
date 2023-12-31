"use client";
import { NavLink } from "@/app/(root)/components";
import SideLinks from "./SideLinks";

import { SiSimpleanalytics } from "react-icons/si";
import { CiHardDrive } from "react-icons/ci";
import { BiSolidUser } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { ImPriceTag } from "react-icons/im";
import { RiContactsFill, RiFileList2Line, RiGroupFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {

  const productsOptions = [
    { label: "Categories", link: "/dashboard-furniture/admin/products/collection" },
    { label: "Inventory", link: "/dashboard-furniture/admin/products/inventory" },
  ];

  const customerSubLink = [
    { label: "Segments", link: "/dashboard-furniture/admin/customers/segment" },
  ];

  const ordersSubLink = [
    { label: "Abandoned checkouts", link: "/dashboard-furniture/admin/orders/Abandonedcheckouts" },
  ];

  const pageManagement = [
    { label: "Home", link: "/dashboard-furniture/admin/page-management/home" },
    { label: "About Us", link: "/dashboard-furniture/admin/page-management/about-us" },
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
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <GoHomeFill size={16}/>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="text-sm">
          <SideLinks
            href={"/dashboard-furniture/admin/page-management/home"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
            subLinks={pageManagement}
            end
          >
            <RiFileList2Line />
            <span>Page Management</span>
          </SideLinks>
        </li>
        <li className="text-sm">
          <SideLinks
            href={"/dashboard-furniture/admin/orders"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
            subLinks={ordersSubLink}
          >
            <CiHardDrive />
            <span>Orders</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/quotes"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <RiFileList2Line />
            <span>Quotation</span>
          </NavLink>
        </li>
        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/portfolio"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <RiGroupFill />
            <span>Portfolio</span>
          </NavLink>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/products"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
            subLinks={productsOptions}
          >
            <ImPriceTag size={14} />
            <span>Products</span>
          </SideLinks>
        </li>
        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/customers"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
            subLinks={customerSubLink}
          >
            <BiSolidUser />
            <span>Customers</span>
          </SideLinks>
        </li>

        <li className="text-sm">
          <SideLinks 
            href={"/dashboard-furniture/admin/analytices"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
            subLinks={analyticsSubLink}
          >
            <SiSimpleanalytics />
            <span>Analytics</span>
          </SideLinks>
        </li>
        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/contacts"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <RiContactsFill />
            <span>Contacts</span>
          </NavLink>
        </li>
        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/team"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <FaUsers />
            <span>Team</span>
          </NavLink>
        </li>
        <li className="text-sm">
          <NavLink 
            end
            href={"/dashboard-furniture/admin/coupons"}
            active="bg-white hover:bg-white"
            className="hover:bg-[#ffffff77] text-gray-900 rounded-md px-2 py-1 flex items-center gap-2 w-full cursor-pointer font-bold"
          >
            <RiContactsFill />
            <span>Coupons</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
