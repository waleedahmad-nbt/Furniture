"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoArrowLeft } from "react-icons/go";
import { HiOutlinePencil } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import Image from "next/image";
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { addCustomItem, deleteCustomItem } from "@/lib/store/slices/Allslices";

const Neworder = () => {
  const dispatch = useDispatch();
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState("");
  const [Requireshop, setrequireshop] = useState(false);
  const [checkadditem, setcheckitem] = useState(false);
  const [Orderitem, setOrderitem]: any = useState({});

  const orderItems = useSelector((state: RootState) => state.orderItems);

  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  const submitTage = (e: any) => {
    e.preventDefault();
    setTags([...tags, value]);
    setValue("");
  };

  const delTag = (idx: any) => {
    setTags(
      tags.filter((e, i) => {
        return i !== idx;
      })
    );
  };

  // Add Custom Items

  const handlecustomitem = (e: any) => {
    let name = e.target.name;
    let val = e.target.value;

    setOrderitem({ ...Orderitem, [name]: val });
  };

  // Add Item

  const handleOrderSubmit = () => {
    dispatch(addCustomItem(Orderitem));
  };

  // Delete Item

  const handleDeleteitem = (indexToDelete: number) => {
    dispatch(deleteCustomItem(indexToDelete));
  };

  // Handle Total Calculation
  let totalSubtotal = 0;

  orderItems.forEach((item: any) => {
    const it = Number(item.Price);
    const itqty = Number(item.Quantity);

    const subtotal = it * itqty;
    totalSubtotal += subtotal;
  });

  return (
    <div className="w-full">
      <div className="w-3/5 m-auto py-6 ">
        <h1 className="text-2xl text-HeadingColours text-ubuntu-bold flex items-center ">
          <span>
            <GoArrowLeft className="hover:bg-gray-200 cursor-pointer rounded-md" />
          </span>
          &nbsp; Create order
        </h1>
        <div
          className={`fixed flex justify-center items-center h-screen w-full bg-[#00000079] z-[10] left-0 ${
            checkadditem ? "top-0" : "-top-[100vh]"
          }`}
        >
          <div className="bg-white w-1/3 rounded-2xl overflow-hidden">
            <div className="py-2 text-ubuntu-medium flex justify-between items-center bg-[#F3F3F3] px-4 border-b-[1px]">
              <h2 className="text-sm">Add custom item</h2>
              <p
                onClick={() => setcheckitem(false)}
                className="cursor-pointer"
              >
                x
              </p>
            </div>
            <div className="py-2 px-4 w-full flex justify-between pb-10">
              <div className="text-ubuntu-light space-y-1 w-[48%]">
                <label className="text-sm" htmlFor="Itemname">
                  Item name
                </label>{" "}
                <br />
                <input
                  className="rounded-lg h-8 w-full text-sm"
                  type="text"
                  name="Itemname"
                  onChange={handlecustomitem}
                />
              </div>
              <div className="text-ubuntu-light space-y-1 w-[24%]">
                <label className="text-sm" htmlFor="Price">
                  Price
                </label>{" "}
                <br />
                <input
                  className="rounded-lg h-8  w-full"
                  type="text"
                  name="Price"
                  placeholder="Rs.0.00"
                  onChange={handlecustomitem}
                />
              </div>
              <div className="text-ubuntu-light space-y-1 w-[24%]">
                <label className="text-sm" htmlFor="Quantity">
                  Quantity
                </label>{" "}
                <br />
                <input
                  className="rounded-lg h-8 w-full"
                  type="number"
                  name="Quantity"
                  onChange={handlecustomitem}
                />
              </div>
            </div>
            <div className="px-4 py-2 space-x-2 text-ubuntu-light">
              <input
                type="checkbox"
                className="text-HeadingColours focus:outline-none focus:ring-0 rounded-md"
              />
              <span className="text-sm">Item is taxable</span>
            </div>
            <div className="px-4 space-x-2 text-ubuntu-light">
              <input
                type="checkbox"
                onClick={() => setrequireshop(!Requireshop)}
                className="text-HeadingColours focus:outline-none focus:ring-0 rounded-md"
              />
              <span className="text-sm">Item requires shipping</span>
            </div>
            <div
              className={`py-1 text-ubuntu-light px-4 mt-4 space-y-2 text-sm w-full ${
                Requireshop ? "block" : "hidden"
              }`}
            >
              <p>Item weight (optional)</p>
              <div className="flex w-4/6">
                <div className="text-ubuntu-light space-y-1 w-[80%]">
                  <input
                    className="rounded-lg h-8 w-full"
                    type="number"
                    name="Weight"
                  />
                </div>
                <div className="px-2">
                  <select className="border rounded-lg px-3 py-1">
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                    <option value="lb">lb</option>
                    <option value="oz">oz</option>
                  </select>
                </div>
              </div>
              <p>Used to calculate shipping rates accurately</p>
            </div>
            <div className="bg-[#F3F3F3] border-t-[1px] py-2 flex justify-end px-4">
              <div className=" space-x-3 text-ubuntu-light">
                <button
                  onClick={() => setcheckitem(false)}
                  className="bg-gray-200 px-2 rounded-lg py-1 text-sm text-HeadingColours opacity-90 hover:opacity-100 "
                >
                  Cancel
                </button>
                <button
                  onClick={handleOrderSubmit}
                  className="bg-HeadingColours px-2 rounded-lg py-1 text-sm text-white opacity-90 hover:opacity-100 shadow-sm"
                >
                  Add Item
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 ">
            <div className="bg-white px-4 border-[1px] py-5 rounded-xl w-full space-y-2">
              <div className="flex justify-between">
                <p className="text-sm text-HeadingColours text-ubuntu-medium">
                  Products
                </p>
                <p
                  onClick={() => setcheckitem(true)}
                  className="text-xs cursor-pointer text-blue-600 hover:underline text-ubuntu-regular"
                >
                  Add Custom Item
                </p>
              </div>
              <div className="flex space-x-4">
                <div className="h-8 w-5/6 border-[1px] flex items-center rounded-lg">
                  <AiOutlineSearch className="ml-1 text-xl text-P_textColour" />
                  <input
                    className="outline-none bg-transparent w-full focus:ring-0 text-sm border-none text-ubuntu-regular"
                    placeholder="Search Products"
                    type="text"
                  />
                </div>
                <button className="text-HeadingColours border-[1px] px-4 py-1 text-sm rounded-lg text-ubuntu-medium">
                  Browse
                </button>
              </div>
              <div
                className={`text-HeadingColours py-4 ${
                  orderItems.length > 0 ? "block" : "hidden"
                }`}
              >
                <div className="flex justify-between text-ubuntu-regular pb-2">
                  <h2 className="text-sm">Product</h2>
                  <div className="w-2/5 flex justify-between">
                    <h2 className="w-1/2 text-sm">Quantity</h2>
                    <h2 className="w-1/2 text-sm">Total</h2>
                  </div>
                </div>
                {orderItems.length > 0
                  ? orderItems.map((item: any, index: number) => {
                      return (
                        <div
                          key={index}
                          className="flex justify-between border-t-[1px]"
                        >
                          <div className="py-2 flex space-x-4 items-start">
                            <div className="border-[1px] w-max p-2 mt-2">
                              <Image src={""} alt="." />
                            </div>
                            <div className="text-sm text-ubuntu-regular space-y-1">
                              <p>{item.Itemname}</p>
                              <p className="text-P_textColour">
                                Requires shipping
                              </p>
                              <p className="text-blue-600 hover:underline cursor-pointer">
                                {item.Price}
                              </p>
                            </div>
                          </div>
                          <div className="w-2/5 py-2 text-ubuntu-regular flex justify-between text-sm items-start">
                            <input
                              type="number"
                              value={item.Quantity}
                              className="w-4/12 h-8 rounded-lg text-sm"
                            />
                            <p>
                              <span>Rs.</span>
                              {item.Price * item.Quantity}
                            </p>
                            <div className="p-1 rounded-md hover:bg-gray-200 h-max cursor-pointer">
                              <BsFillTrashFill
                                onClick={() => handleDeleteitem(index)}
                                className="text-P_textColour"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ""}
              </div>
            </div>
            <div className=" bg-white mt-4 px-4 border-[1px] py-5 h-max rounded-xl w-full">
              <h1 className="text-ubuntu-medium text-sm text-HeadingColours">
                Payment
              </h1>
              <div className="bg-white mt-4 px-4 border-[1px] py-5 h-max rounded-xl w-full grid grid-cols-3">
                <div className=" col-span-2 grid grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-ubuntu-medium text-sm">Subtotal</p>
                    <p className="text-P_textColour text-ubuntu-regular text-sm">
                      Add discount
                    </p>
                    <p className="text-P_textColour text-ubuntu-regular text-sm">
                      Add Shiping or dilivery
                    </p>
                    <p className="text-P_textColour text-ubuntu-regular text-sm">
                      Estimated tax
                    </p>
                    <p className="text-ubuntu-medium text-sm">Total</p>
                  </div>
                  <div className="">
                    <div className=" mt-8 space-y-3 text-P_textColour text-ubuntu-regular text-sm">
                      <p className="mt-1">---</p>
                      <p>---</p>
                      <p>Not calculated</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3  text-P_textColour text-ubuntu-regular text-sm flex flex-col items-end">
                  <p className="text-HeadingColours">
                    &nbsp;Rs.<span>{totalSubtotal}</span>
                  </p>
                  <p>&nbsp;Rs 0.00</p>
                  <p>&nbsp;Rs 0.00</p>
                  <p>&nbsp;Rs 0.00</p>
                  <p className="text-HeadingColours text-ubuntu-medium">
                    &nbsp;Rs. <span>{totalSubtotal}</span>
                  </p>
                </div>
              </div>
              <div className="border-b-[1px]">
                <p className=" text-ubuntu-regular text-HeadingColours text-sm py-6">
                  Add a product to calculate total and view payment options.
                </p>
              </div>
              <div className="border-b-[1px]">
                <p className=" text-ubuntu-regular text-HeadingColours text-sm py-6">
                  Taxes may be estimates until the order is created. Learn
                  more about{" "}
                  <span className="text-blue-600 underline cursor-pointer">
                    estimated taxes
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" bg-white px-4 border-[1px] py-5 h-max rounded-xl w-full flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-ubuntu-medium text-sm text-HeadingColours">
                  Notes
                </p>
                <p className="text-sm text-ubuntu-regular text-P_textColour">
                  No Notes
                </p>
              </div>
              <span>
                <div className="w-max h-max p-1 hover:bg-gray-200 rounded-md cursor-pointer">
                  <HiOutlinePencil className="text-P_textColour" />
                </div>
              </span>
            </div>
            <div className=" bg-white mt-4 px-4 border-[1px] py-5 h-max rounded-xl w-full flex items-start">
              <div className="space-y-2 w-full">
                <p className="text-ubuntu-medium text-sm text-HeadingColours">
                  Customer
                </p>
                <div className="h-8 w-full border-[1px] flex items-center rounded-lg">
                  <AiOutlineSearch className="ml-1 text-xl text-P_textColour" />
                  <input
                    className="outline-none w-full bg-transparent focus:ring-0 text-sm border-none text-ubuntu-regular"
                    placeholder="Search Products"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className=" bg-white mt-4 px-4 border-[1px] py-5 h-max rounded-xl w-full flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-ubuntu-medium text-sm text-HeadingColours">
                  Market
                </p>
                <p className="text-sm text-ubuntu-regular text-P_textColour leading-[1.7]">
                  Primary market <br />
                  Pakistan (PKR Rs)
                </p>
              </div>
              <span>
                <div className="w-max h-max p-1 hover:bg-gray-200 rounded-md cursor-pointer">
                  <HiOutlinePencil className="text-P_textColour" />
                </div>
              </span>
            </div>
            <div className=" bg-white mt-4 px-4 border-[1px] py-5 h-max rounded-xl w-full space-y-2">
              <div className="flex justify-between w-full">
                <p className="text-ubuntu-medium text-sm text-HeadingColours">
                  Tags
                </p>
                <span>
                  <div className="w-max h-max p-1 hover:bg-gray-200 rounded-md cursor-pointer">
                    <HiOutlinePencil className="text-P_textColour" />
                  </div>
                </span>
              </div>
              <form action="" onSubmit={submitTage}>
                <input
                  type="text"
                  onChange={changeValue}
                  value={value}
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                />
              </form>
              <div className="flex flex-wrap">
                {tags &&
                  tags.map((e: any, i: any) => {
                    return (
                      <>
                        <span className="bg-gray-200 h-max rounded m-1 text-xs p-1 flex justify-center items-center px-2">
                          {e} &nbsp;
                          <HiXMark
                            onClick={() => delTag(i)}
                            className="cursor-pointer"
                          />
                        </span>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neworder;
