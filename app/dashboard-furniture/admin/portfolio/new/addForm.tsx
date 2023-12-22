"use client"
import { useState } from "react";
import { publicRequest } from "@/requestMethods";
import Image from "next/image";

const AddForm = ({ categories }: any) => {
  
  const fields = {
    image: null,
    category: "",
    description: "",
  }

  const [submit, setSubmit] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<any>({});
  const [formData, setFormData] = useState<any>(fields);

  const validateForm = () => {
    let errors: any = {};

    if (!formData.category) {
      errors.category = "Category is required";
    }

    if (!formData.image) {
      errors.image = "Image is required";
    }

    if (!formData.description) {
      errors.description = "Description is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    
    if(validateForm()) {
      setSubmit(true);

      const data = new FormData();  
      data.append("image", formData.image);
      data.append("category", formData.category);
      data.append("description", formData.description);

      try {
        const res = await publicRequest.post(`/portfolio/add`, data);
  
        console.log(res);
        if(res.status === 201) {
          alert("Protfolio Created.");
          setSubmit(false);
          setFormData(fields);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } })
  }

  const handleImage = (event: any) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
      };
  
      reader.readAsDataURL(file);
  
      setFormData((prev: any) => { 
        return { ...prev, image: file };
      });
    }
  };

  return (
    <div className="bg-white rounded-lg border p-3 mb-3">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center overflow-hidden justify-center w-full h-[200px] rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
          ${formData?.image ? "" : "border-2 border-gray-300 border-dashed"}`}
        >
          {formData?.image ? (
            <Image src={URL.createObjectURL(formData?.image)} width={100} height={100} className="w-full h-full object-cover rounded-lg" alt="product"/>
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
                <span className="font-semibold">Click to upload</span>
                {formErrors.image && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.image}
                  </p>
                )}
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            name="image"
            onChange={handleImage}
          />
        </label>
        <p className="text-xs mb-1 mt-3">Categories</p>
        <select
          id="category"
          name="category"
          className="w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black bg-white"
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          {categories.length > 0 && categories?.map((item: any, index: number) => (
            <option key={index} value={item?.category}>{item?.category}</option>
          ))}
        </select>
        {formErrors.category && (
          <p className="text-red-500 text-xs mt-1">
            {formErrors.category}
          </p>
        )}

        <p className="text-xs mb-1 mt-2">Description</p>
        <div className="h-[150px] mb-12">
          <textarea
            name="description"
            id="description"
            className="h-full w-full border outline-none rounded-md px-3 py-2 text-sm"
            value={formData?.description}
            onChange={handleChange}
          ></textarea>
        </div>
        {formErrors.description && (
          <p className="text-red-500 text-xs mt-1">
            {formErrors.description}
          </p>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-2 w-full bg-gray-900/70 hover:bg-gray-900/100 text-white py-2 rounded-lg relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {submit && <div className="Loader w-[15px] border-[2px] border-primary"></div>}
            </div>
            <span className={submit ? "opacity-0" : ""}>Add Portfolio Image</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddForm
