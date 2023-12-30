"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { setLoginUser } from "@/lib/store/slices/Allslices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import axios from "axios";

interface User {
  email: string;
  password: string;
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const Router = useRouter();

  const User: any = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState<boolean>(false);

  if(User?.isAdmin) {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      try {
        const res: any = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, {
          email: formData.email,
          password: formData.password,
        });

        if (res.status === 200) {
          dispatch(setLoginUser(res.data.data));
          localStorage.setItem("token", JSON.stringify(res.data.data.token));
          Router.push("/dashboard-furniture/admin");
        }
      } catch (error: any) {
        setLoading(false);
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
          <button type="submit" className="py-2 px-10 bg-primary text-white text-ubuntu-bold rounded-md w-full mt-8 mb-3 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
            </div>
            <span className={loading ? "opacity-0" : ""}>Sign In</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
