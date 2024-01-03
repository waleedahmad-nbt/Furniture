// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const BorderedSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-14">
      <div className="col-span-1 flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={15} width={100} />
        <Skeleton height={10} width={90} />
        <Skeleton height={10} width={80} />
        <Skeleton height={10} width={70} />
      </div>
      <div className="col-span-3 flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={15} width={100} />
        <Skeleton height={10} width={90} />
        <Skeleton height={10} width={80} />
        <Skeleton height={10} width={70} />
      </div>
      <div className="col-span-1 flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={15} width={100} />
        <Skeleton height={10} width={90} />
        <Skeleton height={10} width={80} />
        <Skeleton height={10} width={70} />
      </div>
    </div>
  );
};

export default BorderedSkeleton;
