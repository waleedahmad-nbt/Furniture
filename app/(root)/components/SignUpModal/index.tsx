"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
// import { publicRequest, userRequest } from "@/requestMethods";
import { useRequestMethods } from "../index";
import Image from "next/image";
import loader from "@/app/assets/icons/loader.gif";
import axios from "axios";
const SignUpModal = ({ isSignUpOpen, handleSignUpCancel, showModal }: any) => {
  const { publicRequest } = useRequestMethods();

  const [showPassword, setShowPasswords] = useState(true);
  const [reenterPassword, setReenterPasswords] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData]: any = useState({});
  const [isConfirmValid, setIsConfirmValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const [isResponse, setIsResponse] = useState(true);
  const [resMsg, setResMsg] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (
        formData.email &&
        formData.password &&
        formData.password == formData.confirmPassword &&
        formData.firstName &&
        formData.lastName &&
        formData.username
      ) {
        setLoading(true);
        const res = await publicRequest.post(`/user/register`, {
          email: formData.email,
          password: formData.password,
          lastName: formData.lastName,
          firstName: formData.firstName,
          username: formData.username,
          phoneNumber: formData.phoneNumber,
        });
        // console.log(res);
        if (res) {
          setLoading(false);
          setIsResponse(true);
          setResMsg("");
          handleSignUpCancel();
          showModal();
        }
        setIsConfirmValid(true);
      } else {
        setIsConfirmValid(false);
      }
    } catch (error: any) {
      setLoading(false);
      setIsResponse(false);
      setResMsg(error.response.data.error);
    }
  };

  return (
    <>
      {isSignUpOpen && (
        <div className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center  justify-center min-h-screen px-4 text-center ">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-400 opacity-70"
                onClick={handleSignUpCancel}
              ></div>
            </div>
            <div
              className=" px-0 md:px-10 rounded-lg text-left transform transition-all "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="relative w-full xs:w-[400px] sm:w-[500px] md:w-[768px] bg-white px-4 pt-10 pb-10 sm:p-6 text-gray-900">
                <div
                  className="absolute top-5 right-5 cursor-pointer"
                  onClick={handleSignUpCancel}
                >
                  <RxCross1 />
                </div>

                <div className=" w-auto md:w-max mx-auto pb-10">
                  <h1 className="text-left text-gray-900 text-2xl font-medium">
                    Sign Up Information
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3 sm:w-[368px] mt-3">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mt-5 text-[12px] ms-3"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="w-full h-[48px] px-3 mt-1 border border-gray-100 rounded-md bg-white outline-none"
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          placeholder="First Name"
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mt-5 text-[12px] ms-3"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          className="w-full h-[48px] px-3 mt-1 border border-gray-100 rounded-md bg-white outline-none"
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="username"
                        className="mt-5 text-[12px] ms-3"
                      >
                        User Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full sm:w-[368px] h-[48px] px-3 mt-1 border border-gray-100 rounded-md bg-white outline-none"
                        type="text"
                        name="username"
                        id="username"
                        required
                        placeholder="User Name"
                        onChange={handleChange}
                      />
                      {/* {!isEmail && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-3">
                          Please enter a valid email address.
                        </p>
                      )} */}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="mt-5 text-[12px] ms-3">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full sm:w-[368px] h-[48px] px-3 mt-1 border border-gray-100 rounded-md bg-white outline-none"
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Type your email"
                        onChange={handleChange}
                      />
                      {/* {!isEmail && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-3">
                          Please enter a valid email address.
                        </p>
                      )} */}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="phoneNumber"
                        className="mt-5 text-[12px] ms-3"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full sm:w-[368px] h-[48px] px-3 mt-1 border border-gray-100 rounded-md bg-white outline-none"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        required
                        placeholder="Phone Number"
                        onChange={handleChange}
                      />
                      {/* {!isEmail && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-3">
                          Please enter a valid email address.
                        </p>
                      )} */}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="mt-5 text-[12px] ms-3"
                      >
                        Password <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`flex justify-between items-center w-full sm:w-[368px] h-[48px] px-3 mt-1 border ${"border-gray-100 "} rounded-md`}
                      >
                        <input
                          className="bg-white h-full outline-none w-full"
                          type={showPassword ? "password" : "text"}
                          name="password"
                          id="password"
                          // value={password}
                          // onChange={handlePasswordChange}
                          onChange={handleChange}
                          placeholder="Type your Password"
                        />
                        <div onClick={() => setShowPasswords(!showPassword)}>
                          {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
                        </div>
                      </div>
                      {/* {!isValid && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-3">
                          Password should be between 8-16 characters, contain{" "}
                          <br />
                          lowercase letters, at least one uppercase letter, a{" "}
                          <br />
                          special character, and at least one number.
                        </p>
                      )} */}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="mt-5 text-[12px] ms-3"
                      >
                        Re-enter The Password{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex justify-between items-center w-full sm:w-[368px] h-[48px] px-3 mt-1 border border-gray-100 rounded-md">
                        <input
                          className="bg-white h-full outline-none w-full"
                          type={reenterPassword ? "password" : "text"}
                          name="confirmPassword"
                          id="password"
                          required
                          placeholder="Type your Password"
                          onChange={handleChange}
                        />
                        <div
                          onClick={() => setReenterPasswords(!reenterPassword)}
                        >
                          {reenterPassword ? <IoEyeOutline /> : <FiEyeOff />}
                        </div>
                      </div>
                      {!isConfirmValid && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-3">
                          Password is not correct
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between items-start gap-3 mt-5 pr-16">
                      <div className=" mt-1">
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
                              : "bg-white border border-gray-100 rounded-sm "
                          }text-white flex justify-center items-center w-[20px] h-[20px]`}
                        >
                          <FaCheck />
                        </label>
                      </div>
                      <p className="text-[14px] text-gray-200">
                        By using this form you agree with the storage{" "}
                        <br className="hidden sm:block" /> and handling of your
                        data by this website.
                      </p>
                    </div>

                    <div className="flex justify-between mt-5">
                      <button
                        className={`bg-primary flex justify-center items-center text-white w-[172px] h-[40px] text-[14px]${
                          isChecked
                            ? "cursor-pointer opacity-100"
                            : "cursor-not-allowed opacity-40"
                        }`}
                        disabled={!isChecked}
                        type="submit"
                      >
                        <p>{!loading ? "Create An Account" : ""}</p>
                        {loading ? (
                          <Image src={loader} alt="" className="w-[30px]" />
                        ) : (
                          ""
                        )}
                      </button>
                    </div>
                  </form>

                  {isResponse ? (
                    <p className="text-primary text-[12px] mt-3">
                      *Required Fields
                    </p>
                  ) : (
                    <p className="text-secondary text-[16px] mt-3">{resMsg}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpModal;
