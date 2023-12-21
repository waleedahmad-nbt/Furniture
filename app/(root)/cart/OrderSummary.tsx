import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FiX } from "react-icons/fi";
import Image from "next/image";

const OrderSummary = () => {
  const cartItems: any = useSelector((state: RootState) => state.cart);
  console.log(cartItems);
  const totalPrice = cartItems.reduce((accumulator: any, currentItem: any) => {
    const itemPrice = parseFloat(currentItem.price);
    const itemQuantity = currentItem.quantity;

    return accumulator + itemPrice * itemQuantity;
  }, 0);

  return (
    <>
      <div className="bg-white w-full px-5  py-10 mt-0 md:mt-[139px]">
        <h1 className="text-[20px] font-medium">Order Summery</h1>

        <div className="flex flex-col mt-5 gap-5">
          {cartItems?.map((item: any, index: any) => {
            return (
              <div
                className="flex items-center justify-between px-5 border-t  py-3"
                key={index}
              >
                <div className="w-[100px] h-[74px]">
                  <Image
                    src={item?.Images[0].src}
                    alt="Product Image"
                    className="shrink-0 max-h-full w-auto"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-2 ">
                  <p className="text-[14px] text-gray-300">{item?.name}</p>
                  <div className="flex gap-3 w-[80px] h-[32px] px-3 rounded-md items-center justify-between border border-[#A9A9A9] ">
                    <button>-</button>
                    <p>{item?.quantity}</p>
                    <button>+</button>
                  </div>
                </div>
                <h1>${item?.price}</h1>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Subtotal</p>
          <p className="font-medium">${totalPrice}</p>
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Shipping</p>
          <p className="font-medium">Free</p>
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Total</p>
          <p className="font-medium">${totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
