"use client"
import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

const Services = ({ data, setData }: any) => {

  const fields = {
    title: "",
    subTitle: "",
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

    if (!formData.subTitle) {
      errors.subTitle = "Sub-Title is required";
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
      data.append("subTitle", formData.subTitle);
      data.append("image", formData.image);

      if(editId === "") {

        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/services/set`, data);
    
          if(res.status === 201) {
            setData((prev: any) => { return { ...prev, services: [ ...prev.services, res.data.data ] } });
            setFormData(fields);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        try {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/services/edit/${editId}`, data);
    
          if(res.status === 201) {
            setData((prev: any) => ({
              ...prev,
              services: prev.services.map((item: any) => (item?._id === editId ? res.data.data : item )),
            }));
            setEditId("");
            setFormData(fields);
            setLoading(false);
          }
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }
    } 
  }

  const handleImage = (event: any) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const result = e.target?.result as string;
        setImagePrev(result);
      };

      reader.readAsDataURL(file);

      setFormData((prev: any) => { return { ...prev, image: file } })
    }
  };

  const setUpdateData = (item: any) => {
    setFormData({
      title: item?.title || "",
      subTitle: item?.subTitle || "",
      image: item?.image || "",
    })
    setEditId(item?._id);
    setImagePrev(item?.image);
  }

  const deleteService = async (id: string) => {
    setDeleteing(id);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/services/delete/${id}`);

      if(res.status === 200) {
        // Remove service with the specified id from data state
        setData((prev: any) => ({
          ...prev,
          services: prev.services.filter((service: any) => service._id !== id),
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
          <h2 className="font-medium text-gray-900">Services</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex gap-4 items-center justify-center w-full mt-3 col-span-1">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
                ${
                  formData?.image
                    ? ""
                    : "border-2 border-gray-300 border-dashed"
                }`}
              >
                {formData?.image ? (
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
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  name="image"
                  onChange={handleImage}
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
            </div>
          </div>
          <div className="flex justify-end mt-5 gap-3">
            {editId === "" ? (
              <button type="submit" className="bg-gray-900/80 w-full px-5 py-2 rounded-md text-white relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                </div>
                <span className={loading ? "opacity-0" : ""}>Add New Service</span>
              </button>
            ) : (
              <>
                <div onClick={() => {
                  setFormData(fields);
                  setEditId("");
                  setImagePrev("");
                }} className="border px-5 py-2 rounded-md text-gray-900 cursor-pointer">
                  Reset
                </div>
                <button className="bg-gray-900/80 px-5 py-2 rounded-md text-white relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {loading && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                  </div>
                  <span className={loading ? "opacity-0" : ""}>Update Service</span>
                </button>
              </>
            )}
          </div>
        </form>
      </div>

      <div className="flex items-center flex-wrap gap-5 mt-6">
        {data?.map((item: any, index: number) => (
          <div key={index} className="bg-silver py-7 text-center border-[0.6px] border-gray-200 w-[100%] sm:w-[290px] flex flex-col justify-center relative">
            <Image src={item?.image} width={100} height={100} alt="icon" className="mx-auto w-[100px] h-[55px] mb-2" />
            <h3 className="text-gray-300 font-bold">{item?.title}</h3>
            <p className="text-gray-300">{item?.subTitle}</p>
            <div className="absolute top-3 right-3 text-lg text-gray-900">
              <span onClick={() => setUpdateData(item)} className="cursor-pointer">
                <FiEdit3 />
              </span>
              <div onClick={() => deleteService(item?._id)} className="text-gray-900 mt-2 relative cursor-pointer">
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

export default Services
