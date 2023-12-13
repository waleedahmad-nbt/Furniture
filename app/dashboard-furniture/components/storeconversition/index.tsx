"use client";
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";

const Storeconservation = () => {
  return (
    <div className="">
      <div className="p-5">
        <p className="text-sm text-HeadingColours border-b-[3px] w-max border-dotted text-ubuntu-medium">
          Online store conversion rate
        </p>
        <h1 className="text-lg flex text-ubuntu-medium text-HeadingColours">
          1.2%{" "}
          <span className="flex items-center text-red-600 text-xs ml-2">
            <BsArrowDownShort className="-rotate-45" /> 18%
          </span>
        </h1>
      </div>
      <div className="flex px-5 py-3 cursor-pointer justify-between mt-5 border-b-[1px] hover:bg-gray-100">
        <div className="text-xs text-ubuntu-regular space-y-3">
          <p className="text-HeadingColours">Added to cart</p>
          <p className="text-P_textColour">24 Sections</p>
        </div>
        <div className="flex w-1/3 justify-between items-center">
          <p>14.46% </p>
          <h1 className="text-lg flex text-ubuntu-medium text-HeadingColours">
            <span className="flex items-center text-red-600 text-xs ml-2">
              <BsArrowDownShort className="-rotate-45" /> 18%
            </span>
          </h1>
        </div>
      </div>
      <div className="flex px-5 py-3 cursor-pointer justify-between mt-5 border-b-[1px] hover:bg-gray-100">
        <div className="text-xs text-ubuntu-regular space-y-3">
          <p className="text-HeadingColours">Added to cart</p>
          <p className="text-P_textColour">24 Sections</p>
        </div>
        <div className="flex w-1/3 justify-between items-center">
          <p>14.46% </p>
          <h1 className="text-lg flex text-ubuntu-medium text-HeadingColours">
            <span className="flex items-center text-red-600 text-xs ml-2">
              <BsArrowDownShort className="-rotate-45" /> 18%
            </span>
          </h1>
        </div>
      </div>
      <div className="flex px-5 py-3 cursor-pointer justify-between mt-5 border-b-[1px] hover:bg-gray-100">
        <div className="text-xs text-ubuntu-regular space-y-3">
          <p className="text-HeadingColours">Added to cart</p>
          <p className="text-P_textColour">24 Sections</p>
        </div>
        <div className="flex w-1/3 justify-between items-center">
          <p>14.46% </p>
          <h1 className="text-lg flex text-ubuntu-medium text-HeadingColours">
            <span className="flex items-center text-green-600 text-xs ml-2">
              <BsArrowDownShort className="-rotate-[145deg]" /> 8%
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Storeconservation;
