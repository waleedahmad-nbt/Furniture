"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });
import "apexcharts/dist/apexcharts.css";
import axios from "axios";

const StockPriceChart = () => {

  const [data, setData] = useState<any>([]);
  const [type, setType] = useState<string>("Months");

  useEffect(() => {
    const data = async () => {

      let apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/sales/orders`;
  
      if(type === "Weeks") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/weekly-sales/orders`;
      } else if(type === "Days") {
        apiEndPoint = `${process.env.NEXT_PUBLIC_BASE_URL}/order/daily-sales/orders`;
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

  const series = [
    {
      name: "Store Sections",
      data: data.data,
    },
  ];

  const options: any = {
    chart: {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true,
      },
      toolbar: {
        autoSelected: "zoom",
      },
    },
    xaxis: {
      categories: data.labels,
    },
  };

  return (
    <>
      <div className="flex items-center justify-between px-3 py-4">
        <h2 className="font-bold text-gray-900 text-[20px]">Total Sales</h2>
        <select onChange={(e: any) => setType(e.target.value)} value={type} className="px-1 py-1 rounded-md bg-gray-900 text-white flex gap-3 items-center text-xs">
          <option value="Months">Monthly</option>
          <option value="Weeks">Weekly</option>
          <option value="Days">Daily</option>
        </select>
      </div>
      <div id="chart">
        <ApexCharts
          options={options}
          series={series}
          type="area"
          width={'100%'}
          height={options.chart.height}
        />
      </div>
    </>
  );
};

export default StockPriceChart;
