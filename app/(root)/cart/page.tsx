"use client";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FiX } from "react-icons/fi";

import angle from "@/app/assets/icons/angle-right.svg";
import { removeCartItem } from "@/lib/store/slices/Allslices";
import CartTotal from "./CartTotal";
import CartTable from "./CartTable";
import Link from "next/link";
import { useState } from "react";
import OrderSummary from "./OrderSummary";
import OrderComplete from "./OrderComplete";
import CheckoutDetails from "./CheckoutDetails";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems: any = useSelector((state: RootState) => state.cart);
  console.log(cartItems);
  // console.log(cartItems[0].Images[0].src);

  const removeItem = (id: string) => {
    const filterCart = cartItems.filter((product: any) => product._id === id);

    if (filterCart.length > 0) {
      dispatch(removeCartItem({ id }));
    }
  };

  const tabs = ["Shopping cart", "Checkout details", "Order complete  "];
  const [currentTabIdx, setCurrentTabIdx] = useState(0);

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

      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-5 mt-5 mb-16">
          <div className="pr-2 w-full lg:w-[60%]">
            <h1 className="text-[20px] font-medium">Cart</h1>

            <div className="flex flex-col sm:flex-row gap-8 mt-5">
              {tabs.map((item: any, index: any) => {
                const isCurrentTab = currentTabIdx === index;
                const isPreviousTab = currentTabIdx >= index;
                const opacity = isCurrentTab || isPreviousTab ? 1 : 0.4;
                const borderBottomStyle =
                  isCurrentTab || isPreviousTab
                    ? "2px solid #1F1F1F"
                    : "2px solid transparent";

                return (
                  <div
                    className={`flex items-center gap-3 cursor-pointer py-3 opacity-${
                      opacity * 100
                    } `}
                    style={{ borderBottom: borderBottomStyle }}
                    key={index}
                    onClick={() => {
                      setCurrentTabIdx(index);
                    }}
                  >
                    <div className="w-[40px] h-[40px] bg-gray-900 text-white rounded-full flex justify-center items-center text-[18px]">
                      {index + 1}
                    </div>
                    <h1 className="font-medium text-[16px]">{item}</h1>
                  </div>
                );
              })}
            </div>

            {currentTabIdx === 0 ? (
              <div>
                <CartTable />
              </div>
            ) : currentTabIdx === 1 ? (
              <div>
                <CheckoutDetails />
              </div>
            ) : (
              <div>
                <OrderComplete />
              </div>
            )}
          </div>

          <div className="w-full lg:w-[40%] lg:pl-10">
            {currentTabIdx == 0 ? (
              <div>
                <CartTotal />
              </div>
            ) : (
              <div>
                <OrderSummary />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
