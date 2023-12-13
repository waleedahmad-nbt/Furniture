"use client";
import React from "react";
import adminLogo from "@/app/assets/images/header/E_Logo.png";
import Image from "next/image";
import Link from "next/link";
import { PiSquaresFourDuotone } from "react-icons/pi";
import {
  AiOutlineFolderAdd,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FiMail, FiUsers } from "react-icons/fi";
import { BsArrowLeft, BsHandbag } from "react-icons/bs";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { AssignAdminsidefalse } from "@/lib/store/slices/Allslices";
import { RootState } from "@/lib/store";

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Sidebar = () => {
  const [open, setOpen] = React.useState(1);
  const dispatch = useDispatch()
  const Checkpost = useSelector((state: RootState) => state.AdminSide);
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <div className={`w-[250px] z-30 lg:left-0 ${Checkpost ? "left-0" : "left-[-250px]"} duration-300 h-screen fixed  top-0`}>
    <div className="w-full flex flex-col bg-[#1C2434] p-5 h-screen relative">
      <span onClick={() => dispatch(AssignAdminsidefalse())}>
      <BsArrowLeft className="text-2xl absolute top-5 right-5 text-white block cursor-pointer lg:hidden"  />
      </span>

      <Image className="mb-14 w-[100px]" src={adminLogo} alt="" />

      <div className="p-3 w-full">
        <p className="text-ubuntu-bold text-[#008B36] text-sm uppercase">
          Menu
        </p>
      </div>

      <ul>
        <Link href="/dashboard/admin">
        <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular bg-[#333A48] mb-2   ">
          <PiSquaresFourDuotone className="text-xl text-white mr-3" />
          Dashboard
        </li>
        </Link>
        <Link href="/dashboard/admin/products">
          <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
            <AiOutlineUnorderedList className="text-xl text-white mr-3" />
            All Products
          </li>
        </Link>
        <Link href="/dashboard/admin/newproduct">
          <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
            <AiOutlineFolderAdd className="text-xl text-white mr-3" />
            New Product
          </li>
        </Link>
        <Link href="/dashboard/admin/customers">
          <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
            <FiUsers className="text-xl text-white mr-3" />
            Customers
          </li>
        </Link>
        <Link href="/dashboard/admin/orders">
          <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
            <BsHandbag className="text-xl text-white mr-3" />
            Orders
          </li>
        </Link>
        <Link href="/dashboard/admin/mail">
        <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
          <FiMail className="text-xl text-white mr-3" />
          Email
        </li>
        </Link>
      </ul>
      <div className="p-3 w-full">
        <p className="text-ubuntu-bold text-[#008B36] text-sm uppercase">
          Others
        </p>
      </div>
      <ul>
        {/* <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
          <FiUserCheck className="text-xl text-white mr-3" />
          <Link href="#">Sign In</Link>
        </li>
        <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
          <AiOutlineUserAdd className="text-xl text-white mr-3" />
          <Link href="#">Sign Up</Link>
        </li> */}
        <li className=" text-white p-2 hover:bg-[#333A48] cursor-pointer flex items-center px-3 text-md text-ubuntu-regular mb-2   ">
          <BiLogOutCircle className="text-xl text-white mr-3" />
          <Link href="#">Log Out</Link>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
