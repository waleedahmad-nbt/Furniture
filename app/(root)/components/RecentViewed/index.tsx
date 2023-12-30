"use client";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "..";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

import arrowL from "@/app/assets/icons/arrow-left.svg";
import { GoArrowRight } from "react-icons/go";

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
        <h1 className="text-2xl md:text-[24px] text-gray-300 font-semibold md:font-bold">
          Recently View
        </h1>
        <Link
          href="/products"
          className="flex items-center gap-3  px-2 py-1 w-max text-white text-[14px]"
        >
          <span className="text-gray-300 flex items-center font-bold duration-100 hover:text-primary">
            <span className="mr-2">View All </span>
            <GoArrowRight />
          </span>
        </Link>
      </div>
      <div className="w-full my-10">
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {sortedRecentViews.length > 0 &&
            sortedRecentViews?.map((item: any, index: number) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentViewed;
