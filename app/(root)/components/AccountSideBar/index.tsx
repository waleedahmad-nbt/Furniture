"use client"
import { useState } from "react";
import Image from "next/image";
import { NavLink } from "..";

import user from "@/app/assets/users/user_01.png";
import camera from "@/app/assets/icons/camera.svg";
import Link from "next/link";
import { FiX } from "react-icons/fi";

const AccountSideBar = () => {

  const [logout, setLogout] = useState<boolean>(false);

  return (
    <div className="bg-cream pt-10 pb-5 px-5">
      <div className="w-[82px] h-[82px] mx-auto mb-2 relative">
        <Image src={user} alt="user" className="w-full h-full rounded-full overflow-hidden" />
        <span className="absolute bottom-0 right-0 bg-gray-900 flex items-center justify-center w-[30px] h-[30px] border-[2px] border-white rounded-full">
          <Image src={camera} alt="icon" width={16} height={16} />
        </span>
      </div>
      <h2 className="text-gray-900 font-medium text-[20px] text-center mb-10">Sofia Havertz</h2>
      <ul>
        <li className="font-semibold mb-5 text-gray-200">
          <NavLink href="/myaccount" active="border-b border-gray-100 font-medium text-gray-900" className="pb-3 block">
            Account
          </NavLink>
        </li>
        <li className="font-semibold mb-5 text-gray-200">
          <NavLink href="/myaddress" active="border-b border-gray-100 font-medium text-gray-900" className="pb-3 block">
            Address
          </NavLink>
        </li>
        <li className="font-semibold mb-5 text-gray-200">
          <NavLink href="/myorders" active="border-b border-gray-100 font-medium text-gray-900" className="pb-3 block">
            Orders
          </NavLink>
        </li>
        <li className="font-semibold mb-5 text-gray-200">
          <NavLink href="/wishlist" active="border-b border-gray-100 font-medium text-gray-900" className="pb-3 block">
            Wishlist
          </NavLink>
        </li>
        <li className="font-semibold mb-5 text-gray-200">
          <button onClick={() => setLogout(true)} className="pb-3 block">
            Log Out
          </button>
        </li>
      </ul>
      {logout && (
        <div className="fixed inset-0 bg-[#00000099]">
          <div className="flex items-center justify-center py-5 h-full">
            <div className="bg-white w-full max-w-[839px] flex items-center justify-center pt-20 pb-14 relative">
              <div className="absolute top-[20px] right-[23px]">
                <button onClick={() => setLogout(false)} className="text-gray-900 text-xl"><FiX /></button>
              </div>
              <div className="text-center">
                <Link href="/" className="shrink-0 cursor-pointer">
                  <h1 className="text-primary text-3xl font-black text-center">
                    Guideline
                  </h1>
                  <p className="text-xl">group of companies</p>
                </Link>
                <h2 className="my-6 font-medium text-xl text-gray-900">Log out</h2>
                <p className="text-gray-200">Hi user@gmail.com</p>
                <p className="text-gray-200">Are you sure you want to log out</p>
                <div className="flex items-center mt-5 justify-between">
                  <button onClick={() => setLogout(false)} className="border border-gray-900 px-10 py-2 font-medium">No</button>
                  <button className="border border-transparent text-white bg-primary px-10 py-2 font-medium">Yes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountSideBar
