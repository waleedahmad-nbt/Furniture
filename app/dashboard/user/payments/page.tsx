"use client";
import React from "react";
import Userlayout from "../../layouts/userdashboard";
import NotFound from "../components/NotFound";

const Payments = () => {
  return (
    <>
      <Userlayout>
        <div className="px-10">
            <h1 className="text-2xl text-ubuntu-bold text-HeadingColours">Payments</h1>
              <NotFound />
        </div>
      </Userlayout>
    </>
  );
};

export default Payments;
