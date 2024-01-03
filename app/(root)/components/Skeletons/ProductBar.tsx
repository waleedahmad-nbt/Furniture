// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductBar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-3 shadow-lg p-5 rounded-md">
        <div className="flex gap-5 items-center justify-between">
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={100} />
        </div>
        <Skeleton height={20} width={200} />
      </div>
    </>
  );
};

export default ProductBar;
