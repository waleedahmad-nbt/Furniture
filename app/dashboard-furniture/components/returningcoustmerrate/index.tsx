"use client"
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import "apexcharts/dist/apexcharts.css";
import axios from "axios";

const Returningcoustmer = () => {

  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>("Months");

  useEffect(() => {
    const data = async () => {

      let apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/statistics`;

      if(type === "Weeks") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/weeklystats`;
      } else if(type === "Days") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/user/dailystats`;
      }

      try {
        const res = await axios.get(apiEndPoint);

        if(res.status === 200) {
          setData(res.data.data);
        }
        
      } catch (error) {
        console.log(error)
      }
    }

    data();
  }, [type])

  const seriesData = [
    {
      name: 'Customers',
      data: data.data,
    }
  ];

  const options:any = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: data.labels,
    },
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 py-4">
        <h2 className="font-bold text-gray-900 text-[20px]">Total Customer</h2>
        <select onChange={(e: any) => setType(e.target.value)} value={type} className="px-1 py-1 rounded-md bg-gray-900 text-white flex gap-3 items-center text-xs">
          <option value="Months">Monthly</option>
          <option value="Weeks">Weekly</option>
          <option value="Days">Daily</option>
        </select>
      </div>
      <div id="chart">
        <ApexCharts options={options} series={seriesData} type="area" width={'100%'} height={350} />
      </div>
    </>
  );
};

export default Returningcoustmer;
