"use client";
import Image from "next/image";
import image1 from "@/app/assets/images/product/productImage3.svg";

const Transfer = () => {

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Purchase orders</h1>
      </div>

      <div className="bg-white border rounded-lg p-5 py-10 flex flex-col justify-center items-center">
        <Image src={image1} alt="" />
        <h1 className="text-sm font-bold">Move inventory between locations</h1>
        <p className="text-xs my-2">Move and track inventory between your business locations.</p>
        <div className="flex justify-center gap-2 items-center mt-2">
          <button className="rounded-lg text-xs p-1 px-2 mx-1 flex items-center hover:shadow-none">
            Learn more
          </button>
          <button className="p-1 hover:bg-primary border text-xs px-2 rounded-lg duration-100">
            Create Transfer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
