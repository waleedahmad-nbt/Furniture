'use client'
import { BsArrowLeft, BsFillCalendarFill } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Image from "next/image"; 
import icon1 from '@/app/assets/images/Marketing/icon1.svg'
import icon2 from '@/app/assets/images/Marketing/icon2.svg'
import icon3 from '@/app/assets/images/Marketing/icon3.svg'
import icon4 from '@/app/assets/images/Marketing/icon4.svg'
import icon5 from '@/app/assets/images/Marketing/icon5.svg'

import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const products:any = [
  {
    id: 1,
    channel: "Facebook",
    image: icon1,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
    returningCustomers: "120",
  },
  {
    id: 1,
    channel: "Direct",
    image: icon2,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
    returningCustomers: "120",
  },
  {
    id: 1,
    channel: "Instagram",
    image: icon3,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
    returningCustomers: "120",
  },
  {
    id: 1,
    channel: "Unattributed",
    image: icon4,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
    returningCustomers: "120",
  },
  {
    id: 1,
    channel: "Bing",
    image: icon5,
    sales: "137,289.00",
    sessions: "6,204",
    orders: 3,
    conversionRate: "1.95%",
    AOV: "1,134.62",
    FirstTimeCustomers: "120",
    returningCustomers: "120",
  }
  
]

const Compaigns = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <div className=" py-3 px-5 w-full m-auto">
      <div className="Orderbar w-full flex justify-between items-center mb-7">
      <div className="p-3 flex items-center">
            <Link href={'/dashboard/seller/marketing'}>
            <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-300">
              <BsArrowLeft />
            </div>
            </Link>
            <p className="text-xl text-ubuntu-bold text-HeadingColours">
            Campaigns
            </p>
          </div>
      </div>
      <div className="flex justify-between text-ubuntu-regular ">
        <div className="flex justify-between ">
          <div className="bg-white w-max text-sm flex items-center justify-between h-max py-1 px-2 rounded-md shadow-md cursor-pointer active:scale-95">
            <BsFillCalendarFill className="text-HeadingColours mr-2" />
            <p>Last 30 days</p>
          </div>
        </div>
        <div className="">
          <div className="bg-white w-max text-sm flex items-center justify-between h-max py-1 px-2 rounded-md shadow-md cursor-pointer active:scale-95">
            <SiSimpleanalytics className="text-HeadingColours mr-2" />
            <p>Last non-direct click</p>
            <FaAngleDown className="text-HeadingColours mr-2" />
          </div>
        </div>
      </div>
    

      <div className="py-6 px-4 mt-4 bg-white w-full rounded-xl text-HeadingColours text-ubuntu-regular">
        <div className="flex justify-between ">
          <p className="text-sm">Top channel performance</p>
          <HiOutlineDocumentReport />
        </div>
        <p className="text-sm pt-6">
          Reporting is based on your UTM parameters and connected app
          activities to your online store. Reported with a 30-day attribution
          window.
        </p>
          <span className="text-blue-600 text-xs underline cursor-pointer hover:text-blue-800">
            Learn More
          </span>

          <table className="min-w-full text-xs divide-y divide-gray-200">
            <thead className=" sticky top-[54px]">
              <tr>
                <th
                  scope="col"
                  className="pr-3 py-2 text-left text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Campaign activities
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Sales
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Sessions
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Orders
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  AOV
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Conversion rate
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  First time customers
                </th>
                <th
                  scope="col"
                  className="pr-3 py-2 text-right text-xs font-medium text-HeadingColours uppercase tracking-wider"
                >
                  Returning customers
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product:any,i:any) => (
                <tr key={i} className="">
                  <td className="max-w-[300px] pr-3 text-left py-3 flex items-center text-xs text-gray-900">
                    <Image className="w-[15px] mr-2" src={product.image} alt="" /> 
                    <div>
                    <p className="text-ubuntu-bold">Organic</p>
                    <p>{product.channel}</p>
                    </div>
                  </td>
                  <td className="pr-3 py-3 whitespace-nowrap text-right w text-xs">
                      {product.sales}
                  </td>
                  <td
                    className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                  >
                    {product.sessions}
                  </td>
                  <td
                    className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                  >
                    {product.orders}
                  </td>
                  <td
                    className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                  >
                    {product.conversionRate}
                  </td>
                  <td
                    className={`pr-3 text-right py-3 whitespace-nowrap text-xs `}
                  >
                    {product.AOV}
                  </td>
                  <td
                    className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                  >
                    {product.FirstTimeCustomers}
                  </td>
                  <td
                    className={`pr-3 text-right py-2 whitespace-nowrap text-xs `}
                  >
                    {product.returningCustomers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="w-full bg-[#F3F3F3] flex justify-center items-center p-3">
          <span className="text-P_textColour  text-sm ">
            Displaying top 6 items
          </span>

          </div>

      </div>



    </div>
  );
};

export default Compaigns;

