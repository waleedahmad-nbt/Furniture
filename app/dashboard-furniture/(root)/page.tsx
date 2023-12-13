"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { setLoginUser } from "@/lib/store/slices/Allslices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface User {
  email: string;
  password: string;
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const User: any = useSelector((state: RootState) => state.user);

  if(User?.role === "admin") {
    Router.push("/dashboard-furniture/admin");
  } else if (Object.keys(User).length !== 0) {
    Router.push("/");
  }

  const fields = {
    email: "",
    password: "",
  }

  const [formData, setFormData] = useState<User>(fields)
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData((prev: any) => { return { ...prev, [name]: value } });
  }

  function isValidEmail(email: any) {
    // Use a regular expression to check the email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }

  const validateForm = () => {
    let errors: any = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (validateForm()) {
      if (formData.email === "admin@gmail.com" && formData.password === "123") {
        dispatch(setLoginUser({ email: "admin@gmail.com", userName: 'admin', role: "admin" }))
        Router.push("/dashboard-furniture/admin");
      } else {
        setFormErrors({ email: "Incorrect email or password." });
        setFormData(fields);
      }
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="bg-white py-14 rounded-md w-[500px] px-20">
        <div className="mb-10 text-center">
          <Link href="/" className="shrink-0 cursor-pointer">
            <h1 className="text-primary text-2xl font-black text-center">
              Guideline
            </h1>
            <p className="text-sm text-gray-900">group of companies</p>
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-200 font-medium">Email<span className="text-secondary">*</span></label>
            <input 
              type="email"
              className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
              name="email"
              id="email"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.email}
            />
            {formErrors.email && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.email}
              </p>
            )}
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block mb-1 text-gray-200 font-medium">Password<span className="text-secondary">*</span></label>
            <input 
              type="password"
              className="w-full border px-3 py-2 outline-none focus:border-primary text-gray-200"
              name="password"
              id="password"
              placeholder="..........."
              onChange={handleChange}
              value={formData.password}
            />
            {formErrors.password && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.password}
              </p>
            )}
          </div>
          <button type="submit" className="py-2 px-10 bg-primary text-white text-ubuntu-bold rounded-md w-full mt-8 mb-3">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
