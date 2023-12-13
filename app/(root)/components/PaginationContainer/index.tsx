"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "..";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationContainer = ({ items, setStats }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the indexes of the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the items array to get the items for the current page
  const currentItems = items?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const resultsStart = Math.min(startIndex + 1, items.length);
    const resultsEnd = Math.min(endIndex, items.length);

    setStats(resultsStart, resultsEnd);
  }, [currentPage]);

  return (
    <>
      {/* Display current page items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems?.map((item: any, index: number) => (
          <ProductCard item={item} key={index} className="h-max" />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex gap-5 items-center justify-center mt-6">
        <button
          className="flex items-center gap-1 text-[#979899] font-medium"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
          PREVIOUS
        </button>

        <div className="flex">
          {/* Page numbers with active class */}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-[44px] h-[45px] flex items-center justify-center ${
                currentPage === index + 1
                  ? "bg-[#181818] text-white"
                  : "text-[#1C1F23]"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <button
          className="flex items-center gap-1 text-[#979899] font-medium"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          NEXT
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default PaginationContainer;
