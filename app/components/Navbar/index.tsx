"use client";
import Link from "next/link";
import Image from "next/image";

import Menu from "@/app/assets/icons/menu.svg";

import heart from "@/app/assets/icons/heart.svg";
import profile from "@/app/assets/icons/profile-circle.svg";
import cart from "@/app/assets/icons/cart.svg";
import search from "@/app/assets/icons/search.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import { SignInModal, SignUpModal } from "../index";
import { useState } from "react";

const Navbar = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    console.log(isSignUpOpen, "hello");
  };

  const handleSignUpCancel = () => {
    setIsSignUpOpen(false);
  };
  const Links = [
    { label: "Home", link: "#" },
    { label: "Bed", link: "#" },
    { label: "sofa", link: "#" },
    { label: "Dressing table", link: "#" },
    { label: "Wardrobe", link: "#" },
    { label: "Bean bag", link: "#" },
    { label: "Curtain", link: "#" },
    { label: "Office furniture", link: "#" },
    { label: "Coffee table/ Living  room table", link: "#" },
    { label: "TV units", link: "#" },
  ];

  return (
    <div className="bg-gray-900 text-white">
      <header className="border-b">
        <div className="container">
          <ul className="flex gap-8 py-2">
            <li>
              <Link href="#">Track Order</Link>
            </li>
            <li>
              <Link href="aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/contactus">Contact</Link>
            </li>
            <li>
              <Link href="faqs">FAQ</Link>
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
              <button className="p-[10px] bg-gray-400 text-white shrink-0 flex items-center gap-2">
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
              <Link href="/cart" className="shrink-0 relative">
                <Image src={cart} alt="user" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <Link href="/wishlist" className="shrink-0 relative">
                <Image src={heart} alt="user" />
                {wishList.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {wishList.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
        <ul className="flex items-center justify-between gap-3 pb-3">
          {Links?.map((item: any, index: number) => (
            <li key={index}>
              <Link href={item?.link}>{item?.label}</Link>
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
    </div>
  );
};

export default Navbar;
