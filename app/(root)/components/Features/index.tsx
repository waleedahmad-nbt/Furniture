import Image from "next/image";

import Delivery from "@/app/assets/icons/delivery.svg";
import money from "@/app/assets/icons/money.svg";
import time from "@/app/assets/icons/time.svg";
import discount from "@/app/assets/icons/discount.svg";

const Features = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="bg-silver py-7 text-center border-[0.6px] border-gray-200 xs:w-[100%] sm:w-[290px] flex flex-col justify-center">
        <Image src={Delivery} alt="icon" className="mx-auto mb-2" />
        <h3 className="text-gray-300 font-bold">Free Delivery</h3>
        <p className="text-gray-300">Free shipping on all order</p>
      </div>
      <div className="bg-silver py-7 text-center border-[0.6px] border-gray-200 xs:w-[100%] sm:w-[290px] flex flex-col justify-center">
        <Image src={time} alt="icon" className="mx-auto mb-2" />
        <h3 className="text-gray-300 font-bold">Online support 24/7</h3>
        <p className="text-gray-300">Support online 24/7 hours a day</p>
      </div>
      <div className="bg-silver py-7 text-center border-[0.6px] border-gray-200 xs:w-[100%] sm:w-[290px] flex flex-col justify-center">
        <Image src={money} alt="icon" className="mx-auto mb-2" />
        <h3 className="text-gray-300 font-bold">Money return</h3>
        <p className="text-gray-300">Back guarantee under 7 days</p>
      </div>
      <div className="bg-silver py-7 text-center border-[0.6px] border-gray-200 xs:w-[100%] sm:w-[290px] flex flex-col justify-center">
        <Image src={discount} alt="icon" className="mx-auto mb-2" />
        <h3 className="text-gray-300 font-bold">Member discount</h3>
        <p className="text-gray-300">On every order over $120.00</p>
      </div>
    </div>
  );
};

export default Features;
