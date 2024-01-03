// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const RefinedSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-14">
      <div className="flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={200} />
        <Skeleton height={15} width={100} />
        <Skeleton height={40} width={90} />
      </div>
      <div className="flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={200} />
        <Skeleton height={15} width={100} />
        <Skeleton height={40} width={90} />
      </div>
    </div>
  );
};

export default RefinedSkeleton;
