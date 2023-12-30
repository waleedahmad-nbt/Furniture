"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { FiEye, FiMoreVertical, FiTrash } from "react-icons/fi";

function Table({ data, setOrders }: any) {

  interface CheckboxState {
    [productId: string]: boolean;
  }

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});
  const [updating, setUpdating] = useState<string>("");
  const [updatingStatus, setUpdatingStatus] = useState<string>("");
  const [openDrop, setOpenDrop] = useState<string>("");

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

  const formateDate = (date: string) => {
    const originalDate = new Date("2023-12-23T09:09:26.619Z");
    return originalDate.toISOString().split('T')[0];
  }

  const deleteOrder = async (id: string) => {
    setUpdating(id);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/order/delete/${id}`);

      if(res.status === 200) {
        setOrders((prev: any) => prev.filter((item: any) => item?._id !== id));
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const changeStatus = async (status: string, id: string) => {
    setUpdatingStatus(status);
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${id}?status=${status}`);

      if(res.status === 200) {
        setOrders((prev: any) => prev.map((item: any) => {
          if(item?._id === id) {
            return res.data.data;
          } else {
            return item;
          }
        }));
        setUpdatingStatus("");
        setOpenDrop("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="w-full">
      <table className="min-w-full text-xs divide-y divide-gray-200">
        <thead className="bg-[#F7F7F7] sticky top-[53px] border-t border-b">
          <tr>
            <th
              scope="col"
              className="px-6 py-1.5 text-left"
            >
              <input
                type="checkbox"
                className="mr-2 focus:ring-0 focus:outline-none text-HeadingColours"
                onChange={handleSelectAllChange}
              />
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Order
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Customer
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Total
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Payment Status
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Delivery Status
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Items
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Payment Method
            </th>
            <th
              scope="col"
              className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data?.map((rowData: any, index: any) => (
            <tr
              key={index}
              className="cursor-pointer hover:bg-tb-hover transition"
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
                {rowData?._id}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {formateDate(rowData?.createdAt)}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData?.contactInfo?.firstName + " " + rowData?.contactInfo?.lastName}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                AED {rowData?.total}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                <div
                  className={` ${
                    rowData?.status === "delivered"
                      ? "bg-gray-900 text-white"
                      : rowData?.status === "processing"
                      ? "bg-yellow-400"
                      : rowData?.status === "completed" ? "bg-green" : ""
                  } h-max py-1 px-2 w-[80%] rounded-md text-center capitalize font-bold text-gray-900`}
                >
                  {rowData?.status}
                </div>
              </td>
              <td className={`px-6 text-xs py-2 whitespace-nowrap`}>
                <div
                  className={` ${
                    rowData?.status === "delivered"
                      ? "bg-gray-900 text-white"
                      : rowData?.status === "processing"
                      ? "bg-orange-500"
                      : rowData?.status === "completed" ? "bg-green" : ""
                  } h-max py-1 px-2 w-[80%] rounded-md text-center capitalize font-bold text-gray-900`}
                >
                  {rowData?.status}
                </div>
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData?.products?.length || 0}
              </td>
              <td className="px-6 text-xs py-2 whitespace-nowrap">
                {rowData?.paymentMethod}
              </td>
              <td className="px-6 py-2 relative">
                <div className="flex gap-2 text-base items-center">
                  <Link href={`/dashboard-furniture/admin/orders/details/${rowData?._id}`} className="text-gray-300 hover:text-gray-900 duration-150 relative whitespace-nowrap">
                    <FiEye />
                  </Link>
                  <button
                    onClick={() => deleteOrder(rowData?._id)}
                    className="text-gray-300 hover:text-gray-900 duration-150 relative whitespace-nowrap"
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {updating === rowData?._id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                    </div>
                    <span className={updating === rowData?._id ? "opacity-0" : ""}><FiTrash /></span>
                  </button>
                  <div className="relative">
                    <button onClick={() => setOpenDrop((prev: any) => {
                      if(prev === rowData?._id) {
                        return "";
                      }
                      else return rowData?._id;
                    })} className="text-gray-300 hover:text-gray-900 duration-150 relative flex items-center justify-center">
                      <FiMoreVertical />
                    </button>
                    <div className={`absolute bottom-0 translate-y-full right-3 z-10 ${openDrop === rowData?._id ? "block" : "hidden"}`}>
                      <div className="block bg-white p-3 w-[250px] space-y-1 border rounded-md overflow-hidden">
                        {rowData?.status !== 'processing' && 
                          <button
                            onClick={() => changeStatus("processing", rowData?._id)}
                            className="px-3 py-1 bg-gray-100/30 hover:bg-gray-100/100 rounded-md w-full relative"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {updatingStatus === "processing" && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                            </div>
                            <span className={updatingStatus === "processing" ? "opacity-0" : ""}>Mark as Processing</span>
                          </button>
                        }
                        {rowData?.status !== 'delivered' && 
                          <button
                            onClick={() => changeStatus("delivered", rowData?._id)}
                            className="px-3 py-1 bg-gray-100/30 hover:bg-gray-100/100 rounded-md w-full relative"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {updatingStatus === "delivered" && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                            </div>
                            <span className={updatingStatus === "delivered" ? "opacity-0" : ""}>Mark as Delivered</span>
                          </button>
                        }
                        {rowData?.status !== 'completed' && 
                          <button
                            onClick={() => changeStatus("completed", rowData?._id)}
                            className="px-3 py-1 bg-gray-100/30 hover:bg-gray-100/100 rounded-md w-full relative"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {updatingStatus === "completed" && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                            </div>
                            <span className={updatingStatus === "completed" ? "opacity-0" : ""}>Mark as Completed</span>
                          </button>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
