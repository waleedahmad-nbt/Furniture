// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductPageSkeleton = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-start gap-24 items-start">
        <div className="hidden md:block shadow-lg p-5 rounded-md">
          <Skeleton height={500} width={600} />
        </div>
        <div className="flex flex-col items-start gap-3 shadow-lg p-5 rounded-md">
          <Skeleton height={20} width={300} />
          <Skeleton height={20} width={250} />
          <Skeleton height={20} width={200} />
          <Skeleton height={20} width={100} />
          <Skeleton height={30} width={150} />
          <Skeleton height={20} width={100} />
          <div className="flex items-center justify-start gap-5">
            <Skeleton height={40} width={40} circle={true} />
            <Skeleton height={40} width={40} circle={true} />
            <Skeleton height={40} width={40} circle={true} />
          </div>
          <Skeleton height={20} width={100} />
          <div className="flex items-center justify-start gap-5">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={100} />
          </div>
          <div className="flex items-center justify-start gap-3">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPageSkeleton;
