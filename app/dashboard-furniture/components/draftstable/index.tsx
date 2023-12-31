"use client";
import React, { useState } from "react";

interface TableRow {
  id: string;
  draftOrder: string;
  date: string;
  customer: string;
  status: string;
  total: string;
}

const tableData: TableRow[] = [
  {
    id: "1",
    draftOrder: "D123",
    date: "2023-08-29",
    customer: "John Doe",
    status: "Unfulfilled",
    total: "$150.00",
  },
  {
    id: "2",
    draftOrder: "D456",
    date: "2023-09-01",
    customer: "Jane Smith",
    status: "Pending",
    total: "$75.50",
  },
  // Add more data rows as needed
];

function Draftstable() {

  interface CheckboxState {
    [productId: string]: boolean;
  }

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});

  const handleCheckboxChange = (productId: string) => {
    setCheckboxes((prevCheckboxes) => {
      const isChecked = prevCheckboxes[productId] ?? false; // Default to false if undefined
      return {
        ...prevCheckboxes,
        [productId]: !isChecked,
      };
    });
  };

  const handleSelectAllChange = () => {
    const updatedCheckboxes: CheckboxState = {};

    tableData?.map((product: any) => {
      const Id = product.id;
      updatedCheckboxes[Id] = !checkboxes[Id] ? !checkboxes[Id] : false;
    });

    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border divide-y text-HeadingColours text-ubuntu-light divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="text-HeadingColours focus:ring-0 focus:outline-none mr-2"
                  onChange={handleSelectAllChange}
                />
                Draft Order
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
              Customer
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
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
          {tableData.map((row, index) => (
            <tr
              key={index}
              className="bg-white cursor-pointer hover:bg-gray-100 transition"
            >
              <td className="px-6 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="text-HeadingColours focus:ring-0 focus:outline-none"
                  checked={checkboxes[row?.id] ?? false}
                  onChange={() => handleCheckboxChange(row?.id)}
                />{" "}
                &nbsp; <span className="text-xs">#{row.draftOrder}</span>
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {row.date}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {row.customer}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                <div className="w-[70%] py-1 px-1 rounded-md bg-gray-300 text-white text-center">
                  {row.status}
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
}

export default Draftstable;
