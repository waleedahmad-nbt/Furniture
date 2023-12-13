"use client";
import { FaCheck } from "react-icons/fa6";
import React, { useState } from "react";

const TermsAndConditions = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="tcBanner">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold">
            Terms and Condition{" "}
          </h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>
      <div className="py-20">
        <div className="container bg-silver p-5">
          <h1 className="text-3xl font-medium text-gray-300">
            Terms and Conditions
          </h1>
          <hr className="mt-5 bg-[#A9A9A9]" />
          <h2 className="font-bold mt-5">Your Agreement</h2>
          <div className="p-5 text-[#6B6B6B] text-[17px] font-medium">
            <p>
              Last Revised: December 16, 2013 Welcome to www.lorem-ipsum.info.
              This site is provided as a service to our visitors and may be used
              for informational purposes only. Because the Terms and Conditions
              contain legal obligations, please read them carefully.
            </p>
            <h3>1. YOUR AGREEMENT</h3>
            <p>
              By using this Site, you agree to be bound by, and to comply with,
              these Terms and Conditions. If you do not agree to these Terms and
              Conditions, please do not use this site.
            </p>
            <h3>PLEASE NOTE: </h3>
            <span>
              We reserve the right, at our sole discretion, to change, modify or
              otherwise alter these Terms and Conditions at any time. Unless
              otherwise indicated, amendments will become effective immediately.
              Please review these Terms and Conditions periodically. Your
              continued use of the Site following the posting of changes and/or
              modifications will constitute your acceptance of the revised Terms
              and Conditions and the reasonableness of these standards for
              notice of changes. For your information, this page was last
              updated as of the date at the top of these terms and conditions.
            </span>
            <h3>2. PRIVACY</h3>
            <p>
              Please review our Privacy Policy, which also governs your visit to
              this Site, to understand our practices.
            </p>
            <h3>3. LINKED SITES</h3>
            <p>
              This Site may contain links to other independent third-party Web
              sites ("Linked Sites”). These Linked Sites are provided solely as
              a convenience to our visitors. Such Linked Sites are not under our
              control, and we are not responsible for and does no
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-8 justify-between ">
            <div className="ms-5 flex">
              <input
                className="hidden"
                type="checkbox"
                name=""
                id="checkInp"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="checkInp"
                className={`${
                  isChecked
                    ? "bg-primary rounded-none "
                    : "bg-white border border-gray-100 rounded-md "
                }text-white flex justify-center items-center w-[24px] h-[24px]`}
              >
                <FaCheck />
              </label>
              <span className="text-[17px] font-medium ms-3">
                I confirm that I have read and accept the terms and conditions
                and privacy policy.
              </span>
            </div>
            <div className="ps-5">
              <button className="border-0 text-gray-200">Cancel</button>
              <button
                className={`${
                  isChecked
                    ? "cursor-default opacity-100"
                    : "cursor-not-allowed opacity-40"
                }  bg-primary w-[167px] h-[44px] text-white ms-8`}
                disabled={isChecked}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
