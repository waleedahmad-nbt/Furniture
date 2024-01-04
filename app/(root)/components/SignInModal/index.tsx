"use client";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import loader from "@/app/assets/icons/loader.gif";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setLoginUser } from "@/lib/store/slices/Allslices";
import signInImg from "@/app/assets/images/signInImg.png";
import { useRequestMethods } from "../index";

const Modal = ({
  showModal,
  handleOk,
  handleCancel,
  isModalOpen,
  showSignUp,
}: any) => {
  const { publicRequest } = useRequestMethods();

  const [showSignIn, setSignIn] = useState(true);
  const [showPassword, setShowPasswords] = useState(true);
  const [forgotPassword, setForgotPassword] = useState(false);

  const [isResponse, setIsResponse] = useState(true);
  const [resMsg, setResMsg] = useState("");

  const [loading, setLoading] = useState(false);
  const [formData, setFormData]: any = useState({});

  const router = useRouter();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (formData.email && formData.password) {
        setLoading(true);
        const res: any = await publicRequest.post(`/user/login`, {
          email: formData.email,
          password: formData.password,
        });
        // console.log(res);
        if (res) {
          dispatch(setLoginUser(res.data.data));
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          setLoading(false);
          setIsResponse(true);
          setResMsg("");
          handleCancel();
          router.push("/");
        }
      }
    } catch (error: any) {
      setLoading(false);
      setIsResponse(false);
      setResMsg(error?.response.data);
    }
  };

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
                <div className=" relative grid grid-cols-2 place-items-center gap-5 w-full xs:w-[400px] sm:w-[500px] md:w-[768px] lg:w-[882px] bg-white  p-10 max-sm:p-6 text-gray-900">
                  <div
                    className="absolute top-5 right-5 cursor-pointer scale-110"
                    onClick={handleCancel}
                  >
                    <RxCross1 />
                  </div>

                  <div className="hidden md:block w-full h-auto">
                    <Image
                      src={signInImg}
                      alt=""
                      width={100}
                      height={100}
                      className="w-full"
                    />
                  </div>

                  <div className="w-full sm:w-max mx-auto h-max">
                    <h1 className="text-left text-gray-900 text-2xl font-medium">
                      Registered Customers
                    </h1>
                    <p className="text-left text-gray-200 text-[14px] mt-2">
                      If you have an account, sign in with your email address.
                    </p>

                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col">
                        <label
                          htmlFor="email"
                          className="mt-5 text-[12px] ms-5"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          className=" w-full sm:w-[368px] h-[48px] px-5 mt-2 border border-gray-100 rounded-md bg-white outline-none"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Type your email"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex flex-col mt-3">
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
                            onChange={handleChange}
                          />
                          <div onClick={() => setShowPasswords(!showPassword)}>
                            {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-5 pr-3">
                        <button
                          className="bg-primary flex justify-center items-center text-white w-[172px] h-[40px] text-[14px] cursor-pointer"
                          type="submit"
                        >
                          <p>{!loading ? "Sign In" : ""}</p>
                          {loading ? (
                            <Image src={loader} alt="" className="w-[30px]" />
                          ) : (
                            ""
                          )}
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
                    </form>

                    {isResponse ? (
                      <p className="text-primary text-[12px] mt-3">
                        *Required Fields
                      </p>
                    ) : (
                      <p className="text-secondary text-[16px] mt-3">
                        {resMsg}
                      </p>
                    )}

                    <h1 className="text-2xl font-medium mt-3">New Customers</h1>
                    <p className="text-gray-200 text-[14px] mt-2">
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
