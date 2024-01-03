// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

const BarSkeleton = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between shadow-lg p-5 rounded-md">
        <div className="flex gap-5 items-center justify-between">
          <Skeleton height={20} width={150} />
          <Skeleton height={20} width={150} />
        </div>
        <Skeleton height={10} width={100} />
      </div>
    </>
  );
};

export default BarSkeleton;
