"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import stylishChair from "@/app/assets/images/stylishChair.png";
import arrowDown from "@/app/assets/icons/arrowDown.svg";

import bed from "@/app/assets/images/bed.png";
import dressingTable from "@/app/assets/images/Dressingtable.png";
import sofa from "@/app/assets/images/sofa.png";
import wardrobe from "@/app/assets/images/Wardrobe.png";
import curtains from "@/app/assets/images/Curtains.png";

import grayVelvet from "@/app/assets/images/grayVelvet.png";
import offWhiteWool from "@/app/assets/images/offWhiteWool.png";
import velvet from "@/app/assets/images/velvet.png";
import redVelvet from "@/app/assets/images/redVelvet.png";
import wool from "@/app/assets/images/wool.png";

import wood from "@/app/assets/images/wood.png";
import blackWood from "@/app/assets/images/blackWood.png";
import iron from "@/app/assets/images/iron.png";

import joybird from "@/app/assets/images/joybird.png";
import blueSofa from "@/app/assets/images/blueSofa.png";
import chair from "@/app/assets/images/desingedChair.png";
import graypair from "@/app/assets/images/grayPair.png";
import sofacmBed from "@/app/assets/images/sofacmBed.png";
import grayBed from "@/app/assets/images/grayBed.png";
import yellowSofa from "@/app/assets/images/yellowSofa.png";

