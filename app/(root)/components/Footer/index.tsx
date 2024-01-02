import Image from "next/image";
import Instagram from "@/app/assets/icons/Instagram.svg";
import Dribble from "@/app/assets/icons/Dribble.svg";
import Twitter from "@/app/assets/icons/Twitter.svg";
import Youtube from "@/app/assets/icons/Youtube.svg";
import AppStore from "@/app/assets/images/App Store Logo.png";
import PlayStore from "@/app/assets/images/Play Store Logo.png";
import { NavLink } from "../index";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 pt-20 pb-5">
        <div className="container text-white">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 place-items-start border-b border-gray-100 pb-10">
            <div className="pr-5 lg:pr-4">
              <h1 className="font-normal text-[16px]">Do You Need Help?</h1>
              <p className="text-[14px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <h1 className="font-bold text-[22px] mt-5">345-5234-34242</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <p className="text-sm">
                <span className="text-gray-100 mt-5">Email:</span>{" "}
                info@guidline.com
              </p>
              <p className="text-gray-100 text-sm mt-5">Call Center Hours</p>
              <p className="text-sm">Mon-Sun 09:00-19:00</p>
            </div>
            <div className="border-0 lg:border-l border-gray-100 text-[16px] font-normal px-5 md:px-20">
              <h1 className="font-bold text-[18px]">Services</h1>
              <div className="flex flex-col gap-3 mt-6 text-[14px]">
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Bed
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Sofa
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Wardrobe
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Bean Bag
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Curtain
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Office Furniture
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Coffee table/ Living Room Table
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  TV Units
                </p>
              </div>
            </div>
            <div className="text-[16px] font-normal px-5  lg:px-20">
              <h1 className="font-bold text-[18px]">Customized Services</h1>
              <div className="flex flex-col gap-3 mt-6 text-[14px]">
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Services
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Sofa
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Wardrobe
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Bean Bag
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Curtain
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Office Furniture
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  Customized Coffee table/ Living Room Table
                </p>
              </div>
            </div>
            <div className="text-[16px] font-normal px-5 md:px-20">
              <h1 className="font-bold text-[18px]">Pages</h1>
              <div className="flex flex-col gap-3 mt-6 text-[14px]">
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/">Home</NavLink>
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/aboutus">About Us</NavLink>
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/contactus">Contact us</NavLink>
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/myaccount">My Account</NavLink>
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/cart">Cart</NavLink>
                </p>
                <p className="hover:text-primary duration-150 cursor-pointer">
                  <NavLink href="/wishlist">Wishlist</NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row justify-between md:items-center py-5">
            <div className="flex gap-5 items-center">
              <p>Follow us:</p>
              <ul className="flex gap-5 items-center">
                <li className="bg-gray-300 p-2 rounded-full">
                  <Image src={Instagram} alt="Instagram.svg" />
                </li>
                <li className="bg-gray-300 p-2 rounded-full">
                  <Image src={Dribble} alt="Dribble.svg" />
                </li>
                <li className="bg-gray-300 p-2 rounded-full">
                  <Image src={Twitter} alt="Twitter.svg" />
                </li>
                <li className="bg-gray-300 p-2 rounded-full">
                  <Image src={Youtube} alt="Youtube.svg" />
                </li>
              </ul>
            </div>
            {/* <div className="flex flex-col items-start sm:flex-row gap-x-5 gap-y-5 sm:items-center">
              <p>Download App:</p>
              <div className="flex justify-start">
                <Image src={AppStore} alt="" className="" />
                <Image src={PlayStore} alt="" className="ms-2" />
              </div>
            </div> */}
            <p className="text-[12px] md:text-[16px]">
              Copyright 2023 © Guidline. All right reserved. Powered by NBT.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
