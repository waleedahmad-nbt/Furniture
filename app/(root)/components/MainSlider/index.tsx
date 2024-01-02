"use client";
import { useState } from "react";

import Banner from "@/app/assets/banners/bedroom.png";
import Banner1 from "@/app/assets/banners/interior.png";
import Banner2 from "@/app/assets/banners/442.png";
import Banner3 from "@/app/assets/banners/banner_04.png";
import SliderImage from "./sliderImage";

const MainSlider = ({ images }: any) => {
  const [index, setIndex] = useState<number>(0);

  // const images = [Banner, Banner1, Banner2, Banner3];

  return (
    <div className="h-full w-full flex">
      {images?.map((item: any, i: number) => (
        <SliderImage
          item={item}
          hover={index === i}
          setIndex={setIndex}
          itemNumebr={i}
          key={i}
        />
      ))}
    </div>
  );
};

export default MainSlider;
