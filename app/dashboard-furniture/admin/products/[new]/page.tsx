"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";
import Select from 'react-select';
import CSS_COLOR_NAMES from '@/Utils/colors';

// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import axios from "axios";

const NewProduct = () => {
  const fields = {
    title: "",
    description: "",
    quantity: 0,
    weight: "",
    images: [],
    category: "",
    subCategory: "",
    status: "Active",
    materials: "",
    brand: "",
    warranty: "",
    weightUnit: "Kg",
  };

  const [colors, setColors] = useState<string[]>([]);
  const [submit, setSubmit] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>(fields);
  const [categories, setCategories] = useState<any>([]);
  // hh;
  useEffect(() => {
    const getCatgories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/category`
        );

        if (res.status === 200) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getCatgories();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleDescriptionChange = (value: any) => {
    setFormData((prev: any) => {
      return { ...prev, description: value };
    });
  };
  const [formErrors, setFormErrors] = useState<any>({});

  const validateForm = () => {
    let errors: any = {};

    console.log(formData);

    if (!formData.title) {
      errors.title = "Category is required";
    }
    if (!formData.description) {
      errors.description = "Description is required";
    }
    if (!formData.category) {
      errors.category = "Category is required";
    }
    if (!formData.subCategory) {
      errors.subCategory = "Sub-Category is required";
    }
    if (!formData.price) {
      errors.price = "Price is required";
    }
    if (!formData.status) {
      errors.status = "Status is required";
    }
    if (!formData.warranty) {
      errors.warranty = "Warranty is required";
    }
    if (!formData.qty) {
      errors.qty = "Quantity is required";
    }
    if (!formData.weight) {
      errors.weight = "Weight is required";
    }
    if (formData.materials.length <= 0) {
      errors.material = "Material is required";
    }
    if (!formData.brand) {
      errors.brand = "Brand is required";
    }
    for (let i = 0; i < 4; i++) {
      if (!formData.images[i]) {
        errors[`images[${i}]`] = "Image is required";
      }
    }
    if (sizesArray.length <= 0) {
      errors.sizes = "At least one Size is required";
    }
    if (boxArray.length <= 0) {
      errors.boxSizes = "At least one Size is required";
    }
    if (colors.length <= 0) {
      errors.colors = "At least one Size is required";
    }

    console.log("vlid error", errors);
    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setSubmit(true);

      const data: any = new FormData();
      data.append("title", formData?.title);
      data.append("category", formData?.category);
      data.append("description", formData?.description);
      data.append("subCategory", formData?.subCategory);
      data.append("status", formData?.status);
      data.append("price", formData?.price);
      data.append("qty", formData?.qty);

      formData?.images?.forEach((img: any, index: number) => {
        data.append(`pic${index + 1}`, img);
      });

      colors?.forEach((color: any, index: number) => {
        data.append(`colors[${index}]`, color);
      });

      sizesArray.forEach((size: any, index: number) => {
        data.append(`sizes[${index}]`, formatSize(size));
      });

      data.append(`features[gDimensions][height]`, boxArray[0].height);
      data.append(`features[gDimensions][width]`, boxArray[0].width);

      data.append(`features[bDimensions][height]`, boxArray[0].height);
      data.append(`features[bDimensions][width]`, boxArray[0].width);

      formData.materials?.forEach((material: any, index: number) => {
        data.append(`features[materials][${index}]`, formatSize(material));
      });

      data.append("features[brand]", formData?.brand);
      data.append("features[warrenty]", formData?.warranty);
      data.append("weight", formData?.weight + " " + formData?.weightUnit);

      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/product/add`,
          data
        );

        console.log(res);
        if (res.status === 201) {
          alert("Product Created.");
          setSubmit(false);
          setFormData(fields);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (showPopup) {
      const closePopup = (e: any) => {
        console.log(e.target, "target");

        if (!e.target.classList.contains("openDesc")) {
          setShowPopup(false);
        }
      };

      document.body.addEventListener("click", closePopup);
      return () => {
        document.body.removeEventListener("click", closePopup);
      };
    }
  }, [showPopup]);

  const delColor = (idx: any) => {
    setColors(
      colors.filter((e, i) => {
        return i !== idx;
      })
    );
  };

  const [sizes, setSizes] = useState<any>({
    heightFeets: "",
    heightInches: "",
    widthFeets: "",
    widthInches: "",
  });
  const [sizesArray, setSizesArray] = useState<any>([]);
  const [errorSizes, setErrorSizes] = useState<any>({});

  const sizeChange = (e: any) => {
    const { name, value } = e.target;

    setSizes((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const validateSizes = () => {
    let errors: any = {};

    if (!sizes.heightFeets && !sizes.heightInches) {
      errors.height = "Height is required";
    }

    if (!sizes.widthFeets && !sizes.widthInches) {
      errors.width = "Width is required";
    }

    setErrorSizes(errors);

    return Object.keys(errors).length === 0;
  };

  const submitSize = (e: any) => {
    e.preventDefault();
    if (validateSizes()) {
      setSizesArray((prev: any) => [...prev, sizes]);
    }
  };

  const deleteSize = (index: number) => {
    setSizesArray(
      sizesArray.filter((e: any, i: any) => {
        return i !== index;
      })
    );
  };

  const [boxSizes, setBoxSizes] = useState<any>({
    heightFeets: "",
    heightInches: "",
    widthFeets: "",
    widthInches: "",
  });
  const [boxArray, setBoxArray] = useState<any>([]);
  const [errorBoxes, setErrorBoxes] = useState<any>({});

  const sizeBox = (e: any) => {
    const { name, value } = e.target;

    setBoxSizes((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const validateBox = () => {
    let errors: any = {};

    if (!boxSizes.heightFeets && !boxSizes.heightInches) {
      errors.height = "Height is required";
    }

    if (!boxSizes.widthFeets && !boxSizes.widthInches) {
      errors.width = "Width is required";
    }

    setErrorBoxes(errors);

    return Object.keys(errors).length === 0;
  };

  const submitBox = (e: any) => {
    e.preventDefault();
    if (validateBox()) {
      setBoxArray((prev: any) => [
        ...prev,
        { height: getHeight(boxSizes), width: getWidth(boxSizes) },
      ]);
    }
  };

  const deleteBox = (index: number) => {
    setBoxArray(
      boxArray.filter((e: any, i: any) => {
        return i !== index;
      })
    );
  };

  const handleImage = (event: any, index: number) => {
    const file = event.target.files && event.target.files[0];

    console.log(index);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
      };

      reader.readAsDataURL(file);

      setFormData((prev: any) => {
        const updatedImages = [...prev.images];
        updatedImages[index] = file;

        return { ...prev, images: updatedImages };
      });
    }
  };

  const getHeight = (sz: any) => {
    const formated =
      (sz?.heightFeets && sz?.heightFeets + "'") +
      (sz?.heightInches && sz?.heightInches + "''") +
      ((sz?.heightInches || sz?.heightFeets) && " H");

    return formated;
  };

  const getWidth = (sz: any) => {
    const formated =
      (sz?.widthFeets && sz?.widthFeets + "'") +
      (sz?.widthInches && sz?.widthInches + "''") +
      ((sz?.widthInches || sz?.widthFeets) && " W");

    return formated;
  };

  const formatSize = (sz: any) => {
    const formated =
      (sz?.heightFeets && sz?.heightFeets + "' ") +
      (sz?.heightInches && sz?.heightInches + "''") +
      ((sz?.heightInches || sz?.heightFeets) && " H  ") +
      (sz?.widthFeets && sz?.widthFeets + "' ") +
      (sz?.widthInches && sz?.widthInches + "''") +
      ((sz?.widthInches || sz?.widthFeets) && " W");

    return formated;
  };

  const filterSubs = (cats: any) => {
    if (formData?.category) {
      const selectedCategory = formData?.category;
      return (
        cats.find((item: any) => item.category === selectedCategory)
          ?.subCategories || []
      );
    } else {
      return [];
    }
  };

  const handleMaterials = (e: any) => {
    const { value } = e.target;
    setFormData((prev: any) => {
      return { ...prev, materials: [...prev.materials, value] };
    });
  };

  const deleteMaterials = (value: any) => {
    setFormData((prev: any) => {
      return {
        ...prev,
        materials: prev.materials.filter((item: any) => item !== value),
      };
    });
  };

  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.data.color,
    }),
  };

  const colorOptions = CSS_COLOR_NAMES.map((color) => ({
    label: color,
    value: color,
  }));

  const submitColor = (e: any) => {
    if (!colors.includes(e.value)) {
      setColors([...colors, e.value]);
    }
  };

  return (
    <>
      <div className="w-full p-2">
        <div className="xl:w-[950px] w-full m-auto">
          <div className="p-5 flex items-center">
            <Link href={"/dashboard-furniture/admin/products"}>
              <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-300">
                <BsArrowLeft />
              </div>
            </Link>
            <p className="text-xl font-bold text-text-gray-300">Add products</p>
          </div>
        </div>

        <div className="xl:w-[950px]  w-full m-auto">
          <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-3">
            <div className="col-span-2 ">
              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-xs mb-1">Title</p>
                <input
                  type="text"
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                  placeholder="Short sleeve t-shirt"
                  name="title"
                  id="title"
                  onChange={handleChange}
                />

                <p className="text-xs mb-1">Description</p>
                <div className="h-[150px] mb-12">
                  <ReactQuill
                    value={formData?.description}
                    onChange={handleDescriptionChange}
                    className="h-full"
                    modules={modules}
                    formats={formats}
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Media</p>

                <div className="flex gap-4 items-center justify-center w-full">
                  {Array.from({ length: 4 }).map((_, index: number) => (
                    <label
                      htmlFor={`dropzone-file-${index}`}
                      key={index}
                      className={`flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
                      ${
                        formData?.images[index]
                          ? ""
                          : "border-2 border-gray-300 border-dashed"
                      }`}
                    >
                      {formData?.images[index] ? (
                        <div>
                          <Image
                            src={URL.createObjectURL(formData?.images[index])}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded-lg"
                            alt="product"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                          </p>
                        </div>
                      )}
                      <input
                        id={`dropzone-file-${index}`}
                        type="file"
                        className="hidden"
                        name={`image${index}`}
                        onChange={(e) => handleImage(e, index)}
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Pricing</p>
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
                  <div>
                    <p className="text-xs mb-1">Price</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        placeholder="0.00"
                        name="price"
                        id="price"
                        onChange={handleChange}
                      />
                      <div className="absolute text-xs inset-y-0 left-0 flex items-center pl-3 ">
                        AED
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs mb-1">Warranty</p>
                    <div className="w-full">
                      <input
                        type="text"
                        className=" text w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-black"
                        placeholder="2 years"
                        name="warranty"
                        id="warranty"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Inventory</p>
                <div className="border-b mb-2 pb-2">
                  <p className="text-xs mb-1">Quantity</p>
                  <input
                    type="number"
                    className="mb-2 w-[120px] inline-block text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                    placeholder="0.0"
                    name="qty"
                    id="qty"
                    onChange={handleChange}
                  />
                </div>
                <p className="text-sm mb-5">Shipping</p>
                <p className="text-xs mb-1">Weight</p>
                <input
                  type="number"
                  className="mb-2 w-[120px] m-1 inline-block text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                  placeholder="0.0"
                  name="weight"
                  id="weight"
                  onChange={handleChange}
                />
                <select
                  id="weightUnit"
                  className="bg-gray-50 m-1 border inline-block px-2 py-2 text-gray-900 text-sm rounded-lg w-[70px] p-2.5"
                  name="weightUnit"
                  onChange={handleChange}
                >
                  <option value="Kg">Kg</option>
                  <option value="lb">lb</option>
                  <option value="oz">oz</option>
                  <option value="g">g</option>
                </select>
                <div className="mt-3">
                  <p className="text-sm mb-1 mt-2">Box Dimensions</p>
                  <form onSubmit={submitBox}>
                    <p className="text-xs mb-1 mt-2">Height</p>
                    <div className="grid grid-cols-2 gap-x-4 my-2">
                      <div>
                        <input
                          type="number"
                          name="heightFeets"
                          id="heightFeets"
                          onChange={sizeBox}
                          placeholder="Feets"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="heightInches"
                          id="heightInches"
                          onChange={sizeBox}
                          placeholder="Inches"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                    </div>
                    {errorBoxes.height && (
                      <p className="text-red-500 text-xs mt-1">
                        {errorBoxes.height}
                      </p>
                    )}
                    <p className="text-xs mb-1 mt-2">Width</p>
                    <div className="grid grid-cols-2 gap-x-4 my-2">
                      <div>
                        <input
                          type="number"
                          name="widthFeets"
                          id="widthFeets"
                          onChange={sizeBox}
                          placeholder="Feets"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="widthInches"
                          id="widthInches"
                          onChange={sizeBox}
                          placeholder="Inches"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                    </div>
                    {errorBoxes.width && (
                      <p className="text-red-500 text-xs mt-1">
                        {errorBoxes.width}
                      </p>
                    )}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-gray-900 text-xs text-white px-6 py-2 rounded-lg mt-2"
                      >
                        + Add Box Dimensions
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-wrap">
                    {boxArray &&
                      boxArray?.map((e: any, i: any) => {
                        return (
                          <span
                            className="bg-gray-blue/30 relative h-max rounded m-1 text-sm p-1 flex justify-center items-center px-2"
                            key={i}
                          >
                            {e.height + " " + e.width}
                            <HiXMark
                              size={18}
                              onClick={() => deleteBox(i)}
                              className="cursor-pointer absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-blue/30 rounded-full p-1"
                            />
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Variants</p>

                <div>
                  <p className="text-sm mb-1 mt-2">Colors</p>
                  <Select
                    options={colorOptions}
                    styles={customStyles}
                    components={{
                      Option: ({ innerProps, label }) => (
                        <div {...innerProps} className="flex items-center gap-3 pl-3 py-1 cursor-pointer hover:bg-gray-100/30">
                          <span style={{ backgroundColor: label }} className="block w-[25px] h-[15px]"></span>
                          {label}
                        </div>
                      ),
                    }}
                    onChange={submitColor}
                  />
                  <div className="flex flex-wrap mt-3">
                    {colors &&
                      colors?.map((color: any, i: any) => {
                        return (
                          <span
                            className="bg-gray-blue/30 h-max rounded m-1 text-xs py-1.5 flex justify-center items-center px-2"
                            key={i}
                          >
                            <span
                              className="w-[30px] h-[17px] mr-2"
                              style={{ background: `${color}` }}
                            ></span>
                            <span className="mr-3">{color}</span>
                            <HiXMark
                              onClick={() => delColor(i)}
                              className="cursor-pointer"
                            />
                          </span>
                        );
                      })}
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm mb-1 mt-2">Sizes</p>
                  <form onSubmit={submitSize}>
                    <p className="text-xs mb-1 mt-2">Height</p>
                    <div className="grid grid-cols-2 gap-x-4 my-2">
                      <div>
                        <input
                          type="number"
                          name="heightFeets"
                          id="heightFeets"
                          onChange={sizeChange}
                          placeholder="Feets"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="heightInches"
                          id="heightInches"
                          onChange={sizeChange}
                          placeholder="Inches"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                    </div>
                    {errorSizes.height && (
                      <p className="text-red-500 text-xs mt-1">
                        {errorSizes.height}
                      </p>
                    )}
                    <p className="text-xs mb-1 mt-2">Width</p>
                    <div className="grid grid-cols-2 gap-x-4 my-2">
                      <div>
                        <input
                          type="number"
                          name="widthFeets"
                          id="widthFeets"
                          onChange={sizeChange}
                          placeholder="Feets"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="widthInches"
                          id="widthInches"
                          onChange={sizeChange}
                          placeholder="Inches"
                          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                        />
                      </div>
                    </div>
                    {errorSizes.width && (
                      <p className="text-red-500 text-xs mt-1">
                        {errorSizes.width}
                      </p>
                    )}
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-gray-900 text-xs text-white px-6 py-2 rounded-lg mt-2"
                      >
                        + Add Size
                      </button>
                    </div>
                  </form>
                  <div className="flex flex-wrap">
                    {sizesArray &&
                      sizesArray?.map((e: any, i: any) => {
                        return (
                          <span
                            className="bg-gray-blue/30 relative h-max rounded m-1 text-sm p-1 flex justify-center items-center px-2"
                            key={i}
                          >
                            {formatSize(e)}
                            <HiXMark
                              size={18}
                              onClick={() => deleteSize(i)}
                              className="cursor-pointer absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-blue/30 rounded-full p-1"
                            />
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <div className=" bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-2">Status</p>
                <select
                  id="status"
                  className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  name="status"
                  onChange={handleChange}
                  value={formData.status}
                >
                  <option value="Active">Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              <div className=" bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm">Product organization</p>
                <div>
                  <p className="text-xs mt-3">Product category</p>
                  <select
                    id="category"
                    className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                    name="category"
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    {categories?.map((item: any, index: number) => (
                      <option key={index} value={item?.category}>
                        {item?.category}
                      </option>
                    ))}
                  </select>

                  {formData?.category && (
                    <>
                      <p className="text-xs mt-3">Sub-Category</p>
                      <select
                        id="subCategory"
                        className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                        name="subCategory"
                        onChange={handleChange}
                      >
                        <option>Select A sub-category</option>
                        {filterSubs(categories)?.map(
                          (item: any, index: number) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </>
                  )}
                </div>
                <div>
                  <p className="text-xs mt-3">Material</p>
                  <select
                    id="material"
                    className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                    defaultValue="Material"
                    name="material"
                    onChange={handleMaterials}
                  >
                    <option>Select A Material</option>
                    <option value="Material 1">Material 1</option>
                    <option value="Material 2">Material 2</option>
                  </select>
                  <div className="flex flex-wrap items-center">
                    {formData.materials &&
                      formData?.materials?.map((e: any, i: any) => {
                        return (
                          <span
                            className="bg-gray-blue/30 relative mt-4 h-max rounded mx-1 text-sm p-1 flex justify-center items-center px-2"
                            key={i}
                          >
                            {e}
                            <HiXMark
                              size={18}
                              onClick={() => deleteMaterials(e)}
                              className="cursor-pointer absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-blue/30 rounded-full p-1"
                            />
                          </span>
                        );
                      })}
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-xs">Brand</p>
                  <select
                    className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-1"
                    defaultValue="Brand"
                    id="brand"
                    name="brand"
                    onChange={handleChange}
                  >
                    <option value="">Select a brand</option>
                    <option value="Brand 2">Brand</option>
                    <option value="Brand 2">Brand 2</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-900/70 hover:bg-gray-900/100 text-white py-2 rounded-lg relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {submit && (
                    <div className="Loader w-[15px] border-[2px] border-primary"></div>
                  )}
                </div>
                <span className={submit ? "opacity-0" : ""}>Add Product</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "link",
];
export default NewProduct;
