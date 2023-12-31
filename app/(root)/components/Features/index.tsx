import Image from "next/image";

import "react-loading-skeleton/dist/skeleton.css";
import ServicesSkeleton from "../Skeletons/ServicesSkeleton";

const Features = ({ services, loading }: any) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-5">
        {loading ? (
          <ServicesSkeleton />
        ) : (
          services &&
          services.map((item: any, index: any) => {
            return (
              <div key={index} className="bg-silver py-7 text-center border-[0.6px] min-h-[150px] border-gray-200 w-[100%] sm:w-[290px] flex flex-col justify-center items-center gap-1">
                <div className="w-[83.7px] h-[47.03px]">
                  <Image
                    src={item.image}
                    alt="icon"
                    className="mx-auto mb-2 w-full h-full"
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-gray-300 font-bold">{item.title}</h3>
                <p className="text-gray-300">{item.subTitle}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Features;
