"use client";
import React from "react";
import Userlayout from "../../layouts/userdashboard";
import Switch from "@mui/material/Switch";
import { MdCardMembership } from "react-icons/md";
import { BsFillDoorOpenFill } from "react-icons/bs";
const label = { inputProps: { "aria-label": "Switch Address" } };

const Preference = () => {
  return (
    <>
      <Userlayout>
        <div className="px-10">
          <h1 className="text-2xl text-ubuntu-bold text-HeadingColours">
            Preferences
          </h1>
          <p className="text-md my-2 text-P_textColour text-ubuntu-regular">
            Preset your default preferences for a seamless shopping experience
          </p>

          <div className="bg-white w-full p-6">
            <h1 className="text-lg text-ubuntu-bold text-HeadingColours">
              Delivery options
            </h1>
            <div className="flex items-start border-b-[1px] w-[80%] py-4 cursor-pointer">
              <div>
                <Switch {...label} />
              </div>
              <div>
                <h1 className="flex items-center space-x-3 text-lg">
                  <MdCardMembership className="text-Primary" />{" "}
                  <span className="text-HeadingColours text-ubuntu-medium">
                    Get It Together
                  </span>
                </h1>
                <p className="text-P_textColour text-sm">
                  We&apos;ll try to deliver your items in the fewest shipments
                  possible.
                </p>
              </div>
            </div>
            <div className="flex items-start w-[80%] py-4 cursor-pointer">
              <div>
                <Switch {...label} />
              </div>
              <div>
                <h1 className="flex items-center space-x-3 text-lg">
                  <BsFillDoorOpenFill className="text-Primary" />{" "}
                  <span className="text-HeadingColours text-ubuntu-medium">
                    Leave At My Door
                  </span>
                </h1>
                <p className="text-P_textColour text-sm">
                  Your delivery will be left at your door and a photo will be
                  sent to you as confirmation. Valid on prepaid orders only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Userlayout>
    </>
  );
};

export default Preference;
