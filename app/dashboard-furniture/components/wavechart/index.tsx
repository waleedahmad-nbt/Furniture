"use client";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Wavechart = () => {
  const series: any = [
    {
      name: "Session Duration",
      data: [45, 52, 38, 102, 33, 26, 21, 20, 90, 8, 15, 10],
    },
    // {
    //   name: "Page Views",
    //   data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    // },
    {
      name: "Total Visits",
      data: [10, 57, 74, 88, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 5],
      curve: "smooth",
      dashArray: [4, 4, 5],
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
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
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
      borderColor: "#f1f1f1",
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options && options}
        series={series && series}
        type="line"
        width={'100%'}
        height={350}
      />
    </div>
  );
};

export default Wavechart;
