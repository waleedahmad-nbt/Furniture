"use client";
import React from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Smallchart = () => {
  const series = [
    {
      data: [10, 4,8,2,11,1, 10000000],
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
      show: false, // Hide grid lines
    },
    xaxis: {
      labels: {
        show: false, // Hide x-axis labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide y-axis labels
      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={50}
      />
    </div>
  );
};

export default Smallchart;
