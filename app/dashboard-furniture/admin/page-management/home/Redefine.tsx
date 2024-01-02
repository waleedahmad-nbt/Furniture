"use client"
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import arrowL from "@/app/assets/icons/arrow-left.svg";

const Redefine = ({ data, setData }: any) => {

  const fields = {
    title: "",
    description: "",
    btnText: "",
    image: "",
  };
  
  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>(fields);
  const [imagePrev, setImagePrev] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [deleteing, setDeleteing] = useState<string>("");
  const [editId, setEditId] = useState<string>("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } })
  }

  const validateForm = () => {
    let errors: any = {};

    if (!formData.title) {
      errors.title = "Title is required";
    }

    if (!formData.description) {
      errors.description = "Description is required";
    }

    if (!formData.btnText) {
      errors.btnText = "Botton Text is required";
    }

    if (!formData.image) {
      errors.image = "Image is required";
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
      data.append("btnText", formData.btnText);
      data.append("description", formData.description);
      data.append("image", formData.image);
      
      if(editId === "") {

        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/redefine/set`, data);
    
          if(res.status === 201) {
            setData((prev: any) => { return { ...prev, reDefines: [ ...prev.reDefines, res.data.data ] } });
            setFormData(fields);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        try {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/redefine/edit/${editId}`, data);
    
          if(res.status === 201) {
            setData((prev: any) => ({
              ...prev,
              reDefines: prev.reDefines.map((item: any) => (item?._id === editId ? res.data.data : item )),
            }));
            setEditId("");
            setFormData(fields);
            setLoading(false);
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    } 
  }

  const handleImageRedefine = async (event: any) => {
    const file = event.target.files && event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        const result = e.target?.result as string;
        setImagePrev(result);
      };
  
      reader.readAsDataURL(file);
  
      // Assuming `setFormData` is asynchronous, wait for it to complete
      setFormData((prev: any) => {
        return { ...prev, image: file };
      });
    }
  };
  

  const setUpdateData = (item: any) => {
    setFormData({
      title: item?.title || "",
      description: item?.description || "",
      btnText: item?.btnText || "",
      image: item?.image || "",
    })
    setEditId(item?._id);
    setImagePrev(item?.image);
  }

  const deleteService = async (id: string) => {
    setDeleteing(id);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/redefine/delete/${id}`);

      if(res.status === 200) {
        // Remove service with the specified id from data state
        setData((prev: any) => ({
          ...prev,
          reDefines: prev.reDefines.filter((service: any) => service._id !== id),
        }));

        setFormData(fields);
        setEditId("");
        setImagePrev("");
        setDeleteing("");
      }
    } catch (error) {
      console.log(error);
      setDeleteing("");
    }
  }

  return (
    <div className="bg-white rounded-lg border p-3 mb-3">
      <div className="border-b pb-6">
        <form onSubmit={handleSubmit}>
          <h2 className="font-medium text-gray-900">Re-Defines</h2>
          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            <div className="flex gap-4 items-center justify-center w-full mt-3 col-span-1">
              <label
                htmlFor="dropzone-file-redef"
                className={`flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
                ${
                  formData?.image
                    ? ""
                    : "border-2 border-gray-300 border-dashed"
                }`}
              >
                {formData?.image && imagePrev !== "" ? (
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={imagePrev}
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
                    {formErrors.image && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.image}
                      </p>
                    )}
                  </div>
                )}
                <input
                  id="dropzone-file-redef"
                  type="file"
                  className="hidden"
                  name="image"
                  onChange={handleImageRedefine}
                />
              </label>
            </div>
            <div className="col-span-2">
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
            <div className="col-span-full">
              <label className="block text-xs mb-1 mt-2" htmlFor="couponCode">Description</label>
              <textarea
                name="description"
                id="description"
                className="text w-full text-xs border rounded-lg px-2 py-2 outline-none focus:border-black"
                value={formData?.description}
                onChange={handleChange}
              />
              {formErrors.description && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-5 gap-3">
            {editId === "" ? (
              <button type="submit" className="bg-gray-900/80 w-full px-5 py-2 rounded-md text-white relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                </div>
                <span className={loading ? "opacity-0" : ""}>Add New Re-Define</span>
              </button>
            ) : (
              <>
                <div onClick={() => {
                  setFormData(fields);
                  setEditId("");
                  setImagePrev("");
                }} className="outline-[1px] outline-gray-100 outline px-5 py-2 rounded-md text-gray-900 cursor-pointer">
                  Reset
                </div>
                <button className="bg-gray-900/80 px-5 py-2 rounded-md text-white relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                  </div>
                  <span className={loading ? "opacity-0" : ""}>Update Re-Define</span>
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
        {data?.map((item: any, index: number) => (
          <div key={index} className="relative bg-cover bg-no-repeat" style={{ backgroundImage: `url(${item?.image})` }}>
            <div className="p-7">
              <h2 className="text-white font-bold text-[27px]">
                {item?.title}
              </h2>
              <p className="text-white mb-5 mt-2">
                {item?.description}
              </p>
              <div
                className="flex items-center gap-3 bg-primary px-4 py-2 w-max text-white mb-30"
              >
                <span>{item?.btnText}</span>
                <Image src={arrowL} alt="icon" />
              </div>
            </div>
            <div className="absolute top-3 right-3 text-lg text-gray-900">
              <span onClick={() => setUpdateData(item)} className="cursor-pointer text-white bg-primary p-2 rounded-full block">
                <FiEdit3 />
              </span>
              <div onClick={() => deleteService(item?._id)} className="text-white bg-primary p-2 rounded-full mt-2 relative cursor-pointer">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {deleteing === item?._id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                </div>
                <span className={deleteing === item?._id ? "opacity-0" : ""}><FiTrash /></span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Redefine;