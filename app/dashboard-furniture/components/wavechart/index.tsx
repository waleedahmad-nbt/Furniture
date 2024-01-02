"use client";

import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Wavechart = ({ data, type, checkTab }: any) => {
  const series: any = [
    {
      name: ["Customers", "Sales", "Orders", "Conversations"][checkTab],
      data,
    },
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function getCurrentAndPreviousMonths() {
    const currentDate = new Date();
    const result = [];
  
    for (let i = 0; i < 12; i++) {
      const currentMonthDate = new Date(currentDate);
      currentMonthDate.setMonth(currentDate.getMonth() - i);
  
      const monthName = months[currentMonthDate.getMonth()];
      result.unshift(monthName); // Add to the beginning of the array
    }
  
    return result;
  }
  
  function getLast30Days() {
    const currentDate = new Date();
    const result = [];
  
    for (let i = 30; i >= 0; i--) {
      const currentDayDate = new Date(currentDate);
      currentDayDate.setDate(currentDate.getDate() - i);
      currentDayDate.setHours(0, 0, 0, 0);
  
      const dayNumber = currentDayDate.getDate();
      result.push(dayNumber); // Add to the end of the array
    }
  
    return result;
  }
  
  const last30DaysArray = getLast30Days();
  console.log(last30DaysArray);

  const days = Array.from({ length: 31 }).map((_, index) => index + 1);

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
      categories: type === "Days" ? getLast30Days() : getCurrentAndPreviousMonths(),
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
