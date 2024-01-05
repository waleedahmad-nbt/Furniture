"use client"
import axios from "axios";
import { useState, useEffect } from "react";

const Timer = ({ product }: any) => {

  const endDiscount = async () => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/product/end/discount/${product?._id}`);
    } catch (error) {
      console.log(error);
    }
  }

  const calculateTimeLeft = () => {
    const currentDate = new Date(product?.updatedAt);
    const expirationDate: any = new Date(currentDate.getTime() + product?.discount?.duration * 24 * 60 * 60 * 1000);

    const now: any = new Date();
    const timeDifference = expirationDate - now;

    if (timeDifference <= 0) {
      endDiscount();
      return { days: '00', hours: '00', minutes: '00', seconds: '00', expired: true };
    }

    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
    const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)).toString().padStart(2, '0');
    const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0');
    const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000).toString().padStart(2, '0');

    return { days, hours, minutes, seconds, expired: false };
  };

  const [time, setTime] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTime(updatedTime);

      // If the timer has expired, clear the interval
      if (updatedTime.expired) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [product]);

  return !time.expired && (
    <div className="flex gap-2 mt-1">
      <p className="px-2 flex flex-col justify-center items-center gap-6">
        {time.days}
        <span className="text-[#858585]">Day</span>
      </p>
      :
      <p className="px-2 flex flex-col justify-center items-center gap-6">
        {time.hours}<span className="text-[#858585]">Hours</span>
      </p>
      :
      <p className="px-2 flex flex-col justify-center items-center gap-6">
        {time.minutes}<span className="text-[#858585]">Min</span>
      </p>
      :
      <p className="px-2 flex flex-col justify-center items-center gap-6">
        {time.seconds}<span className="text-[#858585]">Sec</span>
      </p>
    </div>
  );
};

export default Timer;
