// components/AuthGuard.js
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGuard = ({ children }: any) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If the token is not present, redirect the user to the Home page
    if (!token) {
      router.push("/");
    }
  }, []);

  return children;
};

export default AuthGuard;
