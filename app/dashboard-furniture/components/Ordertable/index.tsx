"use client";
import React, { useState } from "react";

function Table({ data }: any) {

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

    data?.map((product: any) => {
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
              <input
                type="checkbox"
                className="mr-2 focus:ring-0 focus:outline-none text-HeadingColours"
                onChange={handleSelectAllChange}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Order
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
              Channel
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Total
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Payment Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fulfillment Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Items
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Delivery Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Delivery Method
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tags
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((rowData: any, index: any) => (
            <tr
              key={index}
              className="bg-white cursor-pointer hover:bg-gray-100 transition"
            >
              <td className="px-6 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="mr-2 focus:ring-0 focus:outline-none"
                  defaultChecked={rowData.orderFlags}
                  checked={checkboxes[rowData?.id] ?? false}
                  onChange={() => handleCheckboxChange(rowData?.id)}
                />
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.orderNumber}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.date}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.customer}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.channel}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.total}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                <div
                  className={` ${
                    rowData.paymentStatus === "Paid"
                      ? "bg-green"
                      : rowData.paymentStatus === "Pending"
                      ? "bg-yellow-400"
                      : ""
                  } h-max py-1 px-2 w-[80%] rounded-md text-white text-center`}
                >
                  {rowData.paymentStatus}
                </div>
              </td>
              <td className={`px-6 text-xs py-2 whitespace-nowrap`}>
                <div
                  className={` ${
                    rowData.paymentStatus === "Paid"
                      ? "bg-gray-900"
                      : rowData.paymentStatus === "Pending"
                      ? "bg-orange-500"
                      : ""
                  } h-max py-1 px-2 w-[80%] rounded-md text-white text-center`}
                >
                  {rowData.fulfillmentStatus}
                </div>
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.items}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.deliveryStatus}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.deliveryMethod}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData.tags.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
