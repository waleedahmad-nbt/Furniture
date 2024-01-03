"use client";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Wavechart = ({ data, checkTab }: any) => {
  const series: any = [
    {
      name: ["Customers", "Sales", "Orders", "Conversations"][checkTab],
      data: data?.data,
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
      categories: data?.labels,
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
