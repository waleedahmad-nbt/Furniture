// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const ServicesSkeleton = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={50} width={50} circle={true} />
        <Skeleton height={20} width={250} />
        <Skeleton height={10} width={200} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={50} width={50} circle={true} />
        <Skeleton height={20} width={250} />
        <Skeleton height={10} width={200} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={50} width={50} circle={true} />
        <Skeleton height={20} width={250} />
        <Skeleton height={10} width={200} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={50} width={50} circle={true} />
        <Skeleton height={20} width={250} />
        <Skeleton height={10} width={200} />
      </div>
    </>
  );
};

export default ServicesSkeleton;
