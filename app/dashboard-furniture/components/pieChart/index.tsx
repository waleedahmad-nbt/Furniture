'use client'

import React, { useState } from 'react';
// import ReactApexChart from 'react-apexcharts';
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
const PieChart = () => {
  const [series, setSeries] = useState([44, 55, 13, 33]);
  const options:any = {
    chart: {
      width: 380,
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: 'bottom',
      offsetY: 0,
      height: 30,
    },
  }


  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart options={options} series={series} type="donut" width={380} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
