"use client"
import axios from "axios";
import { useState, useEffect } from "react";

const TimerCard = ({ product }: any) => {

  const endDiscount = async () => {
    if(product?._id) {
      try {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/product/end/discount/${product?._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }

  const calculateTimeLeft = () => {
    const duration = +product?.discount?.duration;

    if (!duration || isNaN(duration)) {
      // Handle the case where duration is not defined or NaN
      endDiscount(); // You need to define the endDiscount function
      return { days: '00', hours: '00', minutes: '00', seconds: '00', expired: true };
    }

    const currentDate = new Date(product?.updatedAt);
    const expirationDate: any = new Date(currentDate.getTime() + +product?.discount?.duration * 24 * 60 * 60 * 1000);

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
    <>
      <div className="flex text-gray-blue gap-1 mt-1">
        <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
          {time.days}
        </p>
        :
        <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
          {time.hours}
        </p>
        :
        <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
          {time.minutes}
        </p>
        :
        <p className="text-gray-300 bg-[#EEF2F6] px-2 py-1 font-medium">
          {time.seconds}
        </p>
      </div>
      <span className="text-gray-blue text-[12px]">
        Time remaining until the end of the offer
      </span>
    </>
  );
};

export default TimerCard;
