// Import necessary libraries
import React from "react";
import Skeleton from "react-loading-skeleton";

// Your functional component
const CategoriesHeading = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center shadow-lg p-5 rounded-md w-full">
        <Skeleton height={30} width={300} />
        <Skeleton height={10} width={200} />
      </div>
    </>
  );
};

export default CategoriesHeading;
