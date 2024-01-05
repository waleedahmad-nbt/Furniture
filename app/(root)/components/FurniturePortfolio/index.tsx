"use client";
import { useState } from "react";
import Image from "next/image";
import livingRoomChair from "@/app/assets/images/livingRoomChair.png";

const FurniturePortfolio = ({ response, allCategories }: any) => {
  const [filterValue, setFilterValue] = useState<string>("All");

  const filter = (rows: any) => {
    if (!filterValue || filterValue === "All") {
      return rows;
    }

    const filtered = rows.filter(
      (item: any) => item.category?.toLowerCase() === filterValue?.toLowerCase()
    );
    return filtered;
  };

  return (
    <>
      <div className="customizeFurnitureBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold">
            Customize Furniture Portfolio
          </h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>

      <div className="">
        <div className="container py-20">
          <h1 className="capitalize font-normal text-2xl md:text-5xl text-center">
            our <span className="text-primary">customize furniture</span>{" "}
            portfolio
          </h1>
          <div>
            <div className="flex flex-wrap gap-2 justify-center mt-5">
              <div className={`group ${filterValue === "All" ? "active" : ""}`}>
                <div
                  onClick={() => setFilterValue("All")}
                  className="border px-3 py-1 group-[.active]:bg-primary group-[.active]:text-white text-gray-200 font-normal cursor-pointer"
                >
                  All
                </div>
              </div>
              {response &&
                allCategories.map((item: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className={`group ${
                        filterValue === item.category ? "active" : ""
                      }`}
                    >
                      <div
                        onClick={() => setFilterValue(item.category)}
                        className="border px-3 py-1 group-[.active]:bg-primary group-[.active]:text-white text-gray-200 font-normal cursor-pointer"
                      >
                        {item.category}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="Grid_Gallery">
              {filter(response)?.map((item: any, index: number) => {
                const groupId = Math.floor(index / 11);

                return (
                  <div
                    style={{ "--n": groupId } as React.CSSProperties}
                    key={index}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={500}
                      height={500}
                      className="w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <div className="relative h-[300px]">
          <div className="absolute h-full right-0 top-0 z-[-1]">
            <Image
              src={livingRoomChair}
              alt="banner"
              className="max-h-[300px] h-full object-cover"
            />
          </div>
          <div className="Discount_Banner px-10 py-10 h-full flex items-center">
            <div>
              <p className="uppercase text-primary font-medium">
                Weekend discount
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-gray-300 mt-5">
                Order Your <span className="text-primary">Customized</span>{" "}
                <br />
                Furniture
              </h1>
              <p className="text-gray-200 text-[14px] mt-2">
                Organizing never looked so good, Design yours today!..
              </p>
              <button className="text-white bg-primary py-[10px] px-[16px] w-[176px] mt-5">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FurniturePortfolio;
