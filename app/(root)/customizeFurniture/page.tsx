"use client"
import { useState } from "react";
import Image from "next/image";
import joybird from "@/app/assets/images/joybird.png";
import blueSofa from "@/app/assets/images/blueSofa.png";
import chair from "@/app/assets/images/desingedChair.png";
import graypair from "@/app/assets/images/grayPair.png";
import sofacmBed from "@/app/assets/images/sofacmBed.png";
import grayBed from "@/app/assets/images/grayBed.png";
import yellowSofa from "@/app/assets/images/yellowSofa.png";

import livingRoomChair from "@/app/assets/images/livingRoomChair.png";

const customizeFurniture = () => {

  const [filterValue, setFilterValue] = useState<string>("All");

  let furnitureArr = [
    { title: "All" },
    { title: "Bed" },
    { title: "Sofa" },
    { title: "Dressing table" },
    { title: "Wardrobe" },
    { title: "Bean bag" },
    { title: "Living Room" },
    { title: "TV units" },
    { title: "Coffee table" },
    { title: "Office furniture" },
    { title: "Curtain" },
    { title: "Living Room" },
  ];

  const photos: any = [
    { src: joybird, category: "Bed" },
    { src: joybird, category: "Bed" },
    { src: joybird, category: "Bed" },
    { src: joybird, category: "Bed" },
    { src: joybird, category: "Bed" },
    { src: blueSofa, category: "Bed" },
    { src: blueSofa, category: "Bed" },
    { src: blueSofa, category: "Bed" },
    { src: blueSofa, category: "Bed" },
    { src: blueSofa, category: "Sofa" },
    { src: yellowSofa, category: "Sofa" },
    { src: yellowSofa, category: "Sofa" },
    { src: yellowSofa, category: "Sofa" },
    { src: graypair, category: "Sofa" },
    { src: graypair, category: "Sofa" },
    { src: graypair, category: "Sofa" },
    { src: joybird, category: "Sofa" },
    { src: joybird, category: "Sofa" },
    { src: joybird, category: "Sofa" },
    { src: joybird, category: "Sofa" },
  ]; 

  const filter = (rows: any) => {

    if(!filterValue || filterValue === "All") {
      return rows;
    }

    const filtered = rows.filter((item: any) => item.category === filterValue);
    return filtered;
  };

  return (
    <>
      <div className="customizeFurnitureBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-center text-3xl md:text-5xl font-bold">
            Customize Furniture{" "}
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
              {furnitureArr.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={`group ${filterValue === item.title ? "active" : ""}`}
                  >
                    <div
                      onClick={() => setFilterValue(item.title)}
                      className="border px-3 py-1 group-[.active]:bg-primary group-[.active]:text-white text-gray-200 font-normal cursor-pointer"
                    >
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="Grid_Gallery">
              {filter(photos)?.map((item: any, index: number) => {

                const groupId = Math.floor(index / 11);

                return (
                  <div style={{ "--n": groupId } as React.CSSProperties} key={index}>
                    <Image src={item.src} alt="" width={500} height={500} className="w-full h-full"/>
                  </div>
                )
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

export default customizeFurniture;
