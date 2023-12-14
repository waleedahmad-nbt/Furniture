"use client";
import { useState } from "react";
import { ProductCard } from "../../../components";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GoHeart } from "react-icons/go";

import arrowL from "@/app/assets/icons/arrow-left.svg";
import angle from "@/app/assets/icons/angle-right.svg";

import bed from "@/app/assets/products/bed.png";
import kitchen from "@/app/assets/products/kitchen.png";
import Pro1 from "@/app/assets/products/table_02.png";
import Pro2 from "@/app/assets/products/table_03.png";

import sofa from "@/app/assets/products/sofa.png";
import sofa1 from "@/app/assets/products/sofa_01.png";
import sofa2 from "@/app/assets/products/sofa_02.png";
import sofa3 from "@/app/assets/products/sofa_03.png";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";

import facebook from "@/app/assets/icons/facebook.svg";
import linkedin from "@/app/assets/icons/linkedin.svg";
import mail from "@/app/assets/icons/mail.svg";
import twitter from "@/app/assets/icons/twitter.svg";
import ProductsDeatilsTabs from "./productsDeatilsTabs";

const ProductDetails = () => {
  const [formData, setFormData] = useState<any>({
    size: "",
    color: "",
    amount: 1,
  });

  const newArrival = [
    {
      _id: "1",
      name: "Rocket stool",
      images: [Pro2, kitchen, bed],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 2,
      status: "sale",
    },
    {
      _id: "2",
      name: "Rocket stool",
      images: [Pro2, Pro1],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 0,
      status: "sale",
    },
    {
      _id: "3",
      name: "Rocket stool",
      images: [Pro2],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 5,
      status: "sale",
    },
    {
      _id: "4",
      name: "Rocket stool",
      images: [Pro1],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 2,
      status: "sale",
    },
    {
      _id: "5",
      name: "Rocket stool",
      images: [Pro1],
      priceWas: "27.90",
      priceNow: "18.80",
      quantity: 2,
      status: "new",
    },
  ];

  const data = {
    name: "The BonBaron Bean Bag Chair – Sherpa",
    images: [sofa, sofa1, sofa2, sofa3],
    colors: [
      "#D76C66",
      "#7584DE",
      "#292929",
      "#B0D7E8",
      "#9D763B",
      "#D19D4A",
      "#E7AF96",
      "#BABABA",
      "#D76C66",
      "#A3CAAB",
    ],
    sizes: [
      "90x190+150 cm",
      "100x200+150 cm",
      "120x200+150 cm",
      "90x190+150 cm",
      "150x200+150 cm",
      "180x200+150 cm",
      "200x200+150 cm",
    ],
    priceWas: "27.90",
    priceNow: "18.80",
    quantity: 2,
    status: "sale",
  };

  const [product, setProduct] = useState<any>(data);

  function SamplePrevArrow(props: any) {
    const { className, onClick } = props;
    return <FaAngleLeft className={className} onClick={onClick} />;
  }

  function SampleNextArrow(props: any) {
    const { className, onClick } = props;
    return <FaAngleRight className={className} onClick={onClick} />;
  }

  const settings = {
    customPaging: function (i: any) {
      return (
        <div className="w-[117px] h-[117px] rounded-lg overflow-hidden hidden md:block">
          <Image src={product.images[i]} alt="img" className="w-full h-full" />
        </div>
      );
    },
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  const setAmount = (type: string) => {
    if (type === "plus") {
      setFormData((prev: any) => {
        return {
          ...prev,
          amount: prev.amount < 100 ? prev.amount + 1 : prev.amount,
        };
      });
    } else if (type === "minus") {
      setFormData((prev: any) => {
        return {
          ...prev,
          amount: prev.amount > 1 ? prev.amount - 1 : prev.amount,
        };
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <div className="border-b-[2px] pb-4 border-[#858585]">
          <div className="flex items-center gap-2 mt-4">
            <p className="text-gray-200">Home</p>
            <Image src={angle} alt="icon" />
            <p className="text-gray-200">Living Room</p>
            <Image src={angle} alt="icon" />
            <p className="text-gray-300 font-medium">Product Detail</p>
          </div>
          <p className="text-gray-300 font-medium mt-2">Product Categories</p>
        </div>
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 my-10">
          <div className="w-full">
            <Slider {...settings} className="Product_Details mb-[150px]">
              {product?.images?.map((item: any, index: number) => (
                <div className={`relative w-full h-full`} key={index}>
                  <Image src={item} alt="img" className="w-full" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="-mt-28 md:-mt-0">
            <h1 className="text-[24px] font-medium text-gray-900">
              {product?.name}
            </h1>
            <div className="flex my-4">
              {Array.from({ length: 4 })?.map((_, index) => (
                <Image
                  src={starFill}
                  alt="product"
                  width={24}
                  height={24}
                  key={index}
                />
              ))}
              <Image src={star} alt="product" width={24} height={24} />
            </div>
            <h2 className="text-[24px] font-medium text-gray-900 mb-4">
              AED 904.18
            </h2>
            <p className="font-medium text-gray-900 my-4">Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product?.sizes?.map((item: any, index: number) => (
                <div
                  className={`bg-white px-3 py-2 text-gray-400 border shrink-0 cursor-pointer ${
                    formData.size === item ? "border-primary" : ""
                  }`}
                  key={index}
                  onClick={() =>
                    setFormData((prev: any) => {
                      return { ...prev, size: item };
                    })
                  }
                >
                  {item}
                </div>
              ))}
            </div>
            <p className="font-medium text-gray-900 my-4">Color:</p>
            <div className="flex flex-wrap mt-4 gap-4">
              {product?.colors?.map((item: any, index: any) => (
                <button
                  className={`rounded-full border p-[5px] ${
                    formData.color === item
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  key={index}
                  onClick={() =>
                    setFormData((prev: any) => {
                      return { ...prev, color: item };
                    })
                  }
                >
                  <span
                    className="block rounded-full w-[32px] h-[32px]"
                    style={{ backgroundColor: item }}
                  ></span>
                </button>
              ))}
            </div>
            <p className="font-medium text-gray-900 my-4">Amount:</p>
            <div className="flex items-center gap-4">
              <button
                className="text-[22px] text-[#858585] cursor-pointer"
                onClick={() => setAmount("minus")}
              >
                <FiMinus />
              </button>
              <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-md border">
                {formData?.amount}
              </div>
              <button
                className="text-[22px] text-[#858585] cursor-pointer"
                onClick={() => setAmount("plus")}
              >
                <FiPlus />
              </button>

              <button
                className="font-medium bg-[#3CB242] text-white px-2 md:px-10 py-2.5 rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                Add to Cart
              </button>

              <button
                className="font-bold bg-gray-900 text-[#3CB242] w-[40px] h-[40px] flex items-center justify-center text-2xl rounded-md cursor-pointer"
                onClick={handleSubmit}
              >
                <GoHeart />
              </button>
            </div>

            <div className="flex gap-3">
              <p className="font-medium text-gray-900 my-4 mr-10">Share:</p>
              <Image src={facebook} alt="product" width={25} height={25} />
              <Image src={linkedin} alt="product" width={25} height={25} />
              <Image src={mail} alt="product" width={25} height={25} />
              <Image src={twitter} alt="product" width={25} height={25} />
            </div>

            <p className="font-medium text-gray-900 my-4 mr-10">
              Special Offer:
            </p>

            <div className="w-1/2 mb-5">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">
                  Sold: <span className="text-[#555555] font-medium">700</span>
                </p>
                <p className="text-gray-500">
                  In Stock:{" "}
                  <span className="text-[#555555] font-medium">300</span>
                </p>
              </div>
              <div className="relative mt-1">
                <span className="block h-[6px] w-full bg-[#E3E4E4] rounded-md"></span>
                <span
                  className={`block absolute inset-0 h-[6px] w-[50%] bg-[#3CB242] rounded-md`}
                ></span>
              </div>
            </div>

            <div className="flex gap-2 mt-1">
              <p className="px-2 flex flex-col justify-center items-center gap-6">
                10
                <span className="text-[#858585]">Day</span>
              </p>
              :
              <p className="px-2 flex flex-col justify-center items-center gap-6">
                24<span className="text-[#858585]">Hours</span>
              </p>
              :
              <p className="px-2 flex flex-col justify-center items-center gap-6">
                00<span className="text-[#858585]">Min</span>
              </p>
              :
              <p className="px-2 flex flex-col justify-center items-center gap-6">
                08<span className="text-[#858585]">Sec</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <ProductsDeatilsTabs product={product} />
      </div>

      <div className="container my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-[38px] text-gray-300 font-semibold md:font-bold">Recently View</h1>
          <Link
            href="#"
            className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]"
          >
            <span>view all</span>
            <Image src={arrowL} alt="icon" />
          </Link>
        </div>
        <div className="w-full my-10">
          <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {newArrival?.map((item: any, index: number) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
