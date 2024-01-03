import { Ordersgraph, Returningcoustmer, StockPriceChart } from "../../components";

const Analytices = () => {

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">
        Analytics
      </h1>
      <div className=" grid grid-cols-3 gap-5 mt-5">
        <div className="bg-white rounded-lg">
          <Returningcoustmer />
        </div>
        <div className="bg-white rounded-lg">
          <Ordersgraph />
        </div>
        <div className="bg-white rounded-lg">
          <StockPriceChart />
        </div>
      </div>
    </div>
  );
};

export default Analytices;
