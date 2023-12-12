"use client"
import Image from "next/image";
import { NavLink } from "..";

import user from "@/app/assets/users/user_01.png";
import camera from "@/app/assets/icons/camera.svg";

const AccountSideBar = () => {
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
          <NavLink href="/" active="border-b border-gray-100 font-medium text-gray-900" className="pb-3 block">
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
          <button className="pb-3 block">
            Log Out
          </button>
        </li>
      </ul>
    </div>
  )
}

export default AccountSideBar
