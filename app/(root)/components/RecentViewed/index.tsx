"use client"
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "..";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import arrowL from "@/app/assets/icons/arrow-left.svg";

const RecentViewed = () => {

  const recentViews: any = useSelector((state: RootState) => state.recentViews);

  const sortedRecentViews = [...recentViews].sort((a, b) => {
    const timeA = new Date(a.time).getTime();
    const timeB = new Date(b.time).getTime();
  
    // Compare in descending order
    return timeB - timeA;
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-[38px] text-gray-300 font-semibold md:font-bold">Recently View</h1>
        <Link
          href="#"
          className="flex items-center gap-3 bg-primary px-2 py-1 w-max text-white uppercase text-[14px]"
        >
          <span>view all</span>
          <Image src={arrowL} alt="icon" />
        </Link>
      </div>
      <div className="w-full my-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sortedRecentViews.length > 0 && sortedRecentViews?.map((item: any, index: number) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default RecentViewed
