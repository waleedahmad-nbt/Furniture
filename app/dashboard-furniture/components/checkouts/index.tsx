"use client";
import React from "react";

const checkoutData = [
  {
    checnumber: 5132516633321,
    date: "2023-08-29",
    placedBy: "John Doe",
    recoveryStatus: "Not Recoverd",
    total: "$150.00",
  },
  {
    checnumber: 5132886333321,
    date: "2023-09-01",
    placedBy: "Jane Smith",
    recoveryStatus: "Recoverd",
    total: "$75.50",
  },
];

const Checkouttable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border divide-y text-gray-900 divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="text-gray-900 focus:ring-0 focus:outline-none mr-2"
                />
                Checkouts
              </label>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Placed By
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Recovery Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {checkoutData.map((row, index) => (
            <tr
              key={index}
              className="bg-white cursor-pointer hover:bg-gray-100 transition"
            >
              <td className="px-6 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="text-HeadingColours focus:ring-0 focus:outline-none"
                />{" "}
                &nbsp;
                <span className="text-xs text-ubuntu-medium">
                  #{row.checnumber}
                </span>
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {row.date}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {row.placedBy}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                <div className="w-[70%] py-1 px-1 rounded-md bg-gray-300 text-white text-center">
                  {row.recoveryStatus}
                </div>
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {row.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Checkouttable;
