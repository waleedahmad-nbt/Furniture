"use client";
import React, { useEffect, useState } from "react";
import Userlayout from "../../layouts/userdashboard";
import Image from "next/image";
import { BiSearch, BiSort } from "react-icons/bi";
import image from "../../../assests/images/Seller/Product.jpeg";
import { BsFilter } from "react-icons/bs";
import NotFound from "../components/NotFound";
const products:any = [
  {
    id: 1,
    image: image,
    time: '3 years',
    name: "Product Adsfsd sd sd s fdsdf  sdf sdf sd fsdf asdasd",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
  {
    id: 2,
    image: image,
    time: '3 years',
    name: "Product B",
    status: "Warranty",
  },
]
// const products:any = []
const Warranty = () => {

  const [val, setVal] = useState(0)
  const [category, setCategory] = useState('all')
  const [data, setData] = useState([])

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  useEffect(() => {
    setData([])
    if(category==="all"){
      setData(products)
    }
    else if(category==="Warranty"){
      setData(
        products.filter((e:any, i:any) => {
          return e.status === 'Warranty'
        })
      )
    }
  },[category])


  return (
    <>
      <Userlayout>
      {data.length===0 ? 
      <>
        <NotFound/>
      </> 
      :<>
          <div className="sm:px-10 px-3">
            <h1 className="text-2xl text-ubuntu-bold mb-5 text-HeadingColours">Warranty</h1>
            <div className="bg-white rounded-lg">
          <div className="flex justify-between items-center p-2">
            <div className="flex justify-center items-center gap-2">
              <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 text-HeadingColours ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
                All
              </button>
            </div>
            <div className="flex">
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
                <BiSearch />
                <BsFilter />
              </button>
              <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border text-HeadingColours bg-white hover:shadow-none">
              <BiSort />
              </button>
            </div>
          </div>
          <div className="w-full overflow-auto">
            <table className="min-w-full text-xs divide-y divide-gray-200">
              <thead className="bg-[#F7F7F7] sticky top-[0px]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th></th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Time
                  </th>

                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data && data.map((product, i) => {
                  const {image, name, time, status, stock, sales, market, type, vender} = product
                  return(
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td>
                      <Image
                        className="h-[50px] w-max"
                        src={image}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular ${status === "Warranty" ? "bg-[#E8FFEB] text-[#197926]" : "bg-[#E0F0FF] text-[#0E57A2]"}`}>
                        {status}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap text-xs text-gray-500">
                      {time}
                    </td>
                  </tr>
                  )})}
              </tbody>
            </table>
          </div>
        </div>

          </div>
      </>}

      </Userlayout>
    </>
  );
};

export default Warranty;
