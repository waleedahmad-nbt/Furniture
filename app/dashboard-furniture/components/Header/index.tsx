"use client";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import {
  AiOutlineBars,
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiSearch, BiStore } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { useSelector } from "react-redux";

const Header = () => {

  const User: any = useSelector((state: RootState) => state.user);

  const [Notifaction, SetNotification] = useState(true);
  const [viewuser, setViewuser] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const getInitials = (name: string): string => {
    const words = name?.split(' ');
    const initials = words?.map((word) => word[0]);
    return initials?.join('')?.toUpperCase();
  }

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    if (showPopup) {
      const closePopup = (e: any) => {
        if (!e.target.classList.contains("openSearch")) {
          setShowPopup(false);
        }
      };

      document.body.addEventListener("click", closePopup);
      return () => {
        document.body.removeEventListener("click", closePopup);
      };
    }
  }, [showPopup]);

  const handlenotifaction = () => {
    setViewuser(true);
    SetNotification(!Notifaction);
  };
  const handleViewuser = () => {
    SetNotification(true);
    setViewuser(!viewuser);
  };

  return (
    <div className="w-full py-2 bg-[rgb(26,26,26)] grid grid-cols-3 px-4 fixed top-0 left-0 z-[100]">
      <div className="text-white text-3xl">Logo</div>

      {showPopup && (
        <>
          <div className="absolute openSearch top-2 left-1/2 shadow-lg z-10 -translate-x-1/2 p-2 w-[35%] rounded-lg bg-white">
            {/* <input type="text" placeholder="search" className="w-full border p-1 px-2" /> */}
            <div className="openSearch relative w-full">
              <input
                type="text"
                className="openSearch w-full border border-gray-300 rounded-lg pl-10 pr-8 py-1 focus:outline-none focus:border-black"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 openSearch">
                <BiSearch className="openSearch" />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 openSearch">
                <BsFilter className="openSearch" />
              </div>
            </div>

            <div className="flex mt-2 openSearch">
              <span className="px-1 bg-[#E3E3E3] text-sm rounded-lg m-1 openSearch">
                Apps
              </span>
              <span className="px-1 bg-[#E3E3E3] text-sm rounded-lg m-1 openSearch">
                Customers
              </span>
              <span className="px-1 bg-[#E3E3E3] text-sm rounded-lg m-1 openSearch">
                Orders
              </span>
              <span className="px-1 bg-[#E3E3E3] text-sm rounded-lg m-1 openSearch">
                Products
              </span>
              <span className="px-1 bg-[#E3E3E3] text-sm rounded-lg m-1 openSearch">
                Sales channels
              </span>
            </div>

            <BiSearch className="m-auto text-P_textColour text-xl mt-10 openSearch" />
            <p className="text-center mb-5 openSearch">
              Find anything in My Store
            </p>
          </div>
        </>
      )}

      <div onClick={togglePopup} className="openSearch flex justify-center">
        <form action="" className="w-full ">
          <div className="w-full openSearch border-[1px] cursor-pointer border-gray-500 flex items-center justify-between hover:border-white p-2 bg-[rgb(48,48,48)] rounded-md">
            <div className="flex items-center openSearch">
              <AiOutlineSearch className="text-lg text-[#ffffff85] openSearch" />
              <p className="text-[#ffffff85] px-2 text-sm openSearch">search</p>
            </div>
            <p className="text-[#ffffff85] text-sm openSearch">Ctrl k</p>
          </div>
        </form>
      </div>
      <div className="text-white flex justify-end">
        <div className="flex space-x-4">
          <div
            onClick={handlenotifaction}
            className="bg-[rgba(48,48,48,0.71)] flex items-center justify-center w-max cursor-pointer hover:bg-[rgb(48,48,48)] rounded-md p-2"
          >
            <HiOutlineBell className="text-lg" />
          </div>
          <div
            className={`absolute w-96 top-14 z-[1] duration-200 right-3 h-32 bg-white rounded-md shadow-lg ${
              Notifaction ? "hidden" : "block"
            }`}
          >
            <div className="p-2 flex justify-between items-center">
              <p className="text-HeadingColours">Alert</p>
              <div className="text-HeadingColours flex space-x-3">
                <AiOutlineBars className="cursor-pointer" />
                <AiOutlineCheckCircle className="cursor-pointer" />
              </div>
            </div>
            <div className="h-12 w-[93%] m-auto text-HeadingColours text-xs text-ubuntu-bold flex items-center justify-center bg-[rgb(250,250,250)] px-5">
              Alerts about your store and account will show here
            </div>
          </div>
          <div
            onClick={handleViewuser}
            className="bg-[rgb(48,48,48)] relative flex rounded-md items-center cursor-pointer"
          >
            <p className="p-2 text-xs">My Store</p>
            <div className="bg-primary w-max p-2 rounded-md text-xs">{getInitials(User.userName)}</div>
            <div
              className={`absolute w-80 top-14 z-[1] p-2 duration-200 right-0 h-max bg-white rounded-md shadow-lg ${
                viewuser ? "hidden" : "block"
              }`}
            >
              <div className="border-b-[1px] pb-1">
                <div className="bg-[rgb(250,250,250)] flex items-center justify-between  p-2">
                  <div className="flex space-x-2">
                    <div className="bg-primary w-max p-1 rounded-md text-xs">
                      {getInitials(User.userName)}
                    </div>
                    <span className="text-HeadingColours text-sm">qshopin</span>
                  </div>
                  <AiOutlineCheck className="text-HeadingColours text-sm" />
                </div>
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center space-x-2">
                    <BiStore className="text-HeadingColours text-lg" />
                    <span className="text-HeadingColours text-xs">
                      All Stores
                    </span>
                  </div>
                </div>
              </div>
              <div className="pb-2 border-b-[1px]">
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center px-2">
                    <span className="text-HeadingColours text-xs">
                      Help Center
                    </span>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center px-2">
                    <span className="text-HeadingColours text-xs">
                      Changelog
                    </span>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center px-2">
                    <span className="text-HeadingColours text-xs">
                      Community forums
                    </span>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center px-2">
                    <span className="text-HeadingColours text-xs">
                      Hire a Do-buy Expert
                    </span>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[rgb(250,250,250)] justify-between my-2 p-2">
                  <div className="flex items-center px-2">
                    <span className="text-HeadingColours text-xs">
                      Keyboard shortcuts
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between my-1 px-2 py-1">
                <div className=" px-2">
                  <h2 className="text-HeadingColours text-sm">Qshop in</h2>
                  <span className="text-HeadingColours text-xs">
                    info.qshopin1122@gmail.com
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between my-1 px-2 py-1">
                <div className=" px-2">
                  <span className="text-HeadingColours text-xs">
                    Manage Account
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between my-1 px-2 py-1">
                <div className=" px-2">
                  <span className="text-HeadingColours text-xs">Log Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
