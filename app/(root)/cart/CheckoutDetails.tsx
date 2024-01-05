"use client";
// import { publicRequest } from "@/requestMethods";
import React, { useEffect, useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Select from "react-select";
import { useRequestMethods } from "../components";
const CheckoutDetails = ({
  isOrderComplete,
  setIsOrderComplete,
  setCurrentTabIdx,
  cartItems,
  setOrderData,
  setSuccessMsg,
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

  const { publicRequest } = useRequestMethods();

  const countryOptions = [
    { label: "Pakistan", value: "Pakistan" },
    { label: "China", value: "China" },
    { label: "USA", value: "USA" },
    { label: "US", value: "US" },
  ];

  const requiredCart = cartItems.map((item: any, index: any) => {
    return {
      _id: item._id,
      produtTitle: item.title,
      price: item.price,
      qty: item.quantity,
      image: item.Images[0],
      isReviewed: false,
    };
  });

  const totalPrice = requiredCart.reduce(
    (accumulator: any, currentItem: any) => {
      const itemPrice = parseFloat(currentItem.price);
      const itemQuantity = currentItem.qty;

      return accumulator + itemPrice * itemQuantity;
    },
    0
  );

  const [showPassword, setShowPasswords] = useState(true);

  const userData = useSelector((state: any) => state.user);
  const isLoggedIn = userData !== undefined && Object.keys(userData).length > 0;
  console.log(isLoggedIn);

  const initialFormData = {
    customerId: isLoggedIn ? userData._id : "",
    paymentMethod: "",
    products: requiredCart,
    contactInfo: {
      firstName: userData ? userData.firstName : "",
      lastName: userData ? userData.lastName : "",
      phoneNumber: userData ? userData.phoneNumber : "",
      email: userData ? userData.email : "",
      ...(isLoggedIn ? {} : { password: "" }),
    },
    shippingAddress: {
      streetAddress: "",
      country: "",
      townCity: "",
      state: "",
      zipCode: "",
    },
    subtotal: totalPrice,
    shipping: "free",
    total: totalPrice,
  };

  const [formData, setFormData]: any = useState(initialFormData);
  const [errors, setErrors] = useState<any>({});
  const [resMsg, setResMsg] = useState("");

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev: any) => {
      if (type === "radio") {
        // Handle radio buttons
        return { ...prev, paymentMethod: checked ? value : "" };
      }
    });

    setErrors((prev: any) => {
      return { ...prev, [name]: "" };
    });
  };

  const handlePaymentmethod = (e: any) => {
    const { name, value, checked } = e.target;

    setFormData((prev: any) => {
      return { ...prev, paymentMethod: checked ? value : "" };
    });

    setErrors((prev: any) => {
      return { ...prev, [name]: "" };
    });
  };

  const handleContactInfo = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [name]: value,
      },
    }));

    setErrors((prev: any) => {
      return { ...prev, [name]: "" };
    });
  };

  const handleShippingAddress = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      shippingAddress: {
        ...prev.shippingAddress,
        [name]: value,
      },
    }));

    setErrors((prev: any) => {
      return { ...prev, [name]: "" };
    });
  };

  const handleCountryChange = (country: any) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        shippingAddress: { ...prev.shippingAddress, country: country.value },
      };
    });

    setErrors((prev: any) => {
      return { ...prev, country: "" };
    });
  };

  console.log(formData);

  const validateForm = () => {
    const newErrors: any = {};

    Object.keys(formData.contactInfo).forEach((key) => {
      var captilize = key.replace(/([A-Z])/g, " $1").trim();
      captilize = captilize.charAt(0).toUpperCase() + captilize.slice(1);

      if (!formData.contactInfo[key]) {
        newErrors[key] = `Please enter ${captilize}.`;
      }
    });

    Object.keys(formData.shippingAddress).forEach((key) => {
      var captilize = key.replace(/([A-Z])/g, " $1").trim();
      captilize = captilize.charAt(0).toUpperCase() + captilize.slice(1);

      if (!formData.shippingAddress[key]) {
        newErrors[key] = `Please enter ${captilize}.`;
      }
    });

    if (!formData.paymentMethod) {
      newErrors.paymentMethod = "Please enter Payment Method";
    }

    if (formData.paymentMethod == "Pay by Card Credit") {
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Please enter Card Number";
      }
      if (!formData.expirationDate) {
        newErrors.expirationDate = "Please enter Expiration Date";
      }
      if (!formData.cvcCode) {
        newErrors.cvcCode = "Please enter CVC Code";
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    // console.log(newErrors);

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  useEffect(() => {
    setFormData((prev: any) => {
      return { ...prev, products: requiredCart };
    });
  }, [cartItems]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      return;
    }

    if (!isLoggedIn) {
      try {
        const signUpRes = await publicRequest.post(`/user/register`, {
          firstName: formData.contactInfo.firstName,
          lastName: formData.contactInfo.lastName,
          username:
            formData.contactInfo.firstName + formData.contactInfo.lastName,
          phoneNumber: formData.contactInfo.phoneNumber,
          email: formData.contactInfo.email,
          password: formData.contactInfo.password,
        });
        // console.log(signUpRes);

        if (signUpRes) {
          try {
            const res = await publicRequest.post("/order/add", {
              customerId: signUpRes.data.data._id,
              paymentMethod: formData.paymentMethod,
              products: requiredCart,
              contactInfo: {
                firstName: formData.contactInfo.firstName,
                lastName: formData.contactInfo.lastName,
                phoneNumber: formData.contactInfo.phoneNumber,
                email: formData.contactInfo.email,
              },
              shippingAddress: {
                streetAddress: formData.shippingAddress.streetAddress,
                country: formData.shippingAddress.country,
                townCity: formData.shippingAddress.townCity,
                state: formData.shippingAddress.state,
                zipCode: formData.shippingAddress.zipCode,
              },
              subtotal: totalPrice,
              shipping: "free",
              total: totalPrice,
            });
            console.log(res.data.data);

            if (res) {
              setIsOrderComplete(true);
              setCurrentTabIdx((prev: any) => prev + 1);
              setOrderData(res.data.data);
              setSuccessMsg("Your account has also been created successfully");
              setResMsg("");
            }
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error: any) {
        // console.error(error.response.data.error);
        if (error.response.data.error == "user already exists") {
          setResMsg("Your account already exist. Please Login");
        } else {
          setResMsg(error.response.data.error);
        }
      }
    } else {
      try {
        const res = await publicRequest.post("/order/add", formData);
        console.log(res.data.data);

        if (res) {
          setIsOrderComplete(true);
          setCurrentTabIdx((prev: any) => prev + 1);
          setOrderData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
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
                  onChange={handleContactInfo}
                  defaultValue={userData ? userData?.firstName : ""}
                  disabled={isLoggedIn ? true : false}
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
                  onChange={handleContactInfo}
                  defaultValue={userData ? userData?.lastName : ""}
                  disabled={isLoggedIn ? true : false}
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
                onChange={handleContactInfo}
                defaultValue={userData ? userData?.phoneNumber : ""}
                disabled={isLoggedIn ? true : false}
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
                onChange={handleContactInfo}
                defaultValue={userData ? userData?.email : ""}
                disabled={isLoggedIn ? true : false}
              />
              {errors.email && (
                <div className="text-secondary">{errors.email}</div>
              )}
            </div>
            {!isLoggedIn ? (
              <div className="flex flex-col">
                <label htmlFor="password" className="mt-5 text-[12px]">
                  Password
                </label>
                <div className="flex justify-between items-center w-full h-[48px] px-3 mt-2 border">
                  <input
                    className="bg-white h-full w-full outline-none"
                    type={showPassword ? "password" : "text"}
                    name="password"
                    id="password"
                    placeholder="Type your Password"
                    onChange={handleContactInfo}
                  />
                  <div onClick={() => setShowPasswords(!showPassword)}>
                    {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
                  </div>
                </div>
                {errors.password && (
                  <div className="text-secondary">{errors.password}</div>
                )}
              </div>
            ) : (
              ""
            )}

            {resMsg ? <div className="text-secondary mt-3">{resMsg}</div> : ""}
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
                onChange={handleShippingAddress}
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
                // onChange={(country: any) =>
                //   setFormData((prev: any) => {
                //     return { ...prev, country: country.value };
                //   })
                // }
                onChange={handleCountryChange}
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
                onChange={handleShippingAddress}
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
                  onChange={handleShippingAddress}
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
                  onChange={handleShippingAddress}
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
                  onChange={handlePaymentmethod}
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
