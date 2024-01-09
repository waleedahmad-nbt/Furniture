"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  addToCart,
  addToWhislist,
  removeWishList,
  setRecentViews,
  setUpdateRecentViews,
} from "@/lib/store/slices/Allslices";

import cart from "@/app/assets/icons/cart_dark.svg";
import { HiShoppingCart } from "react-icons/hi";
import zoom from "@/app/assets/icons/zoom.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewItem from "./ViewItem";

const MultiProductView = ({ item }: any) => {
  const dispatch = useDispatch();

  const [toggleView, setToggleView] = useState<boolean>(false);

  const recentViews: any = useSelector((state: RootState) => state.recentViews);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time as YYYY-MM-DD HH:MM:SS
    const formattedDateTime = `${year}-${String(month).padStart(
      2,
      "0"
    )}-${String(day).padStart(2, "0")} ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    return formattedDateTime;
  };

  const addRecent = () => {
    const exist = recentViews.find((pro: any) => pro?._id === item?._id);

    if (!exist && recentViews?.length < 20) {
      dispatch(setRecentViews({ ...item, time: getCurrentDateTime() }));
    } else {
      dispatch(
        setUpdateRecentViews({
          id: item?._id,
          updatedTime: getCurrentDateTime(),
        })
      );
    }
  };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const bgColor = item?.status === "sale" ? "bg-secondary" : "bg-primary";

  const wishList: any = useSelector((state: RootState) => state.wishList);

  const cartItems: any = useSelector((state: RootState) => state.cart);

  const handleCart = () => {
    const filterCart = cartItems.filter(
      (product: any) => product._id === item?._id
    );

    if (filterCart.length <= 0) {
      dispatch(addToCart({ ...item, quantity: 1 }));
      notify();
    }
  };

  const notify = () =>
    toast("Product Added to Cart!", {
      className: "custom-toast",
    });

  const handleWishList = () => {
    const id = item?._id;
    const filterWishList = wishList.filter(
      (product: any) => product._id === id
    );

    if (filterWishList.length > 0) {
      dispatch(removeWishList({ id }));
    } else {
      dispatch(addToWhislist(item));
    }
  };

  const existWish = wishList.filter((wish: any) => wish?._id === item?._id);
  const existCart = cartItems.filter((cart: any) => cart?._id === item?._id);

  const handleMouseMove = (event: any) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    let noOfImages = item?.Images.length;
    if (noOfImages) {
      const imageIndex = Math.floor((percentage / 100) * noOfImages);
      setActiveIndex(imageIndex);
    }
  };

  return (
    <>
      {toggleView && (
        <ViewItem item={item} close={() => setToggleView(false)} />
      )}
      <div
        className={`bg-white flex items-center justify-center relative group overflow-hidden h-full`}
      >
        <div className="absolute top-2 right-3 z-10">
          <button
            onClick={handleWishList}
            className={`bg-white border rounded-full w-[32px] h-[32px] text-xl flex items-center justify-center 
            ${existWish.length > 0 ? "text-primary" : "text-gray-100"}`}
          >
            {existWish.length > 0 ? <IoHeartSharp /> : <IoHeartOutline />}
          </button>
          <button
            onClick={() => setToggleView(true)}
            className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1"
          >
            <Image src={zoom} alt="product" />
          </button>
          <button
            className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1"
            onClick={handleCart}
          >
            <HiShoppingCart
              className={`${
                existCart.length > 0 ? "text-primary" : "text-gray-200"
              }`}
            />
          </button>
        </div>

        <Link
          href={`/products/details/${item?._id}`}
          onClick={addRecent}
          onMouseLeave={() => setActiveIndex(0)}
          onMouseMove={handleMouseMove}
          className="w-full h-full flex items-center justify-center"
        >
          {item?.Images?.length > 0 &&
            item?.Images?.map((img: any, index: number) => (
              <div
                className={`mx-auto duration-300 transition-opacity h-full ${
                  index === activeIndex
                    ? "relative opacity-100 visible"
                    : "absolute inset-0 opacity-0 invisible pointer-events-none"
                }`}
                key={index}
              >
                {img !== null && (
                  <Image
                    src={img}
                    alt="product"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
        </Link>
        <div className="absolute bottom-0 group-hover:bottom-4 translate-y-full group-hover:translate-y-0 duration-200 opacity-0 group-hover:opacity-100">
          <button
            onClick={handleCart}
            className="bg-primary px-8 py-2 w-max text-white font-medium text-[14px]"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="flex gap-2 mt-1">
        {item?.Images?.length > 1 &&
          item?.Images?.map((item: any, index: number) => (
            <div
              className={`flex h-[4px] w-full cursor-pointer ${
                activeIndex === index ? "bg-gray-300" : "bg-gray-100 opacity-40"
              }`}
              key={index}
            ></div>
          ))}
      </div>
    </>
  );
};

export default MultiProductView;
