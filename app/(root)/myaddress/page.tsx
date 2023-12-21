"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { AccountSideBar } from "../components";
import { AuthGuard } from "@/app/(root)/components/index";
import { useSelector } from "react-redux";
import { userRequest } from "@/requestMethods";

const MyAddress = () => {
  const [userAddress, setUserAddress]: any = useState([]);
  const [filterAddrs, setFilterAddrs]: any = useState("");
  // console.log(filterAddrs);

  const userData = useSelector((state: any) => state.user);

  const fetchUseraddress = async () => {
    try {
      const res = await userRequest.get(`/address/${userData._id}`);
      console.log(res, "fetching address");
      if (res) {
        setUserAddress(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUseraddress();
  }, []);

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

  const cityOptions = [
    { label: "Lahore", value: "Lahore" },
    { label: "Peshawer", value: "Peshawer" },
    { label: "Islamabad", value: "Islamabad" },
    { label: "Karachi", value: "Karachi" },
  ];

  const addressOptions = [
    { label: "Home Address", value: "Home Address" },
    { label: "Office Address", value: "Office Address" },
  ];
  const fields = {
    userId: userData._id,
    addressType: "",
    address: "",
    phoneNumber: "",
    alternativePhoneNumber: "",
    country: "",
    city: "",
  };

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(formData);

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
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log("hello");

    try {
      const res = await userRequest.post(`/address/add`, formData);
      if (res) {
        fetchUseraddress();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filterAddress = (addressType: any) => {
    const filterAdd = userAddress.find((item: any, index: any) => {
      return item.addressType === addressType;
    });
    setFilterAddrs(filterAdd);

    // Update the fields object with default values
    setFormData((prev: any) => {
      return {
        ...prev,
        addressType: filterAdd ? filterAdd.addressType : "",
        address: filterAdd ? filterAdd.address : "",
        phoneNumber: filterAdd ? filterAdd.phoneNumber : "",
        alternativePhoneNumber: filterAdd
          ? filterAdd.alternativePhoneNumber
          : "",
        country: filterAdd ? filterAdd.country : "",
        city: filterAdd ? filterAdd.city : "",
      };
    });
    // console.log(filterAdd, "filterAdd ");
  };

  return (
    <>
      <AuthGuard>
        <div>
          <h1 className="text-3xl text-[#1F1F1F] md:text-5xl text-center font-medium py-10">
            My Address
          </h1>
          <div className="container bg-white py-10 mb-20">
            <div className="bg-white px-0 md:px-10 py-10 rounded-sm flex flex-wrap gap-y-5 mb-16">
              <div className="w-full md:w-[30%] pr-0 md:pr-5">
                <AccountSideBar />
              </div>
              <div className="w-full md:w-[70%] pl-0 md:pl-5">
                <div className="flex flex-col justify-start gap-10">
                  {userAddress &&
                    userAddress.map((item: any, index: any) => {
                      return (
                        <div key={index}>
                          <h2 className="text-[20px] text-gray-900 font-medium">
                            {item.addressType}
                          </h2>
                          <div className="grid grid-cols-2 mt-5">
                            <div className="col-span-1 flex flex-col gap-y-3">
                              <h2 className="text-[16px] text-gray-300 font-medium">
                                County
                              </h2>
                              <h2 className="text-[16px] text-gray-300 font-medium">
                                City
                              </h2>
                              <h2 className="text-[16px] text-gray-300 font-medium">
                                Address
                              </h2>
                              <div className="">
                                <h2 className="text-[16px] text-gray-300 font-medium">
                                  Phone Number
                                </h2>
                                <h2 className="text-[16px] text-gray-300 font-medium">
                                  Alternative Phone Number
                                </h2>
                              </div>
                            </div>

                            <div className="col-span-1 flex flex-col gap-y-2">
                              <p className="text-[14px] text-gray-200 font-normal">
                                {item.country}
                              </p>
                              <p className="text-[14px] text-gray-200 font-normal">
                                {item.city}
                              </p>
                              <p className="text-[14px] text-gray-200 font-normal">
                                {item.address}
                              </p>
                              <p className="text-[14px] text-gray-200 font-normal">
                                {item.phoneNumber}
                              </p>
                              <p className="text-[14px] text-gray-200 font-normal">
                                {item.alternativePhoneNumber}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="mt-10">
                  <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                      <div className="flex items-center gap-10 ">
                        <h2 className="text-[20px] text-gray-900 font-medium">
                          Add New Address
                        </h2>
                        <div className="flex flex-col gap-2">
                          <Select
                            className="w-[250px] h-[40px]"
                            id="country"
                            styles={customStyles}
                            options={addressOptions}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            // value={formData.addressType}
                            onChange={(addressType: any) => {
                              setFormData((prev: any) => {
                                filterAddress(addressType.value);
                                return {
                                  ...prev,
                                  addressType: addressType.value,
                                };
                              });
                            }}
                            placeholder="Select your Address"
                          />
                        </div>
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
                          className="w-full h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                          placeholder="Address"
                          defaultValue={filterAddrs ? filterAddrs.address : ""}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col gap-2 mt-5">
                        <label
                          htmlFor="phoneNumber"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="w-full h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                          placeholder="Phone Number"
                          defaultValue={
                            filterAddrs ? filterAddrs.phoneNumber : ""
                          }
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col gap-2 mt-5">
                        <label
                          htmlFor="alternativePhoneNumber"
                          className="text-[16px] font-medium text-gray-300"
                        >
                          Alternative Phone Number
                        </label>
                        <input
                          type="text"
                          name="alternativePhoneNumber"
                          id="alternativePhoneNumber"
                          className="w-full h-[40px] text-[14px] border ps-5 focus:border-primary outline-none"
                          placeholder="Alternative Phone Number"
                          defaultValue={
                            filterAddrs
                              ? filterAddrs.alternativePhoneNumber
                              : ""
                          }
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-5 mt-5">
                        <div className="flex w-full flex-col gap-2">
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
                            placeholder={
                              filterAddrs ? filterAddrs.country : "Country"
                            }
                            // value={formData.country}
                            onChange={(country: any) =>
                              setFormData((prev: any) => {
                                return { ...prev, country: country.value };
                              })
                            }
                          />
                        </div>

                        <div className="flex w-full flex-col gap-2 ">
                          <label
                            htmlFor="city"
                            className="text-[16px] font-medium text-gray-300"
                          >
                            City
                          </label>
                          <Select
                            className="w-full"
                            id="city"
                            styles={customStyles}
                            options={cityOptions}
                            components={{
                              IndicatorSeparator: () => null,
                            }}
                            placeholder={
                              filterAddrs ? filterAddrs.city : "City"
                            }
                            // value={formData.city}
                            onChange={(city: any) =>
                              setFormData((prev: any) => {
                                return { ...prev, city: city.value };
                              })
                            }
                          />
                        </div>
                      </div>

                      <button className="bg-primary text-white font-medium px-3 py-2 md:px-8 md:py-3 mt-5">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuthGuard>
    </>
  );
};

export default MyAddress;