const customizeFurnitureForm = () => {
  const categories = [
    { title: "Bed", img: bed },
    { title: "Dressing table", img: dressingTable },
    { title: "Sofa", img: sofa },
    { title: "Wardrobe", img: wardrobe },
    { title: "Curtains", img: curtains },
  ];

  const [categoriesHeight, setCategoriesHeight] = useState(false);
  const [category, setCategory] = useState("Select Category");

  const changeHeight = () => {
    setCategoriesHeight(!categoriesHeight);
    setColorsHeight(colorsHeight ? !colorsHeight : colorsHeight);
    setStuffsHeight(stuffsHeight ? !stuffsHeight : stuffsHeight);
    setMaterialsHeight(materialsHeight ? !materialsHeight : materialsHeight);
  };

  const settingCategory = (category: any) => {
    setCategory(category);
    setCategoriesHeight(!categoriesHeight);
  };

  const colors = [
    { title: "Red", color: "#723222" },
    { title: "Blue", color: "#061E43" },
    { title: "Green", color: "#355E35" },
    { title: "Yellow", color: "#E8BC61" },
    { title: "Grey", color: "#6A7073" },
  ];

  const [colorsHeight, setColorsHeight] = useState(false);
  const [color, setcolor] = useState("Select Color");

  const changeColorHeight = () => {
    setColorsHeight(!colorsHeight);
    setCategoriesHeight(
      categoriesHeight ? !categoriesHeight : categoriesHeight
    );
    setStuffsHeight(stuffsHeight ? !stuffsHeight : stuffsHeight);
    setMaterialsHeight(materialsHeight ? !materialsHeight : materialsHeight);
  };

  const settingColor = (color: any) => {
    setcolor(color);
    setColorsHeight(!colorsHeight);
  };

  const stuffs = [
    { title: "Velvet", img: grayVelvet },
    { title: "Wool", img: offWhiteWool },
    { title: "Velvet", img: velvet },
    { title: "Velvet", img: redVelvet },
    { title: "Wool", img: wool },
  ];

  const [stuffsHeight, setStuffsHeight] = useState(false);
  const [stuff, setStuff] = useState("Select Stuff");

  const changeStuffHeight = () => {
    setStuffsHeight(!stuffsHeight);
    setColorsHeight(colorsHeight ? !colorsHeight : colorsHeight);
    setCategoriesHeight(
      categoriesHeight ? !categoriesHeight : categoriesHeight
    );
    setMaterialsHeight(materialsHeight ? !materialsHeight : materialsHeight);
  };

  const settingStuff = (stuff: any) => {
    setStuff(stuff);
    setStuffsHeight(!stuffsHeight);
  };

  const materials = [
    { title: "Wood", img: wood },
    { title: "Black Wool", img: blackWood },
    { title: "Iron", img: iron },
  ];

  const [materialsHeight, setMaterialsHeight] = useState(false);
  const [material, setMaterial] = useState("Select Material");

  const changeMaterialHeight = () => {
    setMaterialsHeight(!materialsHeight);
    setColorsHeight(colorsHeight ? !colorsHeight : colorsHeight);
    setStuffsHeight(stuffsHeight ? !stuffsHeight : stuffsHeight);
    setCategoriesHeight(
      categoriesHeight ? !categoriesHeight : categoriesHeight
    );
  };

  const settingMaterial = (material: any) => {
    setMaterial(material);
    setMaterialsHeight(!materialsHeight);
  };

  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const [imagePath, setImagePath] = useState("");

  const handleChanging = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // console.log(formData);

  const handleFileChange = (event: any) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setImagePath(file.name);
      };

      reader.readAsDataURL(file);

      setFormData({ ...formData, Representingimg: file });
    }
  };

  useEffect(() => {
    setFormData({ ...formData, category: category });
  }, [category]);

  useEffect(() => {
    setFormData({ ...formData, color: color });
  }, [color]);

  useEffect(() => {
    setFormData({ ...formData, stuff: stuff });
  }, [stuff]);

  useEffect(() => {
    setFormData({ ...formData, material: material });
  }, [material]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData, "formData");
  };

  return (
    <>
      <div className="contactUsBg">
        <div className="container flex flex-col items-center justify-center gap-4 min-h-[50vh]">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Get a quote
          </h1>
          <p className="text-white text-center">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or <br /> web designs. The passage is
            attributed to an unknown typesetter in.
          </p>
        </div>
      </div>

      <div className="relative container pt-20 ">
        <div>
          <Image src={stylishChair} alt="" className="w-full" />
        </div>
        <div
          className="absolute  top-[30%] left-1/2 -translate-x-1/2 w-[250px] md:w-[452px] border-2 border-white text-center py-5"
          style={{ backgroundColor: "rgba(61, 60, 60, 0.527)" }}
        >
          <h1 className="capitalize text-white text-sm md:text-3xl font-medium">
            Fill the form and <br />
            <span className="text-primary">Put your request </span>
          </h1>
          <p className="text-white text-[8px] sm:text-[12px] md:text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been
          </p>
        </div>
      </div>

      <div className="container px-20 pb-20 pt-10 lg:pt-0">
        <div className="relative w-auto lg:w-max bg-gray-900 text-gray-200 py-10 mx-auto px-5 md:px-20 -mt-0 lg:-mt-20 z-20">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-wrap justify-between gap-y-5  gap-x-2">
              <div className="w-full md:w-[49%]">
                <label htmlFor="name" className="ms-5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="h-[46px] border border-[#DCDCDC] mt-2  ps-4 w-full outline-primary"
                  placeholder="Name"
                  onChange={handleChanging}
                />
              </div>
              <div className="w-full md:w-[49%]">
                <label htmlFor="phone" className="ms-5">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="h-[46px] border border-[#DCDCDC] mt-2  ps-4 w-full outline-primary"
                  placeholder="123-4566"
                  onChange={handleChanging}
                />
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-y-5 mt-5 ">
              <div className="flex-[0_0_100%] md:flex-[0_0_33.33%]">
                <label htmlFor="name" className="ms-5">
                  Email
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="h-[46px] border border-[#DCDCDC] mt-2  ps-4 w-full outline-primary"
                  placeholder="xyz@gmail.com"
                  onChange={handleChanging}
                />
              </div>
              <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] md:pl-2.5">
                <label htmlFor="country" className="ms-5">
                  Country
                </label>
                <select
                  name="country"
                  id="country"
                  className="h-[46px] border border-[#DCDCDC] mt-2  ps-4 w-full outline-primary"
                  onChange={handleChanging}
                >
                  <option value="" hidden>
                    Country
                  </option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Canada">Canada</option>
                  <option value="England">England</option>
                </select>
              </div>

              <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] md:pl-2.5">
                <label htmlFor="City" className="ms-5">
                  City
                </label>
                <select
                  name="city"
                  id="City"
                  defaultValue="City"
                  className="h-[46px] border border-[#DCDCDC] mt-2  ps-4 w-full outline-primary"
                  onChange={handleChanging}
                >
                  <option value="" hidden>
                    City
                  </option>
                  <option value="Lahore">Lahore</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Multan">Multan</option>
                  <option value="Faisalabad">Faisalabad</option>
                </select>
              </div>
            </div>

            <div className="relative mt-5">
              <label htmlFor="City" className="ms-5">
                Category
              </label>
              <div
                className="w-full h-[48px] bg-white mt-1 flex justify-between px-5 items-center"
                onClick={changeHeight}
              >
                <p className="text-gray-200 cursor-default">{category}</p>
                <div>
                  <Image src={arrowDown} alt="" />
                </div>
              </div>
              <div
                className={`absolute z-10  ${
                  categoriesHeight ? `h-[260px] w-[205px]` : `h-[0px] w-[0px]`
                } px-2 bg-cream right-10 top-14 overflow-y-auto transition-all duration-300`}
              >
                {categories.map((item: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center  mt-5  border-b-2 border-gray-100 pb-2 group cursor-pointer"
                      onClick={() => settingCategory(item.title)}
                    >
                      <p className="font-medium text-gray-900 text-[14px] cursor-pointer group-hover:font-semibold transition-all duration-300">
                        {item.title}
                      </p>
                      <Image src={item.img} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-y-5 mt-5">
              <div className="flex-[0_0_100%] md:flex-[0_0_33.33%] md:pr-2.5">
                <label htmlFor="size" className="ms-5">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="size"
                  className="h-[46px] border border-[#DCDCDC] mt-1  ps-4 w-full outline-primary"
                  placeholder="Size"
                  onChange={handleChanging}
                />
              </div>

              <div className="relative flex-[0_0_100%] md:flex-[0_0_33.33%] md:pr-2.5">
                <label htmlFor="color" className="ms-5">
                  Select Color
                </label>
                <div
                  className="w-full h-[48px] bg-white mt-1 flex justify-between px-5 items-center"
                  onClick={changeColorHeight}
                >
                  <p className="text-gray-200 cursor-default">{color}</p>
                  <div>
                    <Image src={arrowDown} alt="" />
                  </div>
                </div>
                <div
                  className={`absolute  ${
                    colorsHeight ? `h-[260px] w-[205px]` : `h-[0px] w-[0px]`
                  } px-4 bg-white z-10 right-10 top-16 overflow-y-auto transition-all duration-300`}
                >
                  {colors.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center  mt-5  border-b-2 border-gray-100 pb-2 group cursor-pointer"
                        onClick={() => settingColor(item.title)}
                      >
                        <p className="font-medium text-gray-900 text-[14px] cursor-pointer group-hover:font-semibold transition-all duration-300">
                          {item.title}
                        </p>
                        <div
                          className="w-[72px] h-[40px]"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative flex-[0_0_100%] md:flex-[0_0_33.33%] ">
                <label htmlFor="size" className="ms-5">
                  Select Stuff
                </label>
                <div
                  className="w-full h-[48px] bg-white mt-1 flex justify-between px-5 items-center"
                  onClick={changeStuffHeight}
                >
                  <p className="text-gray-200 cursor-default">{stuff}</p>
                  <div>
                    <Image src={arrowDown} alt="" />
                  </div>
                </div>
                <div
                  className={`absolute  ${
                    stuffsHeight ? `h-[260px] w-[205px]` : `h-[0px] w-[0px]`
                  } px-4 bg-white z-10 right-10 top-16 overflow-y-auto transition-all duration-300`}
                >
                  {stuffs.map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-between items-center  mt-5  border-b-2 border-gray-100 pb-2 group cursor-pointer"
                        onClick={() => settingStuff(item.title)}
                      >
                        <p className="font-medium text-gray-900 text-[14px] cursor-pointer group-hover:font-semibold transition-all duration-300">
                          {item.title}
                        </p>
                        <Image src={item.img} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative mt-5">
              <label htmlFor="City" className="ms-0 md:ms-5">
                Please indicate the preferred material type for the product
              </label>
              <div
                className="w-full h-[48px] bg-white mt-3 flex justify-between px-5 items-center "
                onClick={changeMaterialHeight}
              >
                <p className="text-gray-200 cursor-default">{material}</p>
                <div>
                  <Image src={arrowDown} alt="" />
                </div>
              </div>
              <div
                className={`absolute z-10  ${
                  materialsHeight ? `h-[180px] w-[205px]` : `h-[0px] w-[0px]`
                } px-2 bg-white z-10 right-10 top-14 overflow-y-auto transition-all duration-300`}
              >
                {materials.map((item: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center  mt-5  border-b-2 border-gray-100 pb-2 group cursor-pointer"
                      onClick={() => settingMaterial(item.title)}
                    >
                      <p className="font-medium text-gray-900 text-[14px] cursor-pointer group-hover:font-semibold transition-all duration-300">
                        {item.title}
                      </p>
                      <Image src={item.img} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="note" className="ms-5">
                Tell us More
              </label>

              <textarea
                name="note"
                id="note"
                className="w-full h-[149px] ps-5 pt-5 outline-primary"
                placeholder="Note about your orders"
                onChange={handleChanging}
              ></textarea>
            </div>

            <div className="mt-5">
              <p className="text-[16px] font-medium">
                Please provide a visual representation or image of the product
                you are seeking.
              </p>
              <div className="mt-5">
                <label
                  htmlFor="fileInput"
                  className="w-[123px] h-[40px] border-2 border-gray-100 text-gray-100 px-[25px] py-3 rounded-sm"
                >
                  Choose File
                </label>
                <input
                  type="file"
                  name="fileInput"
                  id="fileInput"
                  className="mt-5 bg-transparent text-white hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <p className="text-[12px] mt-10">
              By clicking submit, i agree to the{" "}
              <span className="text-primary">Privacy Policy</span> and
              <span className="text-primary">Terms & Condition</span>
            </p>

            <button className="text-white bg-primary py-[8px] px-[18px] w-[178px] h-[40px] mt-10">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="container py-10">
        <div className="flex flex-col items-center gap-2">
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
    </>
  );
};

export default customizeFurnitureForm;
