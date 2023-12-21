import Link from "next/link";
import React from "react";
import { FiX } from "react-icons/fi";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "@/lib/store/slices/Allslices";

const Logout = ({ setLogout, logout }: any) => {
  const userData = useSelector((state: any) => state.user);
  const email = userData.email;
  const dispatch = useDispatch();
  const router = useRouter();
  const loggingOut = () => {
    // Remove the 'token' item from local storage
    localStorage.removeItem("token");
    dispatch(setLoginUser({}));
    setLogout(false);
    router.push("/");
  };

  return (
    <>
      {logout && (
        <div
          className="fixed inset-0 bg-[#00000099] z-50"
          onClick={() => setLogout(false)}
        >
          <div className="flex items-center justify-center py-5 h-full">
            <div className="bg-white w-full max-w-[839px] flex items-center justify-center pt-20 pb-14 relative">
              <div className="absolute top-[20px] right-[23px]">
                <button
                  onClick={() => setLogout(false)}
                  className="text-gray-900 text-xl"
                >
                  <FiX />
                </button>
              </div>
              <div className="text-center">
                <Link href="/" className="shrink-0 cursor-pointer">
                  <h1 className="text-primary text-3xl font-black text-center">
                    Guideline
                  </h1>
                  <p className="text-xl">group of companies</p>
                </Link>
                <h2 className="my-6 font-medium text-xl text-gray-900">
                  Log out
                </h2>
                <p className="text-gray-200">Hi {email}</p>
                <p className="text-gray-200">
                  Are you sure you want to log out
                </p>
                <div className="flex items-center mt-5 justify-between">
                  <button
                    onClick={() => setLogout(false)}
                    className="border border-gray-900 px-10 py-2 font-medium text-black"
                  >
                    No
                  </button>
                  <button
                    className="border border-transparent text-white bg-primary px-10 py-2 font-medium"
                    onClick={loggingOut}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logout;
