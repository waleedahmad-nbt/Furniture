import React from "react";
import { FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { RootState } from "@/lib/store";
import { removeCartItem } from "@/lib/store/slices/Allslices";

import { useDispatch, useSelector } from "react-redux";

const CartTable = () => {
  const dispatch = useDispatch();

  const cartItems: any = useSelector((state: RootState) => state.cart);

  const removeItem = (id: string) => {
    const filterCart = cartItems.filter((product: any) => product._id === id);

    if (filterCart.length > 0) {
      dispatch(removeCartItem({ id }));
    }
  };
  return (
    <div>
      <div className="bg-white w-full rounded-sm mt-6 overflow-x-auto">
        <table className="text-left w-full table-auto">
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
              <th className="py-3 pr-1 md:px-5 text-sm font-medium md:font-semibold">
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
                      <div className="flex items-center justify-center h-[74px] w-[100px] shrink-0">
                        <Image
                          src={item?.Images[0]}
                          alt="product"
                          className="shrink-0 max-h-full w-auto"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="text-gray-300 text-xs md:text-sm ">
                        <p>{item?.title}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 ps-5">
                    {item?.discount?.discountedPrice ? (
                      <span className="text-gray-300 text-xs md:text-sm">
                        AED {item?.discount?.discountedPrice}
                      </span>
                    ) : (
                      <span className="text-gray-300 text-xs md:text-sm">
                        AED {item?.price}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-5">
                    <div className="w-[20px] md:w-[40px] h-[30px] md:h-[40px] flex items-center justify-center bg-white rounded-md border text-xs md:text-sm">
                      {item?.quantity}
                    </div>
                  </td>
                  <td className="py-3 px-5">
                    {item?.discount?.discountedPrice ? (
                      <span className="text-gray-300 text-xs md:text-sm">
                        AED {item?.discount?.discountedPrice * item?.quantity}
                      </span>
                    ) : (
                      <span className="text-gray-300 text-xs md:text-sm">
                        AED {item?.price * item?.quantity}
                      </span>
                    )}
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
  );
};

export default CartTable;
