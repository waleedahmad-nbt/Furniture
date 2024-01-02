"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Services from "./Services";
import Redefine from "./Redefine";
import ShowCase from "./ShowCase";
import Offers from "./Offers";

const PageManagement = () => {

  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/showcase/get`);
  
        if(res.status === 200) {
          setData(res.data.data);
          console.log(res.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchHome();
  }, [])  

  return Object.keys(data).length > 0 ? (
    <div className="px-5">
      <div className="xl:w-[950px] w-full m-auto">
        <div className="py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-600">Home Page</h1>
        </div>

        {/* ShowCase Form */}
        <ShowCase data={data.showCase} setData={setData} />
        {/* Services Form */}
        <Services data={data.services} setData={setData} />
        {/* Redefine Form */}
        <Redefine data={data.reDefines} setData={setData} />
        {/* Offers Form */}
        <Offers data={data.offers} setData={setData}  />
      </div>
    </div>
  ) : (
    <div className="flex justify-center py-10">
      <div className="Loader w-[50px] border-[7px] border-gray-900"></div>
    </div>
  )
}

export default PageManagement
