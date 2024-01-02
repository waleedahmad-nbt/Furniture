"use client"

import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const ShowCase = ({ data, setData }: any) => {

  const fields = {
    title: data?.title || "",
    subTitle: data?.subTitle || "",
    offer: data?.offer || "",
    btnText: data?.btnText || "",
    images: data?.images || "",
  };

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<any>(data.images);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } })
  }

  const validateForm = () => {
    let errors: any = {};

    if (!formData.title) {
      errors.title = "Title is required";
    }

    if (!formData.subTitle) {
      errors.subTitle = "Sub-Title is required";
    }

    if (!formData.offer) {
      errors.offer = "Offer is required";
    }

    if (!formData.btnText) {
      errors.btnText = "Botton Text is required";
    }


    for (let i = 0; i < 4; i++) {
      if (!formData.images[i]) {
        errors[`images[${i}]`] = "Image is required";
      }
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(validateForm()) {
      setLoading(true);

      const data = new FormData();
      data.append("title", formData.title);
      data.append("subTitle", formData.subTitle);
      formData?.images?.forEach((img: any, index: number) => {
        data.append(`pic${index + 1}`, img);
      });

      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/showcase/set`, data);
  
        console.log(res)
        if(res.status === 201) {
          setData((prev: any) => { return { ...prev, showCase: res.data.data } });
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } 
  }

  const handleImage = (event: any, index: number) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImagePreview((prev: any) => {
          const updatedArray = [...prev];
          updatedArray[index] = result;
          return updatedArray;
        });
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
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-lg border p-3 mb-3">
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
              htmlFor={`dropzone-file-showcase-${index}`}
              key={index}
              className={`flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
              ${
                formData?.images[index]
                  ? ""
                  : "border-2 border-gray-300 border-dashed"
              }`}
            >
              {formData?.images[index] ? (
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={imagePreview[index]}
                    width={300}
                    height={300}
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
                id={`dropzone-file-showcase-${index}`}
                type="file"
                className="hidden"
                name={`image${index}`}
                onChange={(e) => handleImage(e, index)}
              />
            </label>
          ))}
        </div>
        <div className="flex mt-3">
          <button type="submit" className="bg-gray-900/80 w-full px-5 py-2 rounded-md text-white relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
            </div>
            <span className={loading ? "opacity-0" : ""}>Update Show Case</span>
          </button>
        </div>
      </div>
    </form>
  )
}

export default ShowCase
