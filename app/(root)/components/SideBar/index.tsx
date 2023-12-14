"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";
import SubMenu from "./SubMenu";
import { PiPaperPlaneTilt, PiPhoneLight } from "react-icons/pi";
import { usePathname } from "next/navigation";

import profile from "@/app/assets/icons/profileBlack.svg";
import search from "@/app/assets/icons/search.svg";

import Image from "next/image";
import { NavLink, SignInModal, SignUpModal } from "../index";
import { BsHeart } from "react-icons/bs";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

const SideBar = ({ menuOpen, setMenuOpen, showModal }: any) => {
  const [searchInp, setSearchInp] = useState(false);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const wishList: any = useSelector((state: RootState) => state.wishList);

  const pathname = usePathname();
  const menu = useRef<any>(null);

  const [isOpen, setIsOpen] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  useEffect(() => {
    setMenuOpen("");
  }, [pathname]);

  const option1 = ["shop", "Living Room", "kitchen"];
  const option2 = [
    "Living Room",
    "Bathroom",
    "Dining Room",
    "Home Office",
    "Bedroom",
    "Home Decore",
    "Nursey Kids",
  ];
  const option3 = [
    "New Products",
    "Featured Products",
    "Best Selling Products",
    "Best Selling Products",
  ];

  return (
    <>
      {menuOpen && (
        <div className="fixed h-screen inset-0 bg-[#00000099] z-40"></div>
      )}
      <div
        ref={menu}
        className={`fixed top-0 left-0 z-50 h-[100vh] w-[80%] bg-white max-w-[318px] duration-200 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-gray-900 flex flex-col h-full">
          <div className="bg-white md:bg-gray-900 flex items-center justify-between px-4 py-5 border-b md:border-0">
            <Link href="/" className="shrink-0 cursor-pointer">
              <h1 className="text-primary text-xl font-black text-center">
                Guideline
              </h1>
              <p className="text-sm text-gray-300 md:text-white">
                group of companies
              </p>
            </Link>
            <div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 md:text-white text-lg mt-2"
              >
                <FiX />
              </button>
            </div>
          </div>

          <div className="relative w-full px-4 py-2 flex justify-between  pt-2 md:hidden">
            <div className="flex items-center gap-2">
              <label
                htmlFor="search"
                className="bg-primary h-[34px] px-2 flex justify-center items-center"
                onClick={() => setSearchInp(!searchInp)}
              >
                <Image src={search} alt="search" className="w-[20px]" />
              </label>
              <Link
                href="/customizeFurniture"
                className=" px-3 h-[34px] flex items-center bg-gray-400 text-white text-[12px] sm:text-[14px] transition-all duration-300"
              >
                <p>Customize Furniture</p>
              </Link>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              <button
                className="shrink-0"
                onClick={() => {
                  setMenuOpen(false);
                  showModal();
                }}
              >
                <Image
                  src={profile}
                  alt="user"
                  className="w-[25px] lg:w-[35px]"
                />
              </button>

              <NavLink
                href="/wishlist"
                className="shrink-0 relative text-[24px]  text-gray-300"
              >
                <BsHeart />
                {wishList.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-[12px]">
                    {wishList.length}
                  </span>
                )}
              </NavLink>
            </div>
            <div
              className={` absolute bottom-0 left-0 ${
                !searchInp ? "hidden" : "flex"
              } justify-between items-center px-5 bg-white w-full h-full`}
            >
              <input
                type="text"
                name="search"
                id="search"
                className="w-full h-[34px] px-5 border outline-primary"
                placeholder="Type here"
                onBlur={() => setSearchInp(!searchInp)}
              />
              <button className="bg-primary h-[34px] px-2">
                <Image src={search} alt="search" className="w-[20px]" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto grow p-4">
            <div className="flex text-gray-100 items-center gap-2 border-b-[2px] border-primary border-opacity-40 w-max pb-1 shrink-0">
              <FaListUl />
              <span>Main Menu</span>
            </div>
            <ul className="my-3">
              <li>
                <Link href="/" className="block p-3">
                  Home
                </Link>
              </li>
              {option1?.map((item: any, index: any) => (
                <li key={index}>
                  <SubMenu
                    title={item}
                    options={option1}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                  />
                </li>
              ))}
              <li className="my-2">
                <div className="text-gray-100 border-b-[2px] border-primary border-opacity-40 w-max pb-1">
                  <span>Browse Categories</span>
                </div>
              </li>
              {option2?.map((item: any, index: any) => (
                <li key={index}>
                  <SubMenu
                    title={item}
                    options={option1}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                  />
                </li>
              ))}
            </ul>
            <ul className="my-3 border-t">
              {option3?.map((item: any, index: any) => (
                <li key={index}>
                  <SubMenu
                    title={item}
                    options={option1}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                  />
                </li>
              ))}
            </ul>
            <div className="text-gray-100 border-b-[2px] border-primary border-opacity-40 w-max pb-1">
              <span>Guideline Help</span>
            </div>
            <ul className="my-3">
              <li className="flex items-center justify-between cursor-pointer w-full p-3">
                <Link href="/wishlist" className="capitalize">
                  Wishlist
                </Link>
              </li>
              <li className="flex items-center justify-between cursor-pointer w-full p-3">
                <span className="capitalize">Compare</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer w-full p-3">
                <Link href="/myaccount" className="capitalize">
                  My Account
                </Link>
              </li>
              <li className="flex items-center justify-between cursor-pointer w-full p-3">
                <Link href="/contactus" className="capitalize">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-3">
              <div className="text-gray-100 border-b-[2px] border-primary border-opacity-40 w-max pb-1 shrink-0 mb-3">
                <span>Contact Details</span>
              </div>
              <div className="px-3">
                <div className="flex items-center gap-2 text-gray-900">
                  <PiPhoneLight />
                  <p>info@guidline.com</p>
                </div>
                <span className="text-gray-200 text-sm">
                  You can send email at any time
                </span>
              </div>
              <div className="px-3">
                <div className="flex items-center gap-2 mt-2 text-gray-900">
                  <PiPaperPlaneTilt />
                  <p>info@guidline.com</p>
                </div>
                <span className="text-gray-200 text-sm">
                  You can send email at any time
                </span>
              </div>
              <p className="text-gray-200 pt-5 px-3">
                Copyroght 2023 guidline website. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
