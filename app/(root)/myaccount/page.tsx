"use client";
import { useState } from "react";
import Image from "next/image";
import { AccountSideBar, NavLink } from "../components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useRequestMethods } from "../components/index";
// import { userRequest } from "@/requestMethods";
import { changeUserName } from "@/lib/store/slices/Allslices";
import { AuthGuard } from "@/app/(root)/components/index";

const MyAccount = () => {
  const { userRequest } = useRequestMethods();

  const dispatch = useDispatch();

  const userData = useSelector((state: any) => state.user);

  const fields = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    username: userData.username,
  };

  const [formData, setFormData] = useState<any>(fields);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await userRequest.put(`/user/edit/${userData._id}`, formData);
      console.log(res.data.data);
      if (res) {
        dispatch(
          changeUserName({
            firstName: res.data.data.firstName,
            lastname: res.data.data.lastname,
            username: res.data.data.username,
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const [password, setPassword]: any = useState({});
  const [passwordErrVal, setPasswordErrVal] = useState("");
  const [passwordResVal, setPasswordResVal] = useState("");
  const [isPassword, setIsPassword] = useState(false);

  const handleChangePassword = (e: any) => {
    const { name, value } = e.target;

    setPassword((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(password);

  const passwordSubmit = async (e: any) => {
    e.preventDefault();

    if (password.newPassword == password.repeatPassword) {
      try {
        const res = await userRequest.put(
          `/user/change-password/${userData._id}`,
          {
            currentPassword: password.currentPassword,
            newPassword: password.newPassword,
          }
        );
        // console.log(res.data.data.message);
        if (res) {
          setPassword({
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
          });
          setIsPassword(true);
          setPasswordResVal(res.data.data.message);
          setTimeout(() => {
            setIsPassword(false);
            setPasswordResVal("");
          }, 1000);
        }
      } catch (error: any) {
        // console.error(error.response.data);
        setIsPassword(true);
        setPasswordErrVal(error.response.data);
      }
    } else {
      setIsPassword(true);
      setPasswordErrVal("Passwords do not match");
    }
  };

  return (
    <AuthGuard>
      <div className="container">
        <h1 className="text-gray-900 font-medium text-3xl md:text-[48px] text-center my-7">
          My Account
        </h1>
        {userData &&
          [userData].map((e: any, i: any) => {
            return (
              <div className="bg-white px-4 md:px-10 py-10 rounded-sm flex flex-wrap gap-y-5 mb-16">
                <div className="w-full md:w-[30%]">
                  <AccountSideBar />
                </div>

                <div className="w-full md:w-[65%] pl-5" key={i}>
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
                          placeholder="First Name"
                          onChange={handleChange}
                          defaultValue={e.firstName}
                        />
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
                          placeholder="Last Name"
                          onChange={handleChange}
                          defaultValue={e.lastName}
                        />
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
                        name="username"
                        id="displayName"
                        placeholder="Display Name"
                        onChange={handleChange}
                        defaultValue={e.username}
                      />

                      <p className="text-gray-200 text-[12px] mt-2">
                        <i>
                          This will be how your name will be displayed in the
                          account section and in reviews
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
                        placeholder={e.email}
                        disabled
                        onChange={handleChange}
                        value={formData.email}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white font-medium px-3 py-2 md:px-8 md:py-3 mt-5"
                    >
                      Save changes
                    </button>
                  </form>

                  <h2 className="text-gray-900 font-medium text-[20px] mt-10">
                    Password
                  </h2>
                  {isPassword ? (
                    <div className="mt-2">
                      <p className="text-secondary text-xl">
                        {passwordErrVal ? passwordErrVal : ""}
                      </p>
                      <p className="text-green text-xl">
                        {passwordResVal ? passwordResVal : ""}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  <form onSubmit={passwordSubmit}>
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
                        name="currentPassword"
                        id="oldPassword"
                        placeholder="Old password"
                        onChange={handleChangePassword}
                        value={password.currentPassword}
                      />
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
                          onChange={handleChangePassword}
                          value={password.newPassword}
                        />
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
                          onChange={handleChangePassword}
                          value={password.repeatPassword}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-primary text-white font-medium px-3 py-2 md:px-8 md:py-3 mt-5"
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              </div>
            );
          })}
      </div>
    </AuthGuard>
  );
};

export default MyAccount;
