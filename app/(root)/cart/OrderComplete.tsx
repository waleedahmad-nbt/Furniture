import React from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Image from "next/image";

const OrderComplete = () => {
  const cartItems: any = useSelector((state: RootState) => state.cart);

  return (
    <>
      <div className="bg-white flex flex-col items-center justify-center gap-5 mt-6 py-10 shadow-md">
        <h2 className="text-[28px] font-medium text-gray-200">Thank you! 🎉</h2>
        <h1 className="text-center text-[40px] font-medium">
          Your order has been <br /> received
        </h1>
        <div className="flex justify-center gap-5">
          {cartItems.map((item: any, index: any) => {
            return (
              <div className="relative w-[80px] h-[96px]">
                <Image
                  className="w-full h-full"
                  src={item?.Images[0]}
                  alt="Product"
                  width={100}
                  height={100}
                />
                <div className="absolute -top-2 -right-2 w-[30px] h-[30px] rounded-full bg-black text-white flex justify-center items-center">
                  {item?.quantity}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-5">
          <h2 className="text-gray-200">Order code:</h2>
          <p className="font-medium">#0123_45678</p>
          <h2 className="text-gray-200">Date:</h2>
          <p className="font-medium">October 19, 2023</p>
          <h2 className="text-gray-200">Total:</h2>
          <p className="font-medium">$1,345.00</p>
          <h2 className="text-gray-200">Payment method:</h2>
          <p className="font-medium">Credit Card</p>
        </div>

        <button className="bg-primary text-white mt-5 w-[70%] h-[44px] outline-primary">
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderComplete;
