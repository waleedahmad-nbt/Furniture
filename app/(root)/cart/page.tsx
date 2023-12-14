"use client";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FiX } from "react-icons/fi";

import angle from "@/app/assets/icons/angle-right.svg";
import { removeCartItem } from "@/lib/store/slices/Allslices";
import CartTotal from "./CartTotal";
import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems: any = useSelector((state: RootState) => state.cart);

  const removeItem = (id: string) => {
    const filterCart = cartItems.filter((product: any) => product._id === id);

    if (filterCart.length > 0) {
      dispatch(removeCartItem({ id }));
    }
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

      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-5 mt-5 mb-16">
          <div className="pr-2">
            <h1 className="text-[20px] font-medium">Cart</h1>
            <div className="bg-white rounded-sm mt-6">
              <table className="text-left w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th className="py-3 px-2 md:px-5 text-sm font-medium md:font-semibold">
                      Product
                    </th>
                    <th className="py-3 px-5 text-sm font-medium md:font-semibold">
                      Price
                    </th>
                    <th className="py-3 px-5 text-sm font-medium md:font-semibold">
                      Qty
                    </th>
                    <th className="py-3 px-0 md:px-5 text-sm font-medium md:font-semibold">
                      Sub Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.length > 0 &&
                    cartItems?.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="px-2 text-gray-200 text-xl">
                          <button onClick={() => removeItem(item?._id)}>
                            <FiX />
                          </button>
                        </td>
                        <td className="py-3 px-0 md:px-5">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center h-[74px] max-w-[100px] shrink-0">
                              <Image
                                src={item?.images[0]}
                                alt="product"
                                className="shrink-0 max-h-full w-auto"
                              />
                            </div>
                            <div className="text-gray-300 text-xs md:text-sm hidden xs:block">
                              <p>{item?.name}</p>
                              <span>Sunny Premium</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 ps-5">
                          <span className="text-gray-300 text-xs md:text-sm">
                            AED {item?.priceNow}
                          </span>
                        </td>
                        <td className="py-3 px-5">
                          <div className="w-[20px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center bg-white rounded-md border text-xs md:text-sm">
                            {item?.quantity}
                          </div>
                        </td>
                        <td className="py-3 px-5">
                          <span className="text-gray-300 text-xs md:text-sm">
                            AED {item?.priceNow * item?.quantity}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex mt-10 gap-4">
              <Link
                href="/products"
                className="text-center bg-primary px-2 md:px-5 py-2 text-white font-medium"
              >
                Continue Shopping
              </Link>
              <button className="bg-[#F3EFE5] px-2 md:px-5 py-2 text-gray-200 font-medium">
                Update Cart
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[40%] lg:pl-10">
            <CartTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
