"use client";
import React from "react";
import Userlayout from "../../layouts/userdashboard";
import QRCode from "react-qr-code";

const Qrcode = () => {
  return (
    <Userlayout>
      <div className="px-10">
        <h1 className="text-2xl text-ubuntu-bold text-HeadingColours">
          QR Code
        </h1>
        <p className="text-md my-2 text-P_textColour text-ubuntu-regular">
          Use the noon QR code to pickup your orders at collection points
        </p>
        <div className="bg-white py-6">
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 150,
              width: "100%",
            }}
          >
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={"2025845625445"}
              viewBox={`0 0 256 256`}
            />
          </div>
        </div>
      </div>
    </Userlayout>
  );
};

export default Qrcode;
