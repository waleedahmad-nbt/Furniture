"use client";
import { useState } from "react";
import Image from "next/image";

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
import zoom from "@/app/assets/icons/zoom.svg";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Link from "next/link";

const MultiProductView = ({ item }: any) => {
  const dispatch = useDispatch();

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

  const cartItems: any = useSelector((state: RootState) => state.cart);
  const wishList: any = useSelector((state: RootState) => state.wishList);

  const handleCart = () => {
    const filterCart = cartItems.filter(
      (product: any) => product._id === item?._id
    );
    console.log({ ...item, quantity: 1 });

    if (filterCart.length <= 0) {
      dispatch(addToCart({ ...item, quantity: 1 }));
    }
  };

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

  // check if exists in wishlist or not
  const existWish = wishList.filter((wish: any) => wish._id === item?._id);

  return (
    <>
      <div
        className={`bg-white flex items-center justify-center relative group overflow-hidden h-full`}
      >
        {/* {item?.status && (
          <span className={`absolute top-2 left-3 rounded-2xl px-2 uppercase py-1 text-white font-bold text-[10px] z-10 ${bgColor}`}>
            {item?.status}
          </span>
        )} */}
        <div className="absolute top-2 right-3 z-10">
          <button
            onClick={handleWishList}
            className={`bg-white border rounded-full w-[32px] h-[32px] text-xl flex items-center justify-center 
            ${existWish.length > 0 ? "text-primary" : "text-gray-100"}`}
          >
            {existWish.length > 0 ? <IoHeartSharp /> : <IoHeartOutline />}
          </button>
          <button className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1">
            <Image src={zoom} alt="product" />
          </button>
          <button
            className="bg-white border rounded-full w-[32px] h-[32px] opacity-0 duration-200 group-hover:opacity-100 flex items-center justify-center mt-1"
            onClick={handleCart}
          >
            <Image src={cart} alt="product" />
          </button>
        </div>

        <Link
          href={`/products/details/${item?._id}`}
          onClick={addRecent}
          onMouseEnter={() => setActiveIndex(1)}
          onMouseLeave={() => setActiveIndex(0)}
        >
          {item?.Images?.length > 0 &&
            item?.Images?.map((img: any, index: number) => (
              <div
                className={`mx-auto duration-300 transition-opacity ${
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
                    className="w-auto h-auto"
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
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(0)}
            ></div>
          ))}
      </div>
    </>
  );
};

export default MultiProductView;
