"use client";
import Link from "next/link";
import React from "react";
import { BiSolidHeartCircle } from "react-icons/bi";
import {
  BsBorderOuter,
  BsCreditCard2Front,
  BsQrCodeScan,
} from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { MdOutlinePayments, MdRoomPreferences } from "react-icons/md";
import { PiKeyReturn } from "react-icons/pi";
import { TbGiftCard, TbSettingsCheck } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="flex justify-end">
      <div className="lg:w-3/4 w-full lg:px-10 px-2">
        <div>
          <h1 className="text-HeadingColours text-lg text-ubuntu-medium">
            Hello &nbsp;<span>Awais</span>{" "}
          </h1>
          <p className="text-sm text-P_textColour mt-1">awaisnbt@gmail.com</p>
          <div className="bg-[rgb(243,244,248)] rounded-md w-max px-10 py-2 m-5 text-ubuntu-medium text-sm text-HeadingColours">
            <p>
              Try E_Logo{" "}
              <span className="bg-Primary rounded-xl px-1"> one </span> free{" "}
            </p>
          </div>
          <hr className="h-1 w-full" />
          <ul className="text-ubuntu-regular">
            <Link href="/dashboard/user/qrcode">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <BsQrCodeScan />
                  <li className="text-P_textColour">QR Code</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/wishlist">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <BiSolidHeartCircle />
                  <li className="text-P_textColour">Wishlist</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/orders">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <BsBorderOuter />
                  <li className="text-P_textColour">Orders</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/returns">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <PiKeyReturn />
                  <li className="text-P_textColour">Returns</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/addresses">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <FaSearchLocation />
                  <li className="text-P_textColour">Addresses</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/payments">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <MdOutlinePayments />
                  <li className="text-P_textColour">Payments</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/warranty">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <TbSettingsCheck />
                  <li className="text-P_textColour">Warranty claims</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/credits">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <BsCreditCard2Front />
                  <li className="text-P_textColour">Do_buy Credits</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/giftgames">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <TbGiftCard />
                  <li className="text-P_textColour">Gifts & Games cards</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/profile">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <CgProfile />
                  <li className="text-P_textColour">Profile</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
            <Link href="/dashboard/user/preference">
              <div className="py-3 flex items-center justify-between limn cursor-pointer">
                <div className="flex items-center space-x-4">
                  <MdRoomPreferences />
                  <li className="text-P_textColour">Preference</li>
                </div>
                <FiArrowRight className="text-HeadingColours text-lg arr opacity-0 transition-all duration-200" />
              </div>
            </Link>
          </ul>
        </div>
        <hr className="h-1 w-full mt-6" />

        <p className="py-3 text-base text-P_textColour cursor-pointer">
          Sign out
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
