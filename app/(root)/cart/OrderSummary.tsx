import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import {
  incrementQuantity,
  decrementQuantity,
} from "@/lib/store/slices/Allslices";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const cartItems: any = useSelector((state: RootState) => state.cart);

  const totalPrice = cartItems.reduce((accumulator: any, currentItem: any) => {
    if (currentItem?.discount?.discountedPrice) {
      const itemPrice = parseFloat(currentItem.discount.discountedPrice);
      const itemQuantity = currentItem.quantity;

      return accumulator + itemPrice * itemQuantity;
    } else {
      const itemPrice = parseFloat(currentItem.price);
      const itemQuantity = currentItem.quantity;

      return accumulator + itemPrice * itemQuantity;
    }
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
                <div className="flex items-center gap-5">
                  <div className="flex items-center justify-center h-[74px] w-[100px] shrink-0">
                    <Image
                      src={item?.Images[0]}
                      alt="product"
                      className="shrink-0 max-h-full w-auto"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2 ">
                    <p className="text-[14px] text-gray-300">{item?.title}</p>
                    <div className="flex gap-3 w-[80px] h-[32px] px-3 rounded-md items-center justify-between border border-[#A9A9A9] ">
                      <button
                        onClick={() => {
                          dispatch(decrementQuantity(item._id));
                        }}
                      >
                        -
                      </button>
                      <p>{item?.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(incrementQuantity(item._id));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                {/* <h1>AED {item?.price * item?.quantity}</h1> */}
                {item?.discount?.discountedPrice ? (
                  <span className="text-gray-300 text-xs md:text-sm">
                    AED {item?.discount?.discountedPrice * item?.quantity}
                  </span>
                ) : (
                  <span className="text-gray-300 text-xs md:text-sm">
                    AED {item?.price * item?.quantity}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Subtotal</p>
          <p className="font-medium">AED {totalPrice}</p>
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Shipping</p>
          <p className="font-medium">Free</p>
        </div>

        <div className="flex justify-between items-center px-5 py-5 border-t">
          <p>Total</p>
          <p className="font-medium">AED {totalPrice}</p>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
