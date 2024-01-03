import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductsBar = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-3 shadow-lg p-5 rounded-md">
        <div className="flex gap-5 items-center justify-between">
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={100} />
        </div>
        <Skeleton height={20} width={200} />
      </div>

      <div className="flex flex-row items-end justify-between gap-3 shadow-lg p-5 rounded-md">
        <div className="flex flex-col gap-3">
          <div className="flex justify-start items-center gap-5">
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={100} />
            <Skeleton height={20} width={100} />
          </div>
          <Skeleton height={30} width={200} />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <Skeleton height={20} width={100} />
          <Skeleton height={20} width={100} />
        </div>
      </div>
    </>
  );
};

export default ProductsBar;
