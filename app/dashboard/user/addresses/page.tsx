"use client";
import React from "react";
import Userlayout from "../../layouts/userdashboard";
import Switch from "@mui/material/Switch";
import Link from "next/link";
const label = { inputProps: { "aria-label": "Switch Address" } };

const Addresses = () => {
  return (
    <>
      <Userlayout>
        <div className="lg:px-10 px-2">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours">
            Addresses
          </h1>
          <p className="text-md my-2 text-P_textColour text-ubuntu-regular">
            Manage your saved addresses for fast and easy checkout across our
            marketplaces
          </p>
          <Link href="/dashboard/user/addresses/newaddress">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              ADD NEW ADDRESS
            </button>
          </Link>
          <h1 className="text-lg py-6 text-ubuntu-bold text-HeadingColours">
            Default address
          </h1>
          <div className="bg-white grid lg:grid-cols-2 grid-cols-1">
            <div className="p-6 space-y-3">
              <div className="space-x-20">
                <span className="text-P_textColour">Name</span>
                <span className="text-sm text-HeadingColours">ABC</span>
              </div>
              <div className="space-x-[62px]">
                <span className="text-P_textColour">Address</span>
                <span className="text-sm text-HeadingColours">
                  1222 , 121, 1122, D71 - Dubai, United Arab Emirates
                </span>
                <span></span>
              </div>
              <div className="space-x-20">
                <span className="text-P_textColour">Phone</span>
                <span className="text-sm text-HeadingColours">
                  +92365863214{" "}
                  <span className="text-blue-600 cursor-pointer">
                    Verify Now
                  </span>{" "}
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="lg:w-3/4 w-full space-x-8 p-6">
                <span className="underline cursor-not-allowed opacity-20">
                  Delete
                </span>
                <Link href="/dashboard/user/addresses/edit">
                  <span className="underline hover:no-underline cursor-pointer opacity-50">
                    Edit
                  </span>
                </Link>
                <span className="text-HeadingColours">Default Address</span>
                <Switch {...label} defaultChecked disabled />
              </div>
            </div>
          </div>
          <h1 className="text-lg py-6 text-ubuntu-bold text-HeadingColours">
            Other addresses
          </h1>
        </div>
      </Userlayout>
    </>
  );
};

export default Addresses;
