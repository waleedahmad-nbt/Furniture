"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const SliderImage = ({ item, itemNumebr, setIndex, hover }: any) => {
  const [width, setWidth] = useState<number>(0);
  const img = useRef<any>(null);

  useEffect(() => {
    if (!img.current) {
      return;
    }

    const resize = () => {
      setWidth(img.current.scrollWidth);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [img]);

  return (
    <div
      onMouseEnter={() => setIndex(itemNumebr)}
      onMouseLeave={() => setIndex(0)}
      className="relative flex-[1_1_auto] mx-[2px] overflow-hidden duration-500 max-w-[70%]"
      style={{
        width: hover ? `${width}px` : "33.33%",
        flexShrink: hover ? "0" : "1",
      }}
    >
      <div
        ref={img}
        className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full cursor-pointer w-max`}
      >
        <Image
          src={item}
          alt="banner"
          priority
          className="h-full w-full"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
};

export default SliderImage;
