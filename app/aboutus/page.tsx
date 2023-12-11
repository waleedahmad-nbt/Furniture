import Image from "next/image";

import brownSofa from "../assets/images/brownSofa.png";
import chairSet from "../assets/images/chairSet.png";
import graySofas from "../assets/images/graySofas.png";

import circle from "../assets/images/circle.svg";
import logo1 from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo (1).svg";
import logo3 from "../assets/images/logo (2).svg";
import logo4 from "../assets/images/logo (3).svg";

import sarah from "../assets/images/sarah.png";
import michel from "../assets/images/michel.png";
import emily from "../assets/images/emily.png";
import david from "../assets/images/david.png";

import arrowIcon from "../assets/icons/ArrowIcon.svg";

const aboutUs = () => {
  return (
    <>
      <div className="aboutUsBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center py-20">
        <div className="flex gap-5 ">
          <div>
            <Image src={brownSofa} alt="img" />
          </div>
          <div>
            <Image src={chairSet} alt="img" />
          </div>
        </div>
        <div>
          <h1 className="text-gray-300 text-5xl font-normal">
            About Our <span className="text-primary">Online</span> <br />
            Store
          </h1>
          <p className="text-gray-100 mt-5">
            We believe in turning ideas into reality and we're ready to join
            your journey. Reach out to us and let's start discussing your
            vision.Together, we can craft software solutions that elevate your
            business to new heights.
          </p>
        </div>
      </div>

      <div className="bg-cream">
        <div className="container grid grid-cols-2 place-items-center py-16">
          <div>
            <Image src={graySofas} alt="" />
          </div>
          <div className=" ps-10">
            <h1 className="text-gray-300 text-5xl font-normal">
              Our <span className="text-primary">Core</span> Values
            </h1>
            <p className="text-gray-200 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim
              ad minim veniam. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="border-2 border-gray-100 px-5 py-10 m-10">
            <h1 className="text-2xl text-gray-300">Our Vision</h1>
            <p className="text-gray-100 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
          <div className="border-2 border-gray-100 px-5 py-10 m-10">
            <h1 className="text-2xl text-gray-300">Our Mission</h1>
            <p className="text-gray-100 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="flex flex-col items-center justify-center gap-5 py-5">
          <h1 className="text-gray-300 text-5xl font-normal">
            Our company <span className="text-primary">partners</span>
          </h1>
          <p className="text-gray-200 text-center text-sm px-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum <br /> has been the industry's standard dummy
            text ever
          </p>
        </div>
        <div className="container flex justify-center gap-5 items-center mt-1 md:mt-10">
          <div className="shadow-md py-3 md:py-8 px-5 scale-75">
            <Image src={logo1} alt="" />
          </div>
          <div className="shadow-md py-3 md:py-8 px-5">
            <Image src={logo2} alt="" />
          </div>
          <div className="shadow-md py-5 md:py-10 px-5">
            <Image src={circle} alt="" />
          </div>
          <div className="shadow-md py-3 md:py-8 px-5">
            <Image src={logo3} alt="" />
          </div>
          <div className="shadow-md py-3 md:py-8 px-5 scale-75">
            <Image src={logo4} alt="" />
          </div>
        </div>
      </div>

      <div className="bg-cream py-32">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-5 px-8">
            <div>
              <h1 className="text-5xl font-medium text-gray-300">
                Meet Our <span className="text-primary">Creative</span> Experts
              </h1>
            </div>
            <div className="bg-primary text-white text-[12px] py-[14px] w-[170px] px-5 rounded-md flex justify-between items-center">
              <p>EXPLORE TEAM</p>
              <Image src={arrowIcon} alt="" />
            </div>
          </div>

          <div className="mt-20 flex justify-center flex-wrap gap-10">
            <div className=" w-max">
              <div className="relative">
                <Image src={sarah} alt="" className="rounded-md" />
                <div className="absolute z-10 px-4 py-2 w-[100%] bg-[#4D4D4D] top-[33%] right-[42.5%] -rotate-90">
                  <ul className="text-primary flex gap-5 ">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-[#4D4D4D] text-2xl text-center">
                  Sarah Johnson
                </h1>
                <p className="text-[#ABBED1] text-center">Furniture Artist</p>
              </div>
            </div>
            <div className=" w-max">
              <div className="relative">
                <Image src={michel} alt="" className="rounded-md" />
                <div className="absolute z-10 px-4 py-2 w-[100%] bg-[#4D4D4D] top-[33%] right-[42.5%] -rotate-90">
                  <ul className="text-primary flex gap-5 ">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-[#4D4D4D] text-2xl text-center">
                  Michel Lee
                </h1>
                <p className="text-[#ABBED1] text-center">
                  Business Development Officer{" "}
                </p>
              </div>
            </div>
            <div className=" w-max">
              <div className="relative">
                <Image src={emily} alt="" className="rounded-md" />
                <div className="absolute z-10 px-4 py-2 w-[100%] bg-[#4D4D4D] top-[33%] right-[42.5%] -rotate-90">
                  <ul className="text-primary flex gap-5 ">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-[#4D4D4D] text-2xl text-center">
                  Emily Chen
                </h1>
                <p className="text-[#ABBED1] text-center">Tourist Guider </p>
              </div>
            </div>
            <div className=" w-max">
              <div className="relative">
                <Image src={david} alt="" className="rounded-md" />
                <div className="absolute z-10 px-4 py-2 w-[100%] bg-[#4D4D4D] top-[33%] right-[42.5%] -rotate-90">
                  <ul className="text-primary flex gap-5 ">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkedin</li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="text-[#4D4D4D] text-2xl text-center">
                  David Adams
                </h1>
                <p className="text-[#ABBED1] text-center">News Reporter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default aboutUs;