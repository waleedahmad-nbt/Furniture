"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import "apexcharts/dist/apexcharts.css";

function Hitmapgraph() {
  const [chartData] = useState({
    series: [
      {
        data: [800, 330, 448],
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
      categories: ["Channel" , "Data" , "Data2"],
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    title: {
      text: "Coustmers Anaylysis",
      align: "center",
      floating: true,
    },
    subtitle: {
      text: "Coustmers Names as Coustmers Anaylysis inside bars",
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
        width={'100%'}
        height={380}
      />
    </div>
  );
}

export default Hitmapgraph;
