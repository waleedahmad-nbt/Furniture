"use client";
import React, { useState } from "react";

import ReactApexChart from "react-apexcharts"
import "apexcharts/dist/apexcharts.css";

function Channelgraph() {
  const [chartData] = useState({
    series: [
      {
        data: [400, 430, 448],
      },
    ],
  });

  const options: any = {
    chart: {
      type: "bar",
      height: 380,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "#33b2df",
      "#546E7A",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start",
      style: {
        colors: ["#fff"],
      },
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ": " + val;
      },
      offsetX: 0,
      dropShadow: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["Channel"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: "Custom DataLabels",
      align: "center",
      floating: true,
    },
    subtitle: {
      text: "Category Names as DataLabels inside bars",
      align: "center",
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={chartData.series}
        type="bar"
        height={380}
      />
    </div>
  );
}

export default Channelgraph;
