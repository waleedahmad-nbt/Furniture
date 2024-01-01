"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "..";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PaginationContainer = ({ items, setStats }: any) => {
  const totalPages = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items?.slice(startIndex, endIndex);
  // const totalPages = Math.ceil(items?.length / itemsPerPage);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const resultsStart = Math.min(startIndex + 1, items?.length);
    const resultsEnd = Math.min(endIndex, items?.length);

    setStats(resultsStart, resultsEnd);
  }, [currentPage, items]);

  // Function to generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 3; // Number of visible page numbers before and after the current page

    if (totalPages <= visiblePages * 2 + 1) {
      // If total pages are less than or equal to double the visible pages plus 1
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // If total pages are more than double the visible pages plus 1
      if (currentPage <= visiblePages + 1) {
        // If current page is in the first block
        for (let i = 1; i <= visiblePages * 2 + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("..."); // Ellipsis
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - visiblePages) {
        // If current page is in the last block
        pageNumbers.push(1);
        pageNumbers.push("..."); // Ellipsis
        for (let i = totalPages - visiblePages * 2; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // If current page is in the middle blocks
        pageNumbers.push(1);
        pageNumbers.push("..."); // Ellipsis
        for (
          let i = currentPage - visiblePages;
          i <= currentPage + visiblePages;
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("..."); // Ellipsis
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <>
      {/* Display current page items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentItems?.map((item: any, index: number) => (
          <ProductCard item={item} key={index} className="h-max" />
        ))}
      </div>

      {/* Pagination controls */}
      {/*       
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
      </div> */}

      {/* Pagination controls */}

      {totalPages > 1 ? (
        <div className="flex gap-5 items-center justify-center mt-6">
          <button
            className="flex items-center gap-1 text-[#979899] font-medium duration-300 hover:text-Primary cursor-pointer"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
            PREVIOUS
          </button>

          <div className="flex gap-3">
            {/* Updated rendering for page numbers with ellipsis */}
            {generatePageNumbers().map((pageNumber, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof pageNumber === "number"
                    ? handlePageChange(pageNumber)
                    : null
                }
                className={`w-[44px] h-[45px] flex items-center justify-center border border-black${
                  currentPage === pageNumber ? " bg-black text-white" : ""
                }`}
              >
                {pageNumber}
              </button>
            ))}
          </div>

          <button
            className="flex items-center gap-1 text-[#979899] font-medium duration-300 hover:text-Primary cursor-pointer"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            NEXT
            <FaAngleRight />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PaginationContainer;
