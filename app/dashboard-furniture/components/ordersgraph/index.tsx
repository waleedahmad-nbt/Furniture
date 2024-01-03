"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import "apexcharts/dist/apexcharts.css";

const Ordersgraph = () => {

  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>("Months");

  useEffect(() => {
    const data = async () => {

      let apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/statistics/orders`;
  
      if(type === "Weeks") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/weekly-statistics/orders`;
      } else if(type === "Days") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-statistics/orders`;
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
      name: 'Sales',
      data: data.data,
    }
  ];

  const options:any = {
    chart: {
      height: 350,
      type: 'line',
    },
    forecastDataPoints: {
      count: 7
    },
    stroke: {
      width: 5,
      curve: 'smooth'
    },
    xaxis: {
      categories: data.labels,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [ '#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 py-4">
        <h2 className="font-bold text-gray-900 text-[20px]">Total Orders</h2>
        <select onChange={(e: any) => setType(e.target.value)} value={type} className="px-1 py-1 rounded-md bg-gray-900 text-white flex gap-3 items-center text-xs">
          <option value="Months">Monthly</option>
          <option value="Weeks">Weekly</option>
          <option value="Days">Daily</option>
        </select>
      </div>
      <div id="chart">
        <ApexCharts options={options} series={seriesData} type="line" width={'100%'} height={350} />
      </div>
    </>
  );
};

export default Ordersgraph;
