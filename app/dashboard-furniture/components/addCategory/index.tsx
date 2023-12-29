"use client"
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddCategory = ({ handleClose }: any) => {

  const fields = {
    image: null,
    category: "",
    description: "",
    subCategories: [],
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
      data.append("categoryPic", formData.image);
      data.append("category", formData.category);
      data.append("description", formData.description);
      formData.subCategories.forEach((subCategory: any, index: number) => {
        data.append(`subCategories[${index}]`, subCategory);
      });

      try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/category/add`, data);

        if(res.status === 201) {
          alert("Category Created.");
          setSubmit(false);
          handleClose();
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

    if (file) {handleClose
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

  const [subCat, setSubCat] = useState<any>([]);

  const addSubCats = (e: any) => {
    e.preventDefault();

    if (!formData.subCategories.includes(subCat) && subCat) {
      setFormData((prev: any) => { return { ...prev, subCategories: [ ...prev.subCategories, subCat ] } });
      setSubCat("");
    }

    setFormErrors({...formErrors , subCategory: "SubCtaegory is required"});
  }

  const deleteSubCat = (cat: any) => {
    const filtered = formData.subCategories?.filter((item: any) => item !== cat );
    setFormData((prev: any) => { return { ...prev, subCategories: filtered } });
  }
  
  return (
    <div className="fixed inset-0 z-50 bg-[#00000096]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[700px] bg-white p-16 relative rounded-md">
          <button className="text-xl absolute top-5 right-5" onClick={handleClose}>
            <FiX />
          </button>
          <h1 className="text-[26px] text-gray-900 font-medium mb-5 text-center">
            Add Category
          </h1>
          <div className="grid grid-cols-2 gap-x-5 gap-y-3">
            <div className="flex h-full">
              <label
                htmlFor="image"
                className={`flex flex-col w-full items-center justify-center overflow-hidden rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
                ${formData?.image ? "" : "border-2 border-gray-300 border-dashed"}`}
              >
                {formData?.image ? (
                  <div className="h-full">
                    <Image src={URL.createObjectURL(formData?.image)} width={100} height={100} className="w-full h-full object-cover rounded-lg" alt="product"/>
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
                      <span className="font-semibold">Click to upload</span>
                    </p>
                    {formErrors.image && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.image}
                      </p>
                    )}
                  </div>
                )}
                <input
                  id="image"
                  type="file"
                  className="hidden"
                  name="image"
                  onChange={handleImage}
                />
              </label>
            </div>

            <div className="space-y-3">
              <div>
                <label htmlFor="category" className="block text-sm mb-1">Category</label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="category"
                  name="category"
                  value={formData.category}
                  className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                />
                {formErrors.category && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.category}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="description" className="block text-sm mb-1">Description</label>
                <textarea
                  onChange={handleChange}
                  id="description"
                  name="description"
                  value={formData.description}
                  className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full h-20 resize-none"
                />
                {formErrors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.description}
                  </p>
                )}
              </div>
              <div>
                <form onSubmit={addSubCats}>
                  <label htmlFor="subCat" className="block text-sm mb-1">Sub Categories</label>
                  <div className="flex">
                    <div>
                      <input
                        type="text"
                        onChange={(e: any) => setSubCat(e.target.value)}
                        id="subCat"
                        name="subCat"
                        value={subCat}
                        className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                      />
                      {formErrors.subCat && (
                        <p className="text-red-500 text-xs mt-1">
                          {formErrors.subCat}
                        </p>
                      )}
                    </div>
                    <button type="submit" className="bg-gray-900 text-white px-3 shrink-0 ml-3 rounded-md">+ Add</button>
                  </div>
                </form>
              </div>
              <div className="flex flex-wrap gap-x-5">
                {formData?.subCategories?.length > 0 && formData?.subCategories?.map((item: any, index: number) => (
                  <div onClick={() => deleteSubCat(item)} key={index} className="relative my-3 text-white bg-gray-900 px-3 py-1 rounded-md text-sm cursor-pointer">
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-full p-1"><FiX /></span>
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit} className="w-full py-2 bg-gray-900 text-white rounded-md relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {submit && <div className="Loader w-[15px] border-[2px] border-primary"></div>}
                </div>
                <span className={submit ? "opacity-0" : ""}>Add Category</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddCategory
