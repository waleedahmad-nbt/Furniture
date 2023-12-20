"use client";
import { publicRequest } from "@/requestMethods";
import React, { useState } from "react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const fields = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    description: "",
  };

  const [formData, setFormData] = useState<any>(fields);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(formData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await publicRequest.post(`/contact/add`, formData);
      console.log(res);

      if (res) {
        setMessage(res.data.data.message);
        setFormData(fields);
        setTimeout(() => {
          setMessage("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-10 rounded-lg drop-shadow-xl mt-7">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-y-5">
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pr-2.5">
              <label htmlFor="firstName" className="text-[#4D4D4D]">
                First Name
              </label>
              <input
                required
                name="firstName"
                id="firstName"
                value={formData.firstName}
                placeholder="First Name"
                type="text"
                className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
                onChange={handleChange}
              />
            </div>
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-2.5">
              <label htmlFor="lastName" className="text-[#4D4D4D]">
                Last Name
              </label>
              <input
                required
                name="lastName"
                id="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                type="text"
                className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex-[0_0_100%]">
            <label htmlFor="companyName" className="text-[#4D4D4D]">
              Company Name
            </label>
            <input
              name="companyName"
              id="companyName"
              type="text"
              value={formData.companyName}
              required
              placeholder="Company Name"
              className="h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 w-full outline-primary"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-wrap gap-y-5">
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pr-2.5">
              <label htmlFor="workEmail" className="text-[#4D4D4D]">
                Your work email
              </label>
              <input
                name="email"
                id="workEmail"
                type="email"
                value={formData.email}
                required
                placeholder="Email"
                className="w-full outline-primary h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4"
                onChange={handleChange}
              />
            </div>
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] sm:pl-2.5 ">
              <label htmlFor="phone" className="text-[#4D4D4D]">
                Phone
              </label>
              <input
                name="phone"
                id="phone"
                type="text"
                value={formData.phone}
                required
                placeholder="+1(123) 356 7886"
                onChange={handleChange}
                className="w-full h-[46px] border border-[#DCDCDC] mt-2 rounded-md ps-4 outline-primary"
              />
            </div>
          </div>
          <div className="flex-[0_0_100%]">
            <label htmlFor="description" className="text-[#4D4D4D]">
              Description
            </label>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              value={formData.description}
              required
              placeholder="Please, let us know more about you and the project "
              className="w-full h-[116px] text-gray-300 border border-[#DCDCDC] mt-2 rounded-md p-4 outline-primary"
            ></textarea>
          </div>
          <div className="flex flex-wrap gap-5 justify-between items-center">
            <button
              className="py-[14px] px-[20px] bg-primary text-white rounded-md max-sm:order-2 outline-primary"
              type="submit"
            >
              SEND MESSAGE
            </button>
            <div>
              <p className="text-green">{message && message}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
