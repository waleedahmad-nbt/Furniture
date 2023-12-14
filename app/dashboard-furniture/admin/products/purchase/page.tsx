"use client";
import Image from "next/image";
import image1 from "@/app/assets/images/product/productImage2.svg";

const Purchase = () => {

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Purchase orders</h1>
      </div>

      <div className="bg-white border rounded-lg p-5 py-10 flex flex-col justify-center items-center">
        <Image src={image1} alt="" />
        <h1 className="text-sm font-bold">Manage your purchase orders</h1>
        <p className="text-xs my-2">Track and receive inventory ordered from suppliers.</p>
        <div className="flex justify-center gap-2 items-center mt-2">
          <button className="rounded-lg text-xs p-1 px-2 mx-1 flex items-center hover:shadow-none">
            Learn more
          </button>
          <button className="p-1 hover:bg-primary text-xs px-2 rounded-lg duration-100 border">
            Create purchase order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
