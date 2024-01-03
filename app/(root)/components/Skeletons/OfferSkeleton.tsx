// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const OfferSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center shadow-lg p-5 rounded-md">
      <Skeleton height={50} width={300} />
      <Skeleton height={15} width={250} />
      <Skeleton height={15} width={200} />
      <Skeleton height={10} width={150} />
    </div>
  );
};

export default OfferSkeleton;
