"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const PageManagement = () => {

  const fields = {
    title: "",
    subTitle: "",
    offer: "",
    btnText: "",
    images: "",
  };

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>(fields);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } })
  }

  const handleSubmit = async (e: any) => {
  }

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

  return (
    <div className="px-5">
      <div className="xl:w-[950px] w-full m-auto">
        <div className="py-6 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-600">Home Page</h1>
        </div>

        <form onSubmit={handleSubmit}>
          
          <div className="bg-white rounded-lg border p-3 mb-3">
            <div className="border-b pb-5">
              <h2 className="font-medium text-gray-900">Show Case</h2>
              <div>
                <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Title</label>
                <input
                  name="title"
                  id="title"
                  type="text"
                  className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                  value={formData?.title}
                  onChange={handleChange}
                />
                {formErrors.title && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.title}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Sub-Title</label>
                <input
                  name="subTitle"
                  id="subTitle"
                  type="text"
                  className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                  value={formData?.subTitle}
                  onChange={handleChange}
                />
                {formErrors.subTitle && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.subTitle}
                  </p>
                )}
              </div>
              <div className="grid gap-3 grid-cols-2">
                <div>
                  <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Offer</label>
                  <input
                    name="offer"
                    id="offer"
                    type="text"
                    className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                    value={formData?.offer}
                    onChange={handleChange}
                  />
                  {formErrors.offer && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.offer}
                    </p>
                  )}
                </div><div>
                  <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Button Text</label>
                  <input
                    name="btnText"
                    id="btnText"
                    type="text"
                    className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                    value={formData?.btnText}
                    onChange={handleChange}
                  />
                  {formErrors.btnText && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.btnText}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-4 items-center justify-center w-full mt-3">
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

            <div className="mt-3">
              <h2 className="font-medium text-gray-900 mb-3">Services</h2>
            </div>


            <div className="flex mt-3">
              <button className="bg-gray-900/80 w-full py-2 rounded-md text-white">Update</button>
            </div>
          </div>

        </form>
      </div>      
    </div>
  )
}

export default PageManagement
