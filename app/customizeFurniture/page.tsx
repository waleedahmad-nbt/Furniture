import Image from "next/image";
import joybird from "../assets/images/joybird.png";
import blueSofa from "../assets/images/blueSofa.png";
import chair from "../assets/images/desingedChair.png";
import graypair from "../assets/images/grayPair.png";
import sofacmBed from "../assets/images/sofacmBed.png";
import grayBed from "../assets/images/grayBed.png";
import yellowSofa from "../assets/images/yellowSofa.png";

import livingRoomChair from "../assets/images/livingRoomChair.png";

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

          <div className="mt-10 flex flex-col items-center gap-2">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div>
                <Image src={joybird} alt="" />
              </div>
              <div className="flex flex-col md:flex-row gap-2 ">
                <div>
                  <Image src={chair} alt="" />
                </div>
                <div>
                  <Image src={graypair} alt="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="relative ">
                <Image src={blueSofa} alt="" />
                <div className="absolute top-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
                  <div className="bg-[#3C3C3C] w-[200px] min-h-[100px] md:w-[356px] md:h-[159px] text-center px-2 border">
                    <h1 className="text-white text-xl md:text-3xl mt-3">
                      Living <span className="text-primary">Room</span> <br />
                      Customize{" "}
                    </h1>
                    <p className="text-white text-[10px] md:text-[14px] mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been
                    </p>
                  </div>
                  <button className=" text-white bg-primary py-[8px] px-[16px] w-[172px] h-[40px]">
                    Order Now
                  </button>
                </div>
              </div>
              <div>
                <Image src={sofacmBed} alt="" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
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

      <div className="relative container flex justify-end pb-10 px-10 ">
        {/* <div className="pr-12"> */}
        <Image src={livingRoomChair} alt="" className="" />
        {/* </div> */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(to right, #F3EFE5, #F3EFE5, #F3EFE5, #F3EFE500)",
          }}
          className="absolute sm:h-[250px] md:h-[300px] lg:h-[380px] px-20 sm:left-[1%] md:left-[0%] hidden sm:flex items-start pt-7  "
        >
          <div>
            <p className="uppercase text-primary font-medium">
              Weekend discount
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-gray-300 mt-5">
              Order Your <span className="text-primary">Customized</span> <br />
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
    </>
  );
};

export default customizeFurniture;
