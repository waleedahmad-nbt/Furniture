"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "@/app/assets/icons/menu.svg";
import bloomSofa from "@/app/assets/images/bloomSofa.png";
import redSofa from "@/app/assets/images/redSofa.png";
import greenSofa from "@/app/assets/images/greenSofa.png";
import pinkSofa from "@/app/assets/images/pinkSofa.png";
import dustSofa from "@/app/assets/images/dustSofa.png";
import tumericSofa from "@/app/assets/images/tumericSofa.png";

import starIcon from "@/app/assets/icons/star_fill.svg";

import profile from "@/app/assets/icons/profile-circle.svg";
import { BsCart2 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import search from "@/app/assets/icons/search.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import { NavLink, SideBar, SignInModal, SignUpModal } from "../index";

const Navbar = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cartItems: any = useSelector((state: RootState) => state.cart);
  const wishList: any = useSelector((state: RootState) => state.wishList);

  const showSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpCancel = () => {
    setIsSignUpOpen(false);
  };

  const homeMenu: any = [
    {
      img: bloomSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: redSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: greenSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: pinkSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: dustSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: tumericSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
  ];

  const bedMenu: any = [
    {
      img: bloomSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: redSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: dustSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: tumericSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
  ];

  const Links = [
    { label: "Home", link: "#", subMenu: homeMenu },
    { label: "Bed", link: "#", subMenu: bedMenu },
    { label: "sofa", link: "#", subMenu: homeMenu },
    { label: "Dressing table", link: "#", subMenu: homeMenu },
    { label: "Wardrobe", link: "#", subMenu: homeMenu },
    { label: "Bean bag", link: "#", subMenu: homeMenu },
    { label: "Curtain", link: "#", subMenu: homeMenu },
    { label: "Office furniture", link: "#", subMenu: homeMenu },
    { label: "Coffee table/ Living  room table", link: "#", subMenu: homeMenu },
    { label: "TV units", link: "#", subMenu: homeMenu },
  ];

  return (
    <div className="relative bg-gray-900 text-white">
      <header className="border-b">
        <div className="container">
          <ul className="flex gap-8 py-2">
            <li>
              <NavLink href="/myorders">Track Order</NavLink>
            </li>
            <li>
              <NavLink href="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/contactus">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/faqs">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <nav>
          <div className="flex gap-3 justify-start items-center py-5">
            <Link href="/" className="shrink-0 cursor-pointer">
              <h1 className="text-primary text-xl font-black text-center">
                Guideline
              </h1>
              <p className="text-sm text-white">group of companies</p>
            </Link>
            <div className="grow flex items-center px-16 gap-3">
              <button onClick={() => setMenuOpen(true)} className="p-[10px] bg-gray-400 text-white shrink-0 flex items-center gap-2">
                <Image src={Menu} alt="menu icon" />
                Menu
              </button>
              <div className="grow flex items-center">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="grow py-2.5 px-3"
                />
                <button className="bg-primary shrink-0 h-[44px] px-2.5">
                  <Image src={search} alt="search" />
                </button>
              </div>
              <button className="p-[10px] bg-gray-400 text-white shrink-0">
                Customize furniture
              </button>
            </div>
            <div className="flex items-center gap-6">
              <button className="shrink-0" onClick={showModal}>
                <Image src={profile} alt="user" />
              </button>
              <NavLink href="/cart" className="shrink-0 relative text-[26px]">
                <BsCart2 />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
              <NavLink href="/wishlist" className="shrink-0 relative text-[24px]">
                <BsHeart />
                {wishList.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {wishList.length}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </nav>
        <ul className="flex items-center justify-between gap-3 ">
          {Links?.map((item: any, index: number) => (
            <li
              key={index}
              className="hover:text-primary transition-all group pb-3"
            >
              <Link href={item?.link}>{item?.label}</Link>
              <div className="absolute w-full min-h-[33vh] bottom-0 translate-y-[100%] left-0 bg-white z-50 hidden group-hover:block hover:block">
                <div className="container py-5">
                  <div className="flex items-center gap-5">
                    <h1 className="text-[14px] text-gray-300 font-bold">
                      The best discount this week{" "}
                    </h1>
                    <span className="text-gray-200 text-[10px] font-normal">
                      Every week you can find the best discount here
                    </span>
                  </div>
                  <div className="flex items-center justify-around flex-wrap mt-5">
                    {item?.subMenu.map((e: any, i: any) => {
                      return (
                        <div
                          key={i}
                          className={`${
                            i == 0 ? "border-0" : "border-l"
                          } p-5 flex flex-col gap-3`}
                        >
                          <Image src={e.img} alt="" />
                          <p className="w-[40px] h-[22px] bg-secondary rounded-full text-[12px] text-white text-center leading-[21px]">
                            {e.discount}
                          </p>
                          <div className="flex gap-2">
                            <s className="text-gray-300 text-[14px]">
                              {e.price}
                            </s>
                            <p className="text-white bg-[#3CB242] text-[14px] px-1">
                              {e.discountedPrice}
                            </p>
                          </div>
                          <h1 className="text-gray-300">{e.title}</h1>
                          <div className="flex gap-3">
                            <div className="flex bg-[#FFF6DC] gap-1 px-2 rounded-md">
                              <Image src={starIcon} alt="" />
                              <p className="text-gray-200 text-[12px]">
                                {e.Reviews}{" "}
                              </p>
                            </div>
                            <p className="text-gray-200 text-[12px]">
                              {e.Reviews} Reviews
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SignInModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        showSignUp={showSignUp}
        isSignUpOpen={isSignUpOpen}
      />
      <SignUpModal
        isSignUpOpen={isSignUpOpen}
        showSignUp={showSignUp}
        handleOk={handleOk}
        handleSignUpCancel={handleSignUpCancel}
      />
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </div>
  );
};

export default Navbar;
