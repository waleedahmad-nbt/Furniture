import React from "react";

const CheckoutDetails = () => {
  return (
    <>
      <div className=" w-full">
        <form>
          <div className="bg-white ps-5 pr-10 py-10 mt-5 border-2 rounded-sm shadow-sm">
            <h1 className="text-[20px] font-medium">Contact Infomation</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 font-medium text-gray-200 text-[12px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 font-medium text-gray-200 text-[12px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="phoneNumber"
                className="block mb-2 font-medium text-gray-200 text-[12px]"
              >
                Phone Number
              </label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-200 text-[12px]"
              >
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
          </div>

          <div className="bg-white ps-5 pr-10 py-10 mt-5 border-2 rounded-sm shadow-sm">
            <h1 className="text-[20px] font-medium">Shipping Address</h1>

            <div className="mt-5">
              <label
                htmlFor="streetAddress"
                className="block mb-2 font-medium text-gray-200 text-[12px]"
              >
                Street Address *
              </label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Address"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="country"
                className="block mb-2 font-medium text-gray-200 text-[12px]"
              >
                Country *
              </label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="country"
                id="country"
                placeholder="Country"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="townCity"
                className="block mb-2 font-medium text-gray-200 text-[12px]"
              >
                Town / City *
              </label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="townCity"
                id="townCity"
                placeholder="Town / City"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label
                  htmlFor="state"
                  className="block mb-2 font-medium text-gray-200 text-[12px]"
                >
                  State
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="state"
                  id="state"
                  placeholder="State"
                />
              </div>
              <div>
                <label
                  htmlFor="zipCode"
                  className="block mb-2 font-medium text-gray-200 text-[12px]"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="zipCode"
                  id="zipCode"
                  placeholder="Zip Code"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutDetails;
