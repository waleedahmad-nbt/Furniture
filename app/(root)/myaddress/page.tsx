"use client";
import React, { useState } from "react";
import Select from "react-select";
import { AccountSideBar } from "../components";

const MyAddress = () => {
  
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
      borderColor: state.isFocused ? '#FF6F00' : '',
      '&:hover': {
        border: "1px solid #FF6F00",
      }
    }),
  };

  const options = [
    { label: "pakistan", value: "pakistan" },
    { label: "china", value: "china" },
    { label: "USA", value: "USA" },
    { label: "US", value: "US" },
  ];

  const fields = {
    firstName: "",
    lastName: "",
    displayName: "",
    phoneNumber: "",
    address: "",
    country: "",
    city: "",
  }

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => { return { ...prev, [name]: value } });
  }

  const validateForm = () => {
    let errors: any = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(validateForm()) {
      console.log("submit")
    }
  }

  return (
    <>
      <div>
        <h1 className="text-4xl text-[#1F1F1F] text-center font-medium py-10">
          My Address
        </h1>
        <div className="container bg-white py-10 mb-20">
          <div className="bg-white px-10 py-10 rounded-sm flex flex-wrap mb-16">
            <div className="flex-[0_0_30%] pr-5">
              <AccountSideBar />
            </div>
            <div className="flex-[0_0_70%] pl-5">
              <div className="">
                <h2 className="text-[20px] text-gray-900 font-medium">
                  Home Address
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      County
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Bangalore-560016
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      City
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Akshya Nagar
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Address
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                      Bangalore-560016
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Phone Number
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      353656756 5745
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Alternative Phone Number
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      4545645 756
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] text-gray-900 font-medium">
                  Office Address
                </h2>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      County
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Bangalore-560016
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      City
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Akshya Nagar
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Address
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                      Bangalore-560016
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Phone Number
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      353656756 5745
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-[16px] text-gray-300 font-medium w-[120px]">
                      Alternative Phone Number
                    </h3>
                    <p className="text-[14px] text-gray-200 font-normal ps-16">
                      4545645 756
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-[20px] text-gray-900 font-medium">
                  Add New Address
                </h2>
                <div className="mt-5">
                  <form onSubmit={handleSubmit}>
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="firstName"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="w-[348px] h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                          placeholder="First Name"
                          onChange={handleChange}
                        />
                        {formErrors.firstName && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="lastName"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="w-[348px] h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                        {formErrors.lastName && (
                          <p className="text-red-500 text-xs mt-1">
                            {formErrors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                      <label
                        htmlFor="displayName"
                        className="text-[16px] font-medium text-gray-300"
                      >
                        Display Name
                      </label>
                      <input
                        type="text"
                        name="displayName"
                        id="displayName"
                        className="w-[707px] h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                        placeholder="Display Name"
                        onChange={handleChange}
                      />
                    </div>
                    <p className="text-[12px] text-gray-200 mt-5">
                      This will be how your name will be displayed in the account
                      section and in reviews
                    </p>

                    <div className="flex flex-col gap-2 mt-5">
                      <label
                        htmlFor="alternativePhoneNumber"
                        className="text-[16px] font-medium text-gray-300"
                      >
                        Alternative Phone Number
                      </label>
                      <input
                        type="number"
                        name="alternativePhoneNumber"
                        id="alternativePhoneNumber"
                        className="w-[707px] h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                        placeholder="Alternative Phone Number"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex flex-col gap-2 mt-5">
                      <label
                        htmlFor="address"
                        className="text-[16px] font-medium text-gray-300"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="w-[707px] h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                        placeholder="Address"
                        onChange={handleChange}
                      />
                    </div>

                    <div className="flex gap-5 mt-5">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="country"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          Country
                        </label>
                        <Select
                          className="w-[349px]"
                          id="country"
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

                      <div className="flex flex-col gap-2 ">
                        <label
                          htmlFor="city"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          City
                        </label>
                        <Select
                          className="w-[349px]"
                          id="city"
                          styles={customStyles}
                          options={options}
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
                    </div>

                    <button className="bg-primary text-white w-[175px] h-[52px] mt-5">
                      Save changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAddress;
