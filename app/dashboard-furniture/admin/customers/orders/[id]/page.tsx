"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { BsArrowLeft } from "react-icons/bs";

const Viewuser = () => {
  const Router = useRouter();
  const { id } = useParams();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const getuser = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/details/${id}`);
  
        if(res.status === 200) {
          console.log(res.data.data);
          setUser(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getuser();
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
            Users Orders
          </p>
        </div>
      </div>

      <div className="xl:w-[950px] w-full m-auto">
        <div className="w-full bg-white buser py-3 px-4 rounded-md">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg text-gray-900 font-bold">User Details:</h1>
              <div className="w-[50px] h-[50px] mb-2 mt-1">
                {user?.profileImage &&
                  <Image src={user?.profileImage} width={200} height={200} alt="user" className="w-full h-full rounded-full"/>
                }
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="py-1">First Name:</td>
                    <td className="py-1 pl-7"><h2>{user?.firstName}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Last Name:</td>
                    <td className="py-1 pl-7"><h2>{user?.lastName}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Email:</td>
                    <td className="py-1 pl-7"><h2>{user?.email}</h2></td>
                  </tr>
                  <tr>
                    <td className="py-1">Phone:</td>
                    <td className="py-1 pl-7"><h2>{user?.phoneNumber}</h2></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full bg-white buser rounded-md my-5">
          <table className="min-w-full text-xs divide-y divide-gray-200">
            <thead className="bg-[#F7F7F7] sticky top-[53px] buser-b">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Order Code
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
                  Sub-Total
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {user && user?.orders?.map((product: any, i: number) => {
                const { _id, orderCode, products, paymentMethod, total, subtotal, status} = product;
                return (
                  <tr key={i}>
                    <td className="px-6">
                      {orderCode}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {products?.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      {paymentMethod}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      AED {subtotal}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      AED {total}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      <div
                        className={` ${
                          status === "delivered"
                            ? "bg-gray-900 text-white"
                            : status === "processing"
                            ? "bg-orange-500"
                            : status === "completed" ? "bg-green" : ""
                        } h-max py-1 px-2 rounded-md text-center capitalize font-bold text-gray-900`}
                      >
                        {status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs">
                      <Link href={`/dashboard-furniture/admin/orders/details/${_id}`} className="px-2 text-white py-1 rounded-md relative bg_admin hover:bg-gray-900">
                        View Order
                      </Link>
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

export default Viewuser