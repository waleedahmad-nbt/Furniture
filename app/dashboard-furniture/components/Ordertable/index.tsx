"use client";
import React from "react";

interface DataRow {
  orderNumber: string;
  orderFlags: boolean;
  date: string;
  customer: string;
  channel: string;
  total: string;
  paymentStatus: string;
  fulfillmentStatus: string;
  items: number;
  deliveryStatus: string;
  deliveryMethod: string;
  tags: string[];
}

const dataRows: DataRow[] = [
  {
    orderNumber: "12345",
    orderFlags: true,
    date: "2023-08-29",
    customer: "John Doe",
    channel: "Online",
    total: "$150.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Shipped",
    items: 3,
    deliveryStatus: "In Transit",
    deliveryMethod: "Standard",
    tags: ["Urgent", "High Value"],
  },
  {
    orderNumber: "67890",
    orderFlags: false,
    date: "2023-09-01",
    customer: "Jane Smith",
    channel: "Retail Store",
    total: "$75.50",
    paymentStatus: "Pending",
    fulfillmentStatus: "Processing",
    items: 2,
    deliveryStatus: "Not Shipped",
    deliveryMethod: "Express",
    tags: ["Priority"],
  },
];

function Table() {
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
          {dataRows.map((rowData, index) => (
            <tr
              key={index}
              className="bg-white cursor-pointer hover:bg-gray-100 transition"
            >
              <td className="px-6 py-2 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="mr-2 text-HeadingColours focus:ring-0 focus:outline-none"
                  defaultChecked={rowData.orderFlags}
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
                      ? "bg-green-600"
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
                      ? "bg-HeadingColours"
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
