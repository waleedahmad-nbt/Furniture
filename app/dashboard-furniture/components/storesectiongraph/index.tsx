"use client";
import React from "react";

import ApexCharts from "react-apexcharts"
import "apexcharts/dist/apexcharts.css";

const StockPriceChart = () => {
  const series = [
    {
      name: "Store Sections",
      data: [20, 30, 40, 60, 90, 20],
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
      categories: ["Jan", "Feb", "Mar", "April", "May", "June"], // Add appropriate categories here
    },
    // Rest of your options
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type="area"
      height={options.chart.height}
    />
  );
};

export default StockPriceChart;