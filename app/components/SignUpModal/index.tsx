"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

const SignUpModal = ({ isSignUpOpen, handleSignUpCancel }: any) => {
  const [showPassword, setShowPasswords] = useState(true);
  const [reenterPassword, setReenterPasswords] = useState(true);

  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (e: any) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (password: any) => {
    // Define your validation criteria
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLengthValid = password.length >= 8 && password.length <= 16;

    // Check if all criteria are met
    const isValidPassword =
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialChar &&
      hasNumber &&
      isLengthValid;

    // Update the state to reflect the validation status
    setIsValid(isValidPassword);
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
              className=" w-max px-10 md:w-[839px] min-h-max max-h-[80vh] rounded-lg text-left transform transition-all "
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="relative bg-white px-4 pt-10 pb-10 sm:p-6 text-gray-900">
                <div
                  className="absolute top-5 right-5"
                  onClick={handleSignUpCancel}
                >
                  <RxCross1 />
                </div>

                <div className="w-max mx-auto pb-10">
                  <h1 className="text-left text-gray-900 text-2xl font-medium">
                    Sign Up Information
                  </h1>
                  <form>
                    <div className="flex flex-col">
                      <label htmlFor="email" className="mt-5 text-[12px] ms-5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        className="w-[368px] h-[48px] px-5 mt-2 border border-gray-100 rounded-md bg-white outline-none"
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
                      <div
                        className={`flex justify-between items-center w-[368px] h-[48px] px-5 mt-2 border ${
                          isValid ? "border-gray-100 " : "border-secondary"
                        } rounded-md`}
                      >
                        <input
                          className="bg-white h-full outline-none w-full"
                          type={showPassword ? "password" : "text"}
                          name="password"
                          id="password"
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Type your Password"
                        />
                        <div onClick={() => setShowPasswords(!showPassword)}>
                          {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
                        </div>
                      </div>
                      {!isValid && (
                        <p className="mt-3 text-secondary text-[12px] font-normal ms-5">
                          Password should be between 8-16 characters, contain{" "}
                          <br />
                          lowercase letters, at least one uppercase letter, a{" "}
                          <br />
                          special character, and at least one number.
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        htmlFor="password"
                        className="mt-4 text-[12px] ms-5"
                      >
                        Re-enter The Password{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex justify-between items-center w-[368px] h-[48px] px-5 mt-2 border border-gray-100 rounded-md">
                        <input
                          className="bg-white h-full outline-none w-full"
                          type={reenterPassword ? "password" : "text"}
                          name="password"
                          id="password"
                          placeholder="Type your Password"
                        />
                        <div
                          onClick={() => setReenterPasswords(!reenterPassword)}
                        >
                          {reenterPassword ? <IoEyeOutline /> : <FiEyeOff />}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between gap-3 mt-5 pr-16">
                      <input type="checkbox" className="-mt-5" />
                      <p className="text-[14px] text-gray-200">
                        By using this form you agree with the storage <br /> and
                        handling of your data by this website.
                      </p>
                    </div>
                  </form>
                  <div className="flex justify-between mt-5">
                    <button className="bg-primary text-white w-[172px] h-[40px] text-[14px]">
                      Create An Account
                    </button>
                  </div>
                  <p className="text-primary text-[12px] mt-3">
                    *Required Fields
                  </p>
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
