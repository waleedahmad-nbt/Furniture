"use client"
import { useState } from "react";

import star from "@/app/assets/icons/star.svg";
import starFill from "@/app/assets/icons/star_fill.svg";
import starhalf from "@/app/assets/icons/starhalf.svg";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addToCart, addToWhislist, removeWishList } from "@/lib/store/slices/Allslices";
import { toast } from "react-toastify";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import PortalComponent from "../Portal";

const ViewItem = ({ item, close }: any) => {
  const dispatch = useDispatch();
  const cartItems: any = useSelector((state: RootState) => state.cart);
  const wishList: any = useSelector((state: RootState) => state.wishList);

  const handleCart = (item: any) => {
    const filterCart = cartItems.filter(
      (product: any) => product._id === item?._id
    );

    if (filterCart.length <= 0) {
      dispatch(addToCart(item));
      notify();
    }
  };

  const notify = () => toast("Product Added to Cart!");

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

  const [formData, setFormData] = useState<any>({
    size: "",
    color: "",
    amount: 1,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);

    handleCart({ ...item, ...formData });
  };

  const setAmount = (type: string) => {
    if (type === "plus") {
      setFormData((prev: any) => {
        return {
          ...prev,
          amount: prev.amount < item?.qty ? prev.amount + 1 : prev.amount,
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

  // check if exists in wishlist or not
  const existWish = wishList.filter((wish: any) => wish._id === item?._id);
  const existCart = cartItems.filter((cart: any) => cart._id === item?._id);

  return (
    <PortalComponent>
      <div className="w-full h-full bg-black/90 fixed inset-0 z-50">
        <div className="flex items-center justify-center h-full">
          <div className="bg-white w-1/2 h-[70%] py-10 px-7 relative">
            <span onClick={() => close()} className="absolute top-6 right-7 text-2xl text-gray-200 hover:rotate-90 cursor-pointer duration-500">
              <FiX />
            </span>
            <div className="border-b pb-1">
              <h1 className="font-bold text-gray-900 text-2xl">{item?.title}</h1>
              <div className="flex mt-1 gap-1">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, index) => {
                    let number = index + 0.5;
                    return (
                      <>
                        {item?.averageRating >= index + 1 ? (
                          <Image
                            src={starFill}
                            alt="product"
                            width={15}
                            height={15}
                            key={index}
                          />
                        ) : item?.averageRating >= number ? (
                          <Image
                            src={starhalf}
                            alt="product"
                            width={15}
                            height={15}
                            key={index}
                          />
                        ) : (
                          <Image src={star} alt="product" width={15} height={15} key={index}/>
                        )}
                      </>
                    );
                  })}
                </div>
                <span className="text-gray-500 text-[14px]">{item?.totalReviews || "No Reviews"}</span>
              </div>
            </div>
            <div className="flex flex-wrap py-10">
              <div className="w-1/2 flex items-center justify-center">
                <Image src={item?.Images[0]} alt="product" width={500} height={500} />
              </div>
              <div className="w-1/2 pl-10">
                <div className="flex gap-4 items-end">
                  <p className="line-through text-gray-200">AED {item?.price}</p>
                  <h2 className="text-secondary text-2xl font-bold">AED {item?.price}</h2>
                </div>
                <div className="text-gray-200 my-3" dangerouslySetInnerHTML={{ __html: item?.description }}></div>
                <div className="flex items-center gap-4 mt-4 border-b pb-10">
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
                    {existCart ? "Already in Cart" : "Add to Cart"}
                  </button>

                  <button
                    className={`font-bold bg-gray-900 w-[40px] h-[40px] flex items-center justify-center text-2xl rounded-md
                    cursor-pointer ${existWish.length > 0 ? "text-primary" : "text-[#3CB242]"}`}
                    onClick={handleWishList}
                  >
                    {existWish.length > 0 ? <IoHeartSharp /> : <IoHeartOutline />}
                  </button>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-bold text-gray-900"><span className="text-gray-200 mr-3 font-normal">Categories:</span>{item?.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PortalComponent>
  )
}

export default ViewItem
