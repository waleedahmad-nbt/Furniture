"use client";
import Userlayout from "@/app/dashboard/layouts/userdashboard";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillGift, AiOutlineArrowLeft } from "react-icons/ai";
import Switch from "@mui/material/Switch";
const label = { inputProps: { "aria-label": "Switch Address" } };
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

const EditAddress = () => {
  const [Phone, SetPhone] = useState();
  const [giftcheck, setgiftcheck]: any = useState(false);

  const handlechange = (e: any) => {
    if (e.target.checked === true) {
      setgiftcheck(true);
    } else {
      setgiftcheck(false);
    }
  };

  console.log(giftcheck);
  return (
    <Userlayout>
      <div className="md:px-10 px-2">
        <Link href="/dashboard/user/addresses">
          <p className="text-P_textColour text-sm flex items-center cursor-pointer">
            <AiOutlineArrowLeft />
            &nbsp; Back to addresses
          </p>
        </Link>
        <h1 className="text-2xl text-ubuntu-bold mt-6 text-HeadingColours">
          Edit address
        </h1>
        <p className="text-P_textColour mt-1">
          Enter your address and contact details so we can deliver to you
          quickly and efficiently
        </p>
        <div className="w-max bg-white p-2 mt-6 flex">
          <div className="bg-yellow-100 p-1 flex items-center">
            <AiFillGift className="text-yellow-300" />
            <span className="text-xs text-HeadingColours">
              Save as a gift address
            </span>
          </div>
          <Switch {...label} onChange={handlechange} />
        </div>
        <div
          className={`bg-white p-6 mt-2 lg:w-[80%] w-full lg:grid-cols-2 grid-cols-1 ${
            giftcheck ? "hidden" : "grid"
          } `}
        >
          <div className="border-r-[1px]">
            <div>
              <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
                Location details
              </h1>
              <p className="text-sm text-P_textColour mt-3">
                D71 - Dubai - Dubai
              </p>
              <div className="mt-6 w-[80%]">
                <label
                  className="text-base text-ubuntu-bold text-HeadingColours"
                  htmlFor="Name"
                >
                  Full Address
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="text-sm p-2 h-12 w-full text-P_textColour mt-3 border-gray-300 rounded-md"
                  placeholder="ex.Appartment no 4 , building name , street 3"
                />
              </div>
              <div className="mt-6">
                <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
                  Address label{" "}
                  <span className="text-sm text-P_textColour text-ubuntu-regular">
                    (Optional)
                  </span>
                </h1>
                <div className="mt-3">
                  <input type="radio" name="Adddresslabel" />
                  <label htmlFor="Home">&nbsp;Home</label>
                  <input type="radio" className="ml-10" name="Adddresslabel" />
                  <label htmlFor="Home">&nbsp;Work</label>
                </div>
                <div className="mt-6">
                  <Switch {...label} defaultChecked disabled />{" "}
                  <span className="text-P_textColour text-sm">
                    Set as default address
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              Your contact details
            </h1>
            <h1 className="text-base mt-4 text-ubuntu-bold text-HeadingColours">
              Phone number
            </h1>
            <div>
              <PhoneInput
                placeholder="Enter phone number"
                className="PhoneInputInput outline-none border-0 focus:ring-0 text-P_textColour px-4 py-2 text-sm"
                value={Phone}
                onChange={(value: any) => SetPhone(value)}
                error={
                  Phone
                    ? isValidPhoneNumber(Phone)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>
            <div className="mt-6 w-full">
              <label
                className="text-base text-ubuntu-bold text-HeadingColours"
                htmlFor="Name"
              >
                First name
              </label>{" "}
              <br />
              <input
                type="text"
                className="text-sm p-2 w-full h-12 text-P_textColour mt-3 border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-6 w-full">
              <label
                className="text-base text-ubuntu-bold text-HeadingColours"
                htmlFor="Name"
              >
                Last name
              </label>{" "}
              <br />
              <input
                type="text"
                className="text-sm p-2 w-full h-12 text-P_textColour mt-3 border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div
          className={`bg-white p-6 mt-2 md:w-[80%] w-full lg:grid-cols-2 grid-cols-1 ${
            giftcheck ? "grid" : "hidden"
          } `}
        >
          <div className="border-r-[1px]">
            <div>
              <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
                Gift recipient’s location
              </h1>
              <p className="text-sm text-P_textColour mt-3">
                D71 - Dubai - Dubai
              </p>
              <div className="mt-6 w-[80%]">
                <label
                  className="text-base text-ubuntu-bold text-HeadingColours"
                  htmlFor="Name"
                >
                  Full Address
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="text-sm p-2 h-12 w-full text-P_textColour mt-3 border-gray-300 rounded-md"
                  placeholder="ex.Appartment no 4 , building name , street 3"
                />
              </div>
              <div className="mt-6">
                <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
                  Address label{" "}
                  <span className="text-sm text-P_textColour text-ubuntu-regular">
                    (Optional)
                  </span>
                </h1>
                <div className="mt-3">
                  <input type="radio" name="Adddresslabel" />
                  <label htmlFor="Home">&nbsp;Home</label>
                  <input type="radio" className="ml-10" name="Adddresslabel" />
                  <label htmlFor="Home">&nbsp;Work</label>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:px-6">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              Gift recipient’s details
            </h1>
            <h1 className="text-base mt-4 text-ubuntu-bold text-HeadingColours">
              Recipient’s phone number
            </h1>
            <div>
              <PhoneInput
                placeholder="Enter phone number"
                className="PhoneInputInput outline-none border-0 focus:ring-0 text-P_textColour px-4 py-2 text-sm"
                value={Phone}
                onChange={(value: any) => SetPhone(value)}
                error={
                  Phone
                    ? isValidPhoneNumber(Phone)
                      ? undefined
                      : "Invalid phone number"
                    : "Phone number required"
                }
              />
            </div>
            <div className="mt-6 w-full">
              <label
                className="text-base text-ubuntu-bold text-HeadingColours"
                htmlFor="Name"
              >
                Recipient’s full name
              </label>{" "}
              <br />
              <input
                type="text"
                className="text-sm p-2 w-full h-12 text-P_textColour mt-3 border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div
          className={`bg-white p-6 mt-2 lg:w-[80%] w-full lg:grid-cols-2 grid-cols-1 ${
            giftcheck ? "grid" : "hidden"
          } `}
        >
          <div className="lg:border-r-[1px]">
            <div className="lg:px-6">
              <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
                Your contact details
              </h1>
              <h1 className="text-base mt-4 text-ubuntu-bold text-HeadingColours">
                Phone number
              </h1>
              <div>
                <PhoneInput
                  placeholder="Enter phone number"
                  className="PhoneInputInput outline-none border-0 focus:ring-0 text-P_textColour px-4 py-2 text-sm"
                  value={Phone}
                  onChange={(value: any) => SetPhone(value)}
                  error={
                    Phone
                      ? isValidPhoneNumber(Phone)
                        ? undefined
                        : "Invalid phone number"
                      : "Phone number required"
                  }
                />
              </div>
              <div className="mt-6 w-full">
                <label
                  className="text-base text-ubuntu-bold text-HeadingColours"
                  htmlFor="Name"
                >
                  First name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="text-sm p-2 w-full h-12 text-P_textColour mt-3 border-gray-300 rounded-md"
                />
              </div>
              <div className="mt-6 w-full">
                <label
                  className="text-base text-ubuntu-bold text-HeadingColours"
                  htmlFor="Name"
                >
                  Last name
                </label>{" "}
                <br />
                <input
                  type="text"
                  className="text-sm p-2 w-full h-12 text-P_textColour mt-3 border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 lg:px-4 px-12 rounded lg:inline block lg:absolute static lg:mt-0 mt-10 m-auto right-0 bottom-0">
              SAVE ADDRESS
            </button>
          </div>
        </div>
      </div>
    </Userlayout>
  );
};

export default EditAddress;
