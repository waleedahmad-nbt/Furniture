"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Averagegraph = () => {
  const series = [
    {
      name: "Session Duration",
      data: [45, 10, 38, 102, 20, 26, 80, 20, 90, 8, 15, 10],
    },
    // {
    //   name: "Page Views",
    //   data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    // },
    {
      name: "Total Visits",
      data: [10, 70, 74, 88, 75, 38, 62, 100, 82, 56, 45, 47],
    },
  ];

  const options: any = {
    
    chart: {
      height: 50,
      type: "line",
      zoom: {
        enabled: false,
      },
      background: "#ffffff",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 5],
      curve: "smooth",
      dashArray: [1],
    },
    legend: {
      tooltipHoverFormatter: (val: any, opts: any) => {
        return (
          val +
          " - " +
          opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          ""
        );
      },
    },
    markers: {
      size: 3,
      hover: {
        sizeOffset: 1,
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: (val: any) => {
              return val + " (mins)";
            },
          },
        },
        {
          title: {
            formatter: (val: any) => {
              return val + " per session";
            },
          },
        },
        {
          title: {
            formatter: (val: any) => {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      show: true, // Hide grid lines
    },
    xaxis: {
      labels: {
        show: true, // Hide x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: true, // Hide y-axis labels
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default Averagegraph;
