"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const ViewOrder = () => {
  const Router = useRouter();
  const { id } = useParams();
  const [order, setOrder] = useState<any>({});

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/order/${id}`);
  
        if(res.status === 200) {
          setOrder(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getOrder();
  }, [])  

  const handleBack = () => {
    Router.back();
  };

  return (
    <div className="w-full p-2">
      <div className="xl:w-[950px] w-full m-auto">
        <div className="py-5 flex items-center">
          <button onClick={handleBack}>
            <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-100">
              <BsArrowLeft />
            </div>
          </button>
          <p className="text-xl font-bold text-text-gray-300">
            All Orders
          </p>
        </div>
      </div>

      <div className="xl:w-[950px] w-full m-auto">
        <div className="w-full bg-white border py-3 px-4 rounded-md">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg text-gray-900 font-bold">Order By:</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="py-1">First Name:</td>
                    <td className="py-1 pl-7"><h2>{order?.contactInfo?.firstName}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Last Name:</td>
                    <td className="py-1 pl-7"><h2>{order?.contactInfo?.lastName}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Email:</td>
                    <td className="py-1 pl-7"><h2>{order?.contactInfo?.email}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Phone:</td>
                    <td className="py-1 pl-7"><h2>{order?.contactInfo?.phoneNumber}</h2></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h1 className="text-lg text-gray-900 font-bold">Order Details:</h1>
              <table>
                <tbody>
                  <tr>
                    <td className="py-1">Order Code:</td>
                    <td className="py-1 pl-7">{order?.orderCode}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Payment Method:</td>
                    <td className="py-1 pl-7">{order?.paymentMethod}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Shipping:</td>
                    <td className="py-1 pl-7">{order?.shipping}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Products:</td>
                    <td className="py-1 pl-7">{order?.products?.length}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Sub-Total:</td>
                    <td className="py-1 pl-7"><span className="font-bold mr-1 text-gray-900">AED</span>{order?.subtotal}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Total:</td>
                    <td className="py-1 pl-7"><span className="font-bold mr-1 text-gray-900">AED</span> {order?.total}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Status:</td>
                    <td className="py-1 pl-7"><div className="text-white bg_admin text-center py-1 rounded-md text-xs capitalize">{order?.status}</div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full bg-white border rounded-md my-5">
          <table className="min-w-full text-xs divide-y divide-gray-200">
            <thead className="bg-[#F7F7F7] sticky top-[53px] border-b">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Sub-Total
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {order && order?.products?.map((product: any, i: number) => {
                const { _id, image, produtTitle, qty, price, discount} = product;
                return (
                  <tr key={i}>
                    <td className="px-6">
                      <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Image
                          className="max-w-full max-h-full rounded-lg"
                          src={image}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {produtTitle}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      {qty}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      AED {price}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      AED {Math.floor(price * qty)}
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewOrder
