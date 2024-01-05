"use client";

import { useEffect, useRef, useState } from "react";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Select from "react-select";

import { FaAngleDown } from "react-icons/fa6";

const CartTotal = ({ setCurrentTabIdx }: any) => {
  const cartItems: any = useSelector((state: RootState) => state.cart);

  // const totalPrice = cartItems.reduce(
  //   (total: any, item: any) => total + +item.price,
  //   0
  // );
  const totalPrice = cartItems.reduce((accumulator: any, currentItem: any) => {
    if (currentItem?.discount?.discountedPrice) {
      const itemPrice = parseFloat(currentItem.discount.discountedPrice);
      const itemQuantity = currentItem.quantity;

      return accumulator + itemPrice * itemQuantity;
    } else {
      const itemPrice = parseFloat(currentItem.price);
      const itemQuantity = currentItem.quantity;

      return accumulator + itemPrice * itemQuantity;
    }
  }, 0);

  const shipping = useRef<any>(null);
  const [toggleShipping, setToggleShipping] = useState<boolean>(false);
  const [togglePromo, setTogglePromo] = useState<boolean>(false);

  const fields = {
    country: "",
    city: "",
    district: "",
    ward: "",
  };

  const [formData, setFormData] = useState<any>(fields);
  const [promoCode, setPromoCode] = useState<string>("");

  const options = [
    { label: "pakistan", value: "pakistan" },
    { label: "china", value: "china" },
    { label: "USA", value: "USA" },
    { label: "US", value: "US" },
  ];

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
    }),
    focus: (provided: any) => ({
      ...provided,
      outline: "none",
      border: "none",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#6D758F",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      outline: "none",
      borderRadius: "10px",
      boxShadow: "none",
      padding: "5px",
      borderColor: state.isFocused ? "#FF6F00" : "",
      "&:hover": {
        border: "1px solid #FF6F00",
      },
    }),
  };

  // Function to check if all fields are filled
  const areAllFieldsFilled = () => {
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <div>
      <h1 className="text-[20px] font-medium">Your Cart</h1>
      <div className="flex items-center justify-between px-5 mt-8 mb-3">
        <span className="text-[#555555]">Sub Total</span>
        <p>AED {totalPrice?.toFixed(2)}</p>
      </div>

      {/* <div
        className={`flex items-center justify-between px-5 py-2 rounded-md group cursor-pointer select-none ${
          toggleShipping ? "text-gray-900 active" : "bg-white text-[#555555]"
        }`}
        onClick={() => setToggleShipping(!toggleShipping)}
      >
        <p>Free Shipping</p>
        <FaAngleDown className="mt-1 group-[.active]:rotate-180" />
      </div>

      <div
        className="px-5 overflow-hidden duration-300"
        style={{ height: toggleShipping ? "max-content" : "0" }}
      >
        <div className="py-4" ref={shipping}>
          <div>
            <Select
              className="w-full"
              styles={customStyles}
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              value={formData.country}
              onChange={(country: any) =>
                setFormData((prev: any) => {
                  return { ...prev, country: country };
                })
              }
            />
          </div>
          <div className="mt-4">
            <Select
              className="w-full"
              styles={customStyles}
              options={options}
              placeholder="Select City"
              components={{
                IndicatorSeparator: () => null,
              }}
              value={formData.city}
              onChange={(city: any) =>
                setFormData((prev: any) => {
                  return { ...prev, city: city };
                })
              }
            />
          </div>
          <div className="mt-4">
            <Select
              className="w-full"
              styles={customStyles}
              placeholder="Select District"
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              value={formData.district}
              onChange={(district: any) =>
                setFormData((prev: any) => {
                  return { ...prev, district: district };
                })
              }
            />
          </div>
          <div className="mt-4">
            <Select
              className="w-full"
              styles={customStyles}
              placeholder="Select Ward"
              options={options}
              components={{
                IndicatorSeparator: () => null,
              }}
              value={formData.ward}
              onChange={(ward: any) =>
                setFormData((prev: any) => {
                  return { ...prev, ward: ward };
                })
              }
            />
          </div>
          <div className="flex items-center justify-between my-5">
            <span className="text-[#555555]">Fee Shipping:</span>
            <p>AED 0</p>
          </div>
          <button
            disabled={!areAllFieldsFilled()}
            className={`w-full py-2 font-medium ${
              areAllFieldsFilled()
                ? "bg-gray-200 text-white"
                : "bg-[#F3EFE5] text-gray-200"
            }`}
          >
            Update
          </button>
        </div>
      </div> */}

      <div
        className={`flex items-center mt-2 justify-between px-5 py-2 rounded-md group cursor-pointer select-none ${
          togglePromo ? "text-gray-900 active" : "bg-white text-[#555555]"
        }`}
        onClick={() => setTogglePromo(!togglePromo)}
      >
        <p>Apply Promo Code</p>
        <FaAngleDown className="mt-1 group-[.active]:rotate-180" />
      </div>

      <div
        className="px-5 overflow-hidden duration-300"
        style={{ height: togglePromo ? "max-content" : "0" }}
      >
        <div className="my-4">
          <input
            type="text"
            className="w-full px-4 py-3 rounded-[10px] outline-none border focus:border-primary"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <button className="bg-[#F3EFE5] w-full py-2 text-gray-200 font-medium mb-4">
          Apply
        </button>
      </div>

      <div className="flex items-center justify-between px-5 font-medium my-6">
        <span>Total</span>
        <p>AED {totalPrice?.toFixed(2)}</p>
      </div>

      <button
        className="bg-primary w-full py-2 text-white font-medium"
        onClick={() => setCurrentTabIdx(1)}
      >
        Payment Process
      </button>
    </div>
  );
};

export default CartTotal;
