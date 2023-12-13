"use client";
import Image from "next/image";
import image1 from "@/app/assets/images/product/productImage3.svg";

const Transfer = () => {

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl text-ubuntu-bold">Purchase orders</h1>
      </div>

      <div className="bg-white border rounded-lg p-5 py-10 flex flex-col justify-center items-center">
          <Image src={image1} alt="" />
          <h1 className="text-sm text-ubuntu-bold text-HeadingColours">Move inventory between locations</h1>
          <p className="text-xs text-ubuntu-regular text-P_textColour my-2">Move and track inventory between your business locations.</p>
          <div className="flex justify-center gap-2 items-center">
        <button className="rounded-lg text-xs p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
            Learn more
          </button>
          <button className="p-1 bg-HeadingColours text-white border-none hover:bg-black text-xs px-2 rounded-lg text-ubuntu-regular">
            Create Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
