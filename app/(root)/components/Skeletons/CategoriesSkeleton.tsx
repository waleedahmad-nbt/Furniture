// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const CategoriesSkeletion = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md">
        <Skeleton height={100} width={150} />
        <Skeleton height={20} width={150} />
        <Skeleton height={10} width={100} />
      </div>
    </>
  );
};

export default CategoriesSkeletion;
