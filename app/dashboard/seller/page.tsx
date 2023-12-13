"use client";
import React, { useState } from "react";
import Sellerlayout from "../layouts/SellerDashboard";
import Wavechart from "../components/wavechart";
import { FiArrowUpRight } from "react-icons/fi";
import { CiHardDrive } from "react-icons/ci";
import { BsCreditCard2Front } from "react-icons/bs";
import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";
import Product from "@/app/assets/images/Seller/Product.jpeg";
import Instagrampic from "@/app/assets/images/Seller/Instagram.svg"
import Facebookpic from "@/app/assets/images/Seller/facebook.jpg"
import Link from "next/link";

const Seller = () => {
  const [checkTab, setchecktab] = useState(0);

  return (
    <Sellerlayout>
      <div className="w-full">
        <div className="w-1/2 py-4 m-auto">
          <div className="w-full bg-white rounded-lg shadow-md">
            <div className="grid grid-cols-4 gap-4 p-2">
              <div
                onClick={() => setchecktab(0)}
                className={`p-3 rounded-lg cursor-pointer ${
                  checkTab == 0 ? "bg-[rgb(241,241,241)]" : ""
                }`}
              >
                <p className="w-max">
                  Sessions
                </p>
                <hr className="h-[1px] border-dashed border-[1px]" />
                <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                  309
                  <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                    <FiArrowUpRight /> 55%{" "}
                  </span>{" "}
                </p>
              </div>
              <div
                onClick={() => setchecktab(1)}
                className={`p-3 rounded-lg cursor-pointer ${
                  checkTab == 1 ? "bg-[rgb(241,241,241)]" : ""
                }`}
              >
                <p className="w-max">
                  Total Sales
                </p>
                <hr className="h-[1px] border-dashed border-[1px]" />
                <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                  PKR5.76K
                  <span className="text-xs px-1 text-Primary flex items-center text-ubuntu-medium ">
                    <FiArrowUpRight /> 13%{" "}
                  </span>{" "}
                </p>
              </div>
              <div
                onClick={() => setchecktab(2)}
                className={`p-3 rounded-lg cursor-pointer ${
                  checkTab == 2 ? "bg-[rgb(241,241,241)]" : ""
                }`}
              >
                <p className="w-max">
                  Total Orders
                </p>
                <hr className="h-[1px] border-dashed border-[1px]" />
                <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                  4
                  <span className="text-xs px-1 flex items-center text-ubuntu-medium ">
                    ---
                  </span>{" "}
                </p>
              </div>
              <div
                onClick={() => setchecktab(3)}
                className={`p-3 rounded-lg cursor-pointer ${
                  checkTab == 3 ? "bg-[rgb(241,241,241)]" : ""
                }`}
              >
                <p className="w-max">
                  Conversation rate
                </p>
                <hr className="h-[1px] border-dashed border-[1px]" />
                <p className="text-2xl text-HeadingColours flex text-ubuntu-bold">
                  0.97%
                  <span className="text-xs px-1 text-pricesAndDiscount flex items-center text-ubuntu-medium ">
                    <FiArrowUpRight className="rotate-90" /> 55%{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
            <Wavechart />
          </div>
          <div className="w-full mt-5 p-2 bg-white rounded-lg shadow-md">
            <div className="border-b-[1px] py-3 px-2 flex justify-between cursor-pointer">
              <p className="text-ubuntu-medium text-HeadingColours text-base flex items-center">
                <CiHardDrive />
                &nbsp;&nbsp; 10 Orders &nbsp;
                <span className="text-ubuntu-regular text-sm">to fulfill</span>
              </p>
              <TbMathGreater className="text-sm text-P_textColour" />
            </div>
            <div className="py-3 px-2 flex justify-between cursor-pointer">
              <p className="text-ubuntu-medium text-HeadingColours text-base flex items-center">
                <BsCreditCard2Front />
                &nbsp;&nbsp; 50+ Payments &nbsp;
                <span className="text-ubuntu-regular text-sm">to capture</span>
              </p>
              <TbMathGreater className="text-sm text-P_textColour" />
            </div>
          </div>
          <div className="w-full mt-5 p-4 bg-white rounded-lg shadow-md">
            <p className="text-P_textColour text-xs text-ubuntu-regular">
              In the last 14 days
            </p>
            <h2 className="text-HeadingColours text-ubuntu-medium py-4">
              Visitors from these social sites are spending time in your store
            </h2>
            <h2 className="text-HeadingColours py-4 text-sm text-ubuntu-regular">
              Here’s how many pages they viewed and how long they stayed.
            </h2>
            <div className="flex justify-between py-3">
              <span>Product</span>
              <h1 className="text-HeadingColours text-ubuntu-medium">
                Aug 10–Aug 23
              </h1>
            </div>
            <div className="border-[1px] rounded-lg">
              <div className="">
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="space-x-6 p-4 flex items-center">
                    <Image
                      className="h-10 w-10"
                      src={Product}
                      alt="Product.jpg"
                    />
                    <p className="text-sm text-blue-600 hover:underline ">
                      <Link href={"/dashboard/seller"}>
                        Self Steering Mug (20% OFF Azadi Sale)
                      </Link>
                    </p>
                  </div>
                  <p className="text-sm px-2 text-HeadingColours">
                    2,015 views
                  </p>
                </div>
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="space-x-6 p-4 flex items-center">
                    <Image
                      className="h-10 w-10"
                      src={Product}
                      alt="Product.jpg"
                    />
                    <p className="text-sm text-blue-600 hover:underline ">
                      <Link href={"/dashboard/seller"}>
                        ( 2 In1 ) Kitchen Liquid Soap Pump
                      </Link>
                    </p>
                  </div>
                  <p className="text-sm px-2 text-HeadingColours">580 views</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="space-x-6 p-4 flex items-center">
                    <Image
                      className="h-10 w-10"
                      src={Product}
                      alt="Product.jpg"
                    />
                    <p className="text-sm text-blue-600 hover:underline ">
                      <Link href={"/dashboard/seller"}>
                        Nicer Dicer quick Fruit Vegetable Cutter 5 in 1 Slicer
                        Speedy Chopper
                      </Link>
                    </p>
                  </div>
                  <p className="text-sm px-2 text-HeadingColours">516 views</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 p-4 bg-white rounded-lg shadow-md">
            <p className="text-P_textColour text-xs text-ubuntu-regular">
              Since store launch
            </p>
            <h2 className="text-HeadingColours text-ubuntu-medium py-4">
              Visitors from these social sites are spending time in your store
            </h2>
            <h2 className="text-HeadingColours py-4 text-sm text-ubuntu-regular">
              Here’s how many pages they viewed and how long they stayed.
            </h2>
            <div className="flex justify-between py-3">
              <span>Referrer</span>
              <h1 className="text-HeadingColours text-ubuntu-medium">
                Average length of stay
              </h1>
            </div>
            <div className="border-[1px] rounded-lg">
              <div className="">
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="space-x-6 p-4 flex items-center">
                    <Image
                      className="h-10 w-10"
                      src={Instagrampic}
                      alt="Product.jpg"
                    />
                    <div className="space-y-1">
                      <p className="text-sm">Instagram</p>
                      <p className="text-sm">Average page views: 3</p>
                    </div>
                  </div>
                  <p className="text-sm px-2 text-HeadingColours">half a minute</p>
                </div>
                <div className="flex items-center justify-between border-b-[1px]">
                  <div className="space-x-6 p-4 flex items-center">
                    <Image
                      className="h-10 w-10"
                      src={Facebookpic}
                      alt="Product.jpg"
                    />
                    <div className="space-y-1">
                      <p className="text-sm">Facebook</p>
                      <p className="text-sm">Average page views: 1.8</p>
                    </div>
                  </div>
                  <p className="text-sm px-2 text-HeadingColours">less than 20 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sellerlayout>
  );
};

export default Seller;
