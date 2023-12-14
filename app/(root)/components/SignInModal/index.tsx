"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";

const Modal = ({
  showModal,
  handleOk,
  handleCancel,
  isModalOpen,
  showSignUp,
}: any) => {
  const [showSignIn, setSignIn] = useState(true);
  const [showPassword, setShowPasswords] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {isModalOpen && (
        <div className="fixed z-30 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center ">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-400 opacity-70"
                onClick={handleCancel}
              ></div>
            </div>
            {showSignIn && !forgotPassword && (
              <div
                className=" px-0 md:px-10 rounded-lg text-left transform transition-all "
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="relative w-full xs:w-[400px] sm:w-[500px] md:w-[768px]  bg-white min-h-[75vh]  px-4 pt-10 pb-10 sm:p-6 text-gray-900">
                  <div
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={handleCancel}
                  >
                    <RxCross1 />
                  </div>

                  <div className="w-full sm:w-max mx-auto pb-10">
                    <h1 className="text-left text-gray-900 text-2xl font-medium">
                      Registered Customers
                    </h1>
                    <p className="text-left text-gray-200 text-[14px] mt-2">
                      If you have an account, sign in with your email address.
                    </p>

                    <form>
                      <div className="flex flex-col">
                        <label
                          htmlFor="email"
                          className="mt-5 text-[12px] ms-5"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          className=" w-full sm:w-[368px] h-[48px] px-5 mt-2 border border-gray-100 rounded-md bg-white outline-none"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Type your email"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label
                          htmlFor="password"
                          className="mt-2 text-[12px] ms-5"
                        >
                          Password <span className="text-red-500">*</span>
                        </label>
                        <div className="flex justify-between items-center w-full sm:w-[368px] h-[48px] px-5 mt-2 border border-gray-100 rounded-md">
                          <input
                            className="bg-white h-full w-full outline-none"
                            type={showPassword ? "password" : "text"}
                            name="password"
                            id="password"
                            placeholder="Type your Password"
                          />
                          <div onClick={() => setShowPasswords(!showPassword)}>
                            {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-start gap-3 mt-5 pr-0 sm:pr-16">
                        <div className="mt-1">
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
                          <br className="hidden md:block" /> and handling of
                          your data by this website.
                        </p>
                      </div>
                    </form>
                    <div className="flex justify-between mt-5 pr-3">
                      <button className="bg-primary text-white w-auto px-10 sm:w-[172px] h-[40px] text-[14px]">
                        Sign In
                      </button>
                      <button
                        className="underline text-[14px]"
                        onClick={() => {
                          setForgotPassword(true);
                          setSignIn(!showSignIn);
                        }}
                      >
                        Forgot Password
                      </button>
                    </div>
                    <p className="text-primary text-[12px] mt-3">
                      *Required Fields
                    </p>
                    <h1 className="text-2xl font-medium mt-3">New Customers</h1>
                    <p className="text-gray-200 text-[12px] mt-2">
                      Creating an account has many benefits: check out faster,{" "}
                      <br />
                      keep more than one address, track orders and more.
                    </p>
                    <button
                      className="text-white bg-[#3CB242] w-[212px] h-[40px] mt-5"
                      onClick={() => {
                        showSignUp();
                        handleCancel();
                      }}
                    >
                      Create An Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {forgotPassword && !showSignIn && (
              <div
                className="px-0 md:px-10 rounded-lg text-left transform transition-all "
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="relative w-full xs:w-[400px] sm:w-[500px] md:w-[768px] bg-white min-h-[75vh] px-4 pt-10 pb-10 sm:p-6 sm:pb-4 text-gray-900">
                  <div
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={() => {
                      handleCancel;
                      setSignIn(!showSignIn);
                      setForgotPassword(!forgotPassword);
                    }}
                  >
                    <RxCross1 />
                  </div>

                  <div className=" w-full sm:w-max mx-auto pt-20">
                    <h1 className="text-left text-gray-900 text-2xl font-medium">
                      Forgot Password
                    </h1>
                    <p className="text-left text-gray-200 text-[14px] mt-2">
                      Type your email and we will send you a reset link for your
                      password.
                    </p>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="mt-5 text-[12px] ms-5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-full sm:w-[368px] h-[48px] px-5 mt-2 border border-[#D6D6D6] rounded-md bg-white outline-none"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Type your email"
                      />
                    </div>
                    <button className="bg-primary text-white w-[172px] h-[40px] text-[14px] mt-5">
                      Reset Button
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
