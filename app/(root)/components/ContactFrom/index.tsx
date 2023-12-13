import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white p-6 sm:p-10 rounded-lg drop-shadow-xl mt-7">
      <form>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-y-5">
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pr-2.5">
              <label htmlFor="firstName" className="text-[#4D4D4D]">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
              />
            </div>
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-2.5">
              <label htmlFor="lastName" className="text-[#4D4D4D]">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
              />
            </div>
          </div>
          <div className="flex-[0_0_100%]">
            <label htmlFor="companyName" className="text-[#4D4D4D]">
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
            />
          </div>
          <div className="flex flex-wrap gap-y-5">
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pr-2.5">
              <label htmlFor="workEmail" className="text-[#4D4D4D]">
                Your work email
              </label>
              <input
                id="workEmail"
                type="text"
                className="w-full outline-primary h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4"
              />
            </div>
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-2.5 ">
              <label htmlFor="phone" className="text-[#4D4D4D]">
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="+1(123) 356 7886"
                className="w-full h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 outline-primary"
              />
            </div>
          </div>
          <div className="flex-[0_0_100%]">
            <label htmlFor="description" className="text-[#4D4D4D]">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Please, let us know more about you and the project "
              className="w-full h-[116px] text-gray-300 border border-[#DCDCDC] mt-2 rounded-md p-4 outline-primary"
            ></textarea>
          </div>
          <div className="flex flex-wrap gap-5 justify-between items-center">
            <button className="py-[14px] px-[20px] bg-primary text-white rounded-md max-sm:order-2">
              SEND MESSAGE
            </button>
            <div className="flex gap-3 text-gray-300 max-sm:order-1">
              <input type="checkbox" name="" id="" />
              <p>Subscribe to out newsletters</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
