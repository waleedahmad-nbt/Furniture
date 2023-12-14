import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Wavechart from "../../components/wavechart";
import { Averagegraph, Channelgraph, Ordersgraph, Returningcoustmer, Sellproductsgraph, StockPriceChart, Storeconservation } from "../../components";
import Hitmaphraph from "../../components/hitmapgraph";

const Analytices = () => {
  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">
        Analytics
      </h1>
      <div className="mt-5 flex justify-between">
        <div className="flex space-x-2">
          <div className="flex py-1 px-2 rounded-lg cursor-pointer text-xs shadow-sm bg-white w-max items-center">
            <AiOutlineCalendar className="mr-1" />
            Today
          </div>
          <div className="flex py-1 px-2 rounded-lg  cursor-pointer text-xs shadow-sm bg-white w-max items-center">
            Compare:Yesterday
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <input
              type="checkbox"
              className="mr-2 focus:ring-0 focus:outline-none"
            />
            <span className="text-xs border-b-4 border-dotted">
              Auto-refresh
            </span>
          </div>
          <div className="flex py-1 px-2 rounded-lg  cursor-pointer  text-xs shadow-sm bg-white w-max items-center">
            Customize
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-5 mt-5">
        <div className="bg-white rounded-lg">
          <Wavechart />
        </div>
        <div className="bg-white rounded-lg">
          <Channelgraph />
        </div>
        <div className="bg-white rounded-lg">
          <StockPriceChart />
        </div>
        <div className="bg-white rounded-lg">
          <Storeconservation />
        </div>
        <div className="bg-white rounded-lg">
          <Ordersgraph />
        </div>
        <div className="bg-white rounded-lg">
          <Averagegraph />
        </div>
        <div className="bg-white rounded-lg">
          <Sellproductsgraph />
        </div>
        <div className="bg-white rounded-lg">
          <Hitmaphraph />
        </div>
        <div className="bg-white rounded-lg">
          <Returningcoustmer />
        </div>
      </div>
    </div>
  );
};

export default Analytices;
