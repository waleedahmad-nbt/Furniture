"use client";
import React, { useState } from "react";
import Select from "react-select";
const CheckoutDetails = ({
  isOrderComplete,
  setIsOrderComplete,
  setCurrentTabIdx,
}: any) => {
  const customStyles = {
    option: (provided: any) => ({
      ...provided,
    }),
    focus: (provided: any) => ({
      ...provided,
      outlineColor: "#FF6F00",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#6D758F",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      outlineColor: "none",
      borderRadius: "0px",
      boxShadow: "none",
      padding: "5px",
      borderColor: state.isFocused ? "#FF6F00" : "",
      "&:hover": {
        border: "1px solid #FF6F00",
      },
    }),
  };

  const countryOptions = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "China", value: "China" },
    { label: "USA", value: "USA" },
    { label: "US", value: "US" },
  ];

  const fields = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    country: "",
    townCity: "",
    state: "",
    zipCode: "",
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvcCode: "",
  };
  const [formData, setFormData]: any = useState(fields);
  const [errors, setErrors] = useState<any>({});
  // console.log(errors);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev: any) => {
      if (type === "radio") {
        // Handle radio buttons
        return { ...prev, [name]: checked ? value : "" };
      } else {
        // Handle other input types
        return { ...prev, [name]: value };
      }
    });

    setErrors((prev: any) => {
      return { ...prev, [name]: "" };
    });
  };

  // console.log(formData);

  // const validateForm = () => {
  //   let newErrors: any = {};

  //   if (!formData.firstName) {
  //     newErrors.firstName = "First Name is required";
  //   }

  //   if (!formData.lastName) {
  //     newErrors.lastName = "Last Name is required";
  //   }

  //   console.log(newErrors, "newError");

  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
  // };

  const validateForm = () => {
    const newErrors: any = {};

    // Validate each field

    Object.keys(formData).forEach((key) => {
      var captilize = key.replace(/([A-Z])/g, " $1").trim();
      captilize = captilize.charAt(0).toUpperCase() + captilize.slice(1);

      if (!formData[key]) {
        newErrors[key] = `Please enter ${captilize}.`;
      }
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }
    setIsOrderComplete(true);
    setCurrentTabIdx((prev: any) => prev + 1);
    console.log(formData, "formData in Submit");
  };

  return (
    <>
      <div className=" w-full">
        <form onSubmit={handleSubmit}>
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
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <div className="text-secondary">{errors.firstName}</div>
                )}
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
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <div className="text-secondary">{errors.lastName}</div>
                )}
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
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <div className="text-secondary">{errors.phoneNumber}</div>
              )}
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
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="email"
                id="email"
                placeholder="Your Email"
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-secondary">{errors.email}</div>
              )}
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
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="streetAddress"
                id="streetAddress"
                placeholder="Street Address"
                onChange={handleChange}
              />
              {errors.streetAddress && (
                <div className="text-secondary">{errors.streetAddress}</div>
              )}
            </div>

            <div className="flex w-full flex-col gap-2 mt-5">
              <label
                htmlFor="country"
                className="text-[16px] font-medium text-gray-300"
              >
                Country
              </label>
              <Select
                className="w-full"
                id="country"
                styles={customStyles}
                options={countryOptions}
                components={{
                  IndicatorSeparator: () => null,
                }}
                placeholder="Country"
                name="country"
                // value={formData.country}
                onChange={(country: any) =>
                  setFormData((prev: any) => {
                    return { ...prev, country: country.value };
                  })
                }
              />
              {errors.country && (
                <div className="text-secondary">{errors.country}</div>
              )}
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
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="townCity"
                id="townCity"
                placeholder="Town / City"
                onChange={handleChange}
              />
              {errors.townCity && (
                <div className="text-secondary">{errors.townCity}</div>
              )}
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
                  onChange={handleChange}
                />
                {errors.state && (
                  <div className="text-secondary">{errors.state}</div>
                )}
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
                  onChange={handleChange}
                />
                {errors.zipCode && (
                  <div className="text-secondary">{errors.zipCode}</div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white ps-5 pr-10 py-10 mt-5 border-2 rounded-sm shadow-sm">
            <h1 className="text-[20px] font-medium">Payment method</h1>
            <div>
              <div className="px-5 py-2.5 flex gap-5 border items-center mt-5">
                <input
                  className="scale-[1.3] "
                  type="radio"
                  name="paymentMethod"
                  value="Pay by Card Credit"
                  id="payByCard"
                  onChange={handleChange}
                />
                <label htmlFor="payByCard">Pay by Card Credit</label>
              </div>

              <div className="px-5 py-2.5 flex gap-5 border items-center mt-5">
                <input
                  className="scale-[1.3] "
                  type="radio"
                  name="paymentMethod"
                  value="Paypal"
                  id="paypal"
                  onChange={handleChange}
                />
                <label htmlFor="paypal">Paypal</label>
              </div>

              <div className="px-5 py-2.5 flex gap-5 border items-center mt-5">
                <input
                  className="scale-[1.3] "
                  type="radio"
                  name="paymentMethod"
                  value="Cash on delivery"
                  id="cashOnDelivery"
                  onChange={handleChange}
                />
                <label htmlFor="cashOnDelivery">Cash on delivery</label>
              </div>
              {errors.paymentMethod && (
                <div className="text-secondary">{errors.paymentMethod}</div>
              )}
            </div>

            <hr className="bg-gray-400 mt-5" />
            {formData?.paymentMethod == "Pay by Card Credit" ? (
              <div>
                <div className="mt-5">
                  <label
                    htmlFor="cardNumber"
                    className="block mb-2 font-medium text-gray-200 text-[12px]"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="1234 1234 1234"
                    onChange={handleChange}
                  />
                  {errors.cardNumber && (
                    <div className="text-secondary">{errors.cardNumber}</div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label
                      htmlFor="expirationDate"
                      className="block mb-2 font-medium text-gray-200 text-[12px]"
                    >
                      Expiration date
                    </label>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                      name="expirationDate"
                      id="expirationDate"
                      placeholder="MM/YY"
                      onChange={handleChange}
                    />
                    {errors.expirationDate && (
                      <div className="text-secondary">
                        {errors.expirationDate}
                      </div>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block mb-2 font-medium text-gray-200 text-[12px]"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                      name="cvcCode"
                      id="cvcCode"
                      placeholder="CVC Code"
                      onChange={handleChange}
                    />
                    {errors.cvcCode && (
                      <div className="text-secondary">{errors.cvcCode}</div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <button
            className="w-full bg-primary outline-primary text-white mt-5 py-3"
            type="submit"
          >
            Complete Order
          </button>
        </form>
      </div>
    </>
  );
};

export default CheckoutDetails;
