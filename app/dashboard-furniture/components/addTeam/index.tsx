"use client"
import { publicRequest } from "@/requestMethods";
import Image from "next/image";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const AddTeam = ({ team, handleClose }: any) => {

  const fields = {
    name: team?.name || "",
    designation: team?.designation || "",
    image: team?.image || "",
    facebook: team?.socials?.facebook || "",
    twitter: team?.socials?.twitter || "",
    linkedin: team?.socials?.linkedin || "",
  }

  const [formData, setFormData] = useState<any>(fields);
  const [formErrors, setFormErrors] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } });
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

  const validateForm = () => {
    let errors: any = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    // if (!formData.image) {
    //   errors.image = "Image is required";
    // }

    if (!formData.designation) {
      errors.designation = "Designation is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const Data = {
      name: formData?.name,
      designation: formData?.designation,
      image: formData?.image,
      socials: {
        facebook: formData?.socials?.facebook,
        twitter: formData?.socials?.twitter,
        linkedin: formData?.socials?.linkedin,
      }
    }

    if(validateForm()) {
      if(team) {

        try {
          const res = await publicRequest.put(`/team/edit/${team?._id}`, { ...Data, image: 'https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0' });
    
          console.log(res);
          if(res.status === 201) {
            handleClose();
          }
        } catch (error) {
          console.error(error);
        }

      } else {

        try {
          const res = await publicRequest.post(`/team/add`, { ...Data, image: 'https://th.bing.com/th/id/R.f4953cce2951742830b35c054950d18a?rik=8jHISgKjLQtyfg&pid=ImgRaw&r=0' });
    
          console.log(res);
          if(res.status === 201) {
            handleClose();
          }
        } catch (error) {
          console.error(error);
        }

      }
    }
  }
  
  return (
    <div className="fixed inset-0 z-50 bg-[#00000096]">
      <div className="flex items-center justify-center h-full">
        <div className="w-[700px] bg-white p-16 relative rounded-md">
          <button className="text-xl absolute top-5 right-5" onClick={handleClose}>
            <FiX />
          </button>
          <h1 className="text-[26px] text-gray-900 font-medium mb-5 text-center">
            {team ? "Edit Team Member" : "Add Team Member"}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-x-5 gap-y-3">
              <div className="flex h-full">
                <label
                  htmlFor="image"
                  className={`flex flex-col w-full items-center justify-center overflow-hidden rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100
                  ${formData?.image ? "" : "border-2 border-gray-300 border-dashed"}`}
                >
                  {formData?.image ? (
                    <div className="h-full">
                      <Image src={formData?.image !== team?.image ? URL.createObjectURL(formData?.image) : team?.image} width={100} height={100} className="w-full h-full object-cover rounded-lg" alt="product"/>
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
                  <label htmlFor="name" className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="name"
                    name="name"
                    value={formData.name}
                    className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="designation" className="block text-sm mb-1">Designation</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                  />
                  {formErrors.designation && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.designation}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="facebook" className="block text-sm mb-1">Facebook Link</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="facebook"
                    name="facebook"
                    value={formData.facebook}
                    className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                  />
                  {formErrors.facebook && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.facebook}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="twitter" className="block text-sm mb-1">Twitter Link</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="twitter"
                    name="twitter"
                    value={formData.twitter}
                    className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                  />
                  {formErrors.twitter && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.twitter}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm mb-1">Linkedin Link</label>
                  <input
                    type="text"
                    onChange={handleChange}
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    className="border px-3 py-1 outline-none focus:border-primary rounded-md w-full"
                  />
                  {formErrors.linkedin && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.linkedin}
                    </p>
                  )}
                </div>
                <button type="submit" className="w-full py-2 bg-gray-900 text-white rounded-md">
                  {team ? "Edit Member" : "Add Member"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddTeam;