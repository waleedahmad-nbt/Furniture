"use client";
import { useState } from "react";
import Image from "next/image";
import { AccountSideBar, NavLink } from "../components";

const MyAccount = () => {
  const fields = {
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  };

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  function isValidEmail(email: any) {
    // Use a regular expression to check the email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const validateForm = () => {
    let errors: any = {};

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!formData.displayName) {
      errors.displayName = "Display Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("submit");
    }
  };

  return (
    <div className="container">
      <h1 className="text-gray-900 font-medium text-3xl md:text-[48px] text-center my-7">
        My Account
      </h1>
      <div className="bg-white px-4 md:px-10 py-10 rounded-sm flex flex-wrap gap-y-5 mb-16">
        <div className="w-full md:w-[30%]">
          <AccountSideBar />
        </div>
        <div className="w-full md:w-[65%] pl-5">
          <form onSubmit={handleSubmit}>
            <h2 className="text-gray-900 font-medium text-[20px]">
              Account Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-gray-200 font-medium"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  onChange={handleChange}
                  value={formData.firstName}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-gray-200 font-medium"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  onChange={handleChange}
                  value={formData.lastName}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.lastName}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="displayName"
                className="block mb-2 text-gray-200 font-medium"
              >
                Display Name *
              </label>
              <input
                type="text"
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="displayName"
                id="displayName"
                placeholder="Display name"
                onChange={handleChange}
                value={formData.displayName}
              />
              {formErrors.displayName && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.displayName}
                </p>
              )}
              <p className="text-gray-200 text-[12px] mt-2">
                <i>
                  This will be how your name will be displayed in the account
                  section and in reviews
                </i>
              </p>
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-200 font-medium"
              >
                Email *
              </label>
              <input
                type="email"
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="email"
                id="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
              )}
            </div>
            <h2 className="text-gray-900 font-medium text-[20px] mt-10">
              Password
            </h2>
            <div className="mt-5">
              <label
                htmlFor="oldPassword"
                className="block mb-2 text-gray-200 font-medium"
              >
                Old Password
              </label>
              <input
                type="password"
                className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                name="oldPassword"
                id="oldPassword"
                placeholder="Old password"
                onChange={handleChange}
                value={formData.oldPassword}
              />
              {formErrors.oldPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.oldPassword}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div>
                <label
                  htmlFor="newPassword"
                  className="block mb-2 text-gray-200 font-medium"
                >
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="newPassword"
                  id="newPassword"
                  placeholder="New password"
                  onChange={handleChange}
                  value={formData.newPassword}
                />
                {formErrors.newPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.newPassword}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="repeatPassword"
                  className="block mb-2 text-gray-200 font-medium"
                >
                  Repeat New Password
                </label>
                <input
                  type="password"
                  className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
                  name="repeatPassword"
                  id="repeatPassword"
                  placeholder="Repeat new password"
                  onChange={handleChange}
                  value={formData.repeatPassword}
                />
                {formErrors.repeatPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.repeatPassword}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-medium px-3 py-2 md:px-8 md:py-3 mt-5"
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
