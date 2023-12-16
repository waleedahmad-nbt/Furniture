"use client"
import Image from "next/image";
import joybird from "@/app/assets/images/joybird.png";
import blueSofa from "@/app/assets/images/blueSofa.png";
import chair from "@/app/assets/images/desingedChair.png";
import graypair from "@/app/assets/images/grayPair.png";
import sofacmBed from "@/app/assets/images/sofacmBed.png";
import grayBed from "@/app/assets/images/grayBed.png";
import yellowSofa from "@/app/assets/images/yellowSofa.png";

import livingRoomChair from "@/app/assets/images/livingRoomChair.png";
// import { PhotoAlbum } from "react-photo-album";

const customizeFurniture = () => {
  let furnitureArr = [
    { title: "All", class: "active" },
    { title: "Bed", class: "" },
    { title: "Sofa", class: "" },
    { title: "Dressing table", class: "" },
    { title: "Wardrobe", class: "" },
    { title: "Bean bag", class: "" },
    { title: "Living Room", class: "" },
    { title: "TV units", class: "" },
    { title: "Coffee table", class: "" },
    { title: "Office furniture", class: "" },
    { title: "Curtain", class: "" },
    { title: "Living Room", class: "" },
  ];

  // const photos: any = [
  //   { 
  //     src: "https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0",
  //     height: 1080,
  //     width: Math.floor(Math.random() * (2000 - 100 + 1) + 100)
  //   },
  //   { 
  //     src: "https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0",
  //     height: 1080,
  //     width: Math.floor(Math.random() * (2000 - 100 + 1) + 100)
  //   },
  //   { 
  //     src: "https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0",
  //     height: 1080,
  //     width: Math.floor(Math.random() * (2000 - 100 + 1) + 100)
  //   },
  //   { 
  //     src: "https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0",
  //     height: 1080,
  //     width: Math.floor(Math.random() * (2000 - 100 + 1) + 100)
  //   },
  //   { 
  //     src: "https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0",
  //     height: 1080,
  //     width: Math.floor(Math.random() * (2000 - 100 + 1) + 100)
  //   },
  // ]; 

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
                // console.log(item);

                return (
                  <div key={index} className={`group ${item.class}`}>
                    <div className="border px-3 py-1 group-[.active]:bg-primary group-[.active]:text-white text-gray-200 font-normal">
                      {item.title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <div>
            <PhotoAlbum layout="rows" photos={photos} />
          </div> */}
          
          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div>
                <Image src={joybird} alt="" />
              </div>
              <div className="flex flex-col sm:flex-row gap-2 ">
                <div>
                  <Image src={chair} alt="" />
                </div>
                <div>
                  <Image src={graypair} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative ">
                <Image src={blueSofa} alt="" />
                <div className="absolute top-2 md:top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 md:gap-4">
                  <div className="bg-[#3C3C3C] pb-3 w-[200px] min-h-[100px] lg:w-[356px] md:min-h-[159px] text-center px-2 border">
                    <h1 className="text-white text-sm lg:text-3xl mt-3">
                      Living <span className="text-primary">Room</span> <br />
                      Customize{" "}
                    </h1>
                    <p className="text-white text-[10px] lg:text-[14px] mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been
                    </p>
                  </div>
                  <button className=" text-white bg-primary py-[8px] px-[10px] lg:px-[16px] w-[172px] h-[40px] text-[14px]">
                    Order Now
                  </button>
                </div>
              </div>
              <div>
                <Image src={sofacmBed} alt="" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div>
                <Image src={grayBed} alt="" />
              </div>
              <div>
                <Image src={yellowSofa} alt="" />
              </div>
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
