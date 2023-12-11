"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Features, MultiProductView, ProductCard } from "./components";

import arrowL from "@/app/assets/icons/arrow-left.svg";
import mirror from "@/app/assets/products/mirror.png";
import table from "@/app/assets/products/table.png";
import desk from "@/app/assets/products/desk.png";
import chair from "@/app/assets/products/chair.png";
import bed from "@/app/assets/products/bed.png";
import kitchen from "@/app/assets/products/kitchen.png";

import Pro1 from "@/app/assets/products/table_02.png";
import Pro2 from "@/app/assets/products/table_03.png";

import sofa1 from "@/app/assets/banners/sofa_01.png";
import sofa2 from "@/app/assets/banners/sofa_02.png";
import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";

import Banner from "@/app/assets/banners/banner_02.png";

export default function Home() {
  const tabs = ["Bedroom", "Dining Room", "Living Room"];

  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
  // test
  const cats = [
    { title: "Bedroom", image: mirror, quantity: "12" },
    { title: "Dining room", image: table, quantity: "12" },
    { title: "Home office", image: desk, quantity: "12" },
    { title: "Kitchen", image: kitchen, quantity: "12" },
    { title: "Living room", image: chair, quantity: "12" },
    { title: "Bed room", image: bed, quantity: "12" },
  ];

  const products = [
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
  ];

  const newArrival = [
    { name: "Rocket stool", images: [Pro2, kitchen, bed], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro2, Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 0, status: "sale" },
    { name: "Rocket stool", images: [Pro2], priceWas: "27.90", priceNow: "18.80", quantity: 5, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
    { name: "Rocket stool", images: [Pro1], priceWas: "27.90", priceNow: "18.80", quantity: 2, status: "sale" },
  ]

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <>
      <div className="relative bg-cream">
        <div className="container">
          <div className="flex -mx-[15px] Home_Banner">
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] px-[15px]">
              <div className="text-gray-300">
                <span className="text-[18px] font-medium">
                  Trending Furniture
                </span>
                <h1 className="text-[50px] font-medium">
                  Great Furniture
                  <br />
                  Sale
                </h1>
                <p className="border-l-[3px] border-gray-300 my-10 pl-5">
                  Limited time
                  <br />
                  sale up to 30% off
                </p>
                <Link
                  href="#"
                  className="flex items-center gap-3 bg-primary px-6 py-3 w-max text-white"
                >
                  <span>Shop now</span>
                  <Image src={arrowL} alt="icon" />
                </Link>
              </div>
            </div>
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] px-[15px]"></div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <Features />
      </div>

      <div className="container my-10">
        <div className="text-center">
          <h1 className="text-[38px] text-gray-300 font-bold">
            Our Categories
          </h1>
          <p className="text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-5 my-14">
          {cats?.map((item: any, index: number) => (
            <div key={index}>
              <div className="bg-cream h-[170px] flex items-center justify-center">
                <Image src={item?.image} alt="product" className="mx-auto" />
              </div>
              <h3 className="text-center font-medium text-gray-300 mt-3">
                {item?.title}
              </h3>
              <p className="text-center text-gray-300 text-[14px]">
                {item?.quantity} Products
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[38px] text-gray-300 font-bold">
            Best Selling Products
          </h1>
          <div className="flex items-center justify-between">
            {tabs?.map((item: any, index: number) => (
              <button
                onClick={() => setActiveTab(item)}
                className={`px-5 text-gray-200 rounded-md ${
                  activeTab === item ? "bg-gray-100" : ""
                }`}
                key={index}
              >
                {item}
              </button>
            ))}
          </div>
          <Link
            href="#"
            className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]"
          >
            <span>view all</span>
            <Image src={arrowL} alt="icon" />
          </Link>
        </div>
        <div className="w-full my-10">
          <Slider {...settings} className="Product_Slider">
            {products?.map((item: any, index: number) => (
              <div className={`relative min-w-[213px] max-w-[213px]`}>
                <div className="">
                  <ProductCard item={item} key={index} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container my-20">
        <div className="grid grid-cols-2 gap-5">
          <div className="relative">
            <Image src={sofa1} alt="banner" className="w-full h-auto object-cover"/>
            <div className="absolute inset-0 p-10 pr-20">
              <h2 className="text-white font-bold text-[38px]">Redefine you space,<br/> because comfort is everything</h2>
              <p className="text-white mb-5 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
              <Link href="#" className="flex items-center gap-3 bg-primary px-6 py-3 w-max text-white mb-30">
                <span>Shop now</span>
                <Image src={arrowL} alt="icon"/>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image src={sofa2} alt="banner" className="w-full h-auto object-cover"/>
            <div className="absolute inset-0 p-10 pr-20">
              <h2 className="text-black font-bold text-[38px]">Redefine you space,<br/> because comfort is everything</h2>
              <p className="text-black mb-5 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>
              <Link href="#" className="flex items-center gap-3 bg-primary px-6 py-3 w-max text-white mb-30">
                <span>Shop now</span>
                <Image src={arrowL} alt="icon"/>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="flex justify-between">
          <ProductCard item={newArrival[0]} className="shrink-0 w-[213px]" offer />
          <div className="grow mx-5 p-5 pb-7 border-[5px] border-primary h-max">
            <div className="flex gap-6">
              <div className="w-[266px] h-[262px]">
                <MultiProductView item={newArrival[0]} />
              </div>
              <div className="grow">
                <div className="flex mt-3 gap-1">
                  <div className="flex">
                    {Array.from({ length: 4 })?.map((_, index) => (
                      <Image src={starFill} alt="product" width={10} height={10} key={index}/>
                    ))}
                    <Image src={star} alt="product" width={10} height={10}/>
                  </div>
                  <span className="text-gray-500 text-[14px]">3</span>
                </div>
                <h2 className="text-gray-300 font-medium text-[18px] mb-2">Setomono Cup by kristina dam</h2>
                <div className="flex flex-items gap-3">
                  <span className="text-gray-500 line-through">$27.90</span>
                  <span className="text-secondary font-bold">$18.80</span>
                </div>
                <div className="relative mt-5 mb-2">
                  <span className="block h-[6px] w-full bg-[#E3E4E4] rounded-md"></span>
                  <span className={`block absolute inset-0 h-[6px] w-[50%] bg-primary rounded-md`}></span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-500">Available: <span className="text-primary font-bold">15</span></p>
                  <p className="text-gray-500">Sold: <span className="text-primary font-bold">15</span></p>
                </div>
                <ul className="text-gray-500 mt-4">
                  <li className="flex items-center gap-3">
                    <span className="w-[7px] h-[7px] bg-gray-900 mt-1 rounded-full"></span> Lorem Ipsum is simply dummy text of.
                  </li>
                  <li className="flex items-center gap-3 mt-1.5">
                    <span className="w-[7px] h-[7px] bg-gray-900 mt-1 rounded-full"></span>
                    Lorem Ipsum is simply dummy text of the printing.
                  </li>
                  <li className="flex items-center gap-3 mt-1.5">
                    <span className="w-[7px] h-[7px] bg-gray-900 mt-1 rounded-full"></span>
                    Lorem Ipsum is simply dummy text of.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ProductCard item={newArrival[1]} className="shrink-0 w-[213px]" offer />
        </div>
      </div>

      <div className="container my-10">
        <div className="relative h-[300px]">
          <div className="absolute h-full right-0 top-0 z-[-1]">
            <Image src={Banner} alt="banner" className="max-h-[300px]"/>
          </div>
          <div className="Discount_Banner px-10 py-10 h-full flex items-center">
            <div>
              <span className="text-primary uppercase font-medium">Weekend discount</span>
              <h2 className="text-[30px] font-medium text-gray-300">Leave the season in blonwe style</h2>
              <p className="font-medium text-gray-200">Organizing never looked so good, Design yours today!..</p>
              <div className="flex gap-3 items-end mt-3">
                <span className="text-gray-300 font-medium">from</span>
                <p className="text-gray-300 text-[20px] font-medium">$ 247.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[38px] text-gray-300 font-bold">New Arrival</h1>
          <div className="flex items-center justify-between">
            {tabs?.map((item: any, index: number) => (
              <button onClick={() => setActiveTab(item)} className={`px-5 text-gray-200 rounded-md ${activeTab === item ? "bg-gray-100" : ""}`} key={index}>
                {item}
              </button>
            ))}
          </div>
          <Link href="#" className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]">
            <span>view all</span>
            <Image src={arrowL} alt="icon"/>
          </Link>
        </div>
        <div className="w-full my-10">
          <div className="relative flex justify-between">
            {newArrival?.map((item: any, index: number) => (
              <ProductCard item={item} key={index} className="shrink-0 w-[213px]" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
