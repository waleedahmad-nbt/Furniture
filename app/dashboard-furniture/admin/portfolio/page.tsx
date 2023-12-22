"use client"
import { useEffect, useState } from "react";
import { publicRequest } from "@/requestMethods";
import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiEdit3, FiEye, FiTrash } from "react-icons/fi";

const PortFolio = () => {

  const [updating, setUpdating] = useState<string>("");
  const [editPortId, setEditPortId] = useState<any>({});
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getPortfolio = async () => {
      try {
        const res = await publicRequest.get(`/portfolio`);
  
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getPortfolio();
  }, [])

  const [formErrors, setFormErrors] = useState<any>({});

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

  const updatePortfolio = async () => {

    if(validateForm()) {
      setUpdating(editPortId);
      const data = new FormData();  
      data.append("image", formData.image);
      data.append("category", formData.category);
      data.append("description", formData.description);
  
      try {
        const res = await publicRequest.put(`/portfolio/edit/${editPortId}`, formData);
  
        if(res.status === 201) {
          setData((prev: any) => {
            return prev.map((item: any) =>
              item._id === editPortId ? res.data.data : item
            );
          });        
          setEditPortId("");
          setFormData({});
          setUpdating("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  const deletePortfolio = async (_id: string) => {
    setUpdating(_id);
    try {
      const res = await publicRequest.delete(`portfolio/delete/${_id}`);

      if(res.status === 200) {
        setData((prev: any) => prev.filter((item: any) => item?._id !== _id));
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } });
  }

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<any>('');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filter = (rows: any) => {
    let result = rows;
    if(category==="all"){
      result = rows;
    }
    else if(category==="Active"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Active'
      })
    }
    else if(category==="Draft"){
      result = rows.filter((e:any, i:any) => {
        return e.status === 'Draft'
      })
    }

    if(sortOrder) {
      result = sortByColumn(result);
    }

    return result.filter((row: any) =>
      ['category'].some((col) =>
        row[col]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['category']?.toString().toLowerCase();
      const valueB = b['category']?.toString().toLowerCase();

      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  };

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolios</h1>
        <Link href={'/dashboard-furniture/admin/portfolio/new'}>
          <button className="p-1 bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white border border-none text-xs px-2 rounded-lg">
            Add Portfolio
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button className={`duration-100 rounded-lg text-sm p-1 px-2 ${true ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button className={`duration-100 rounded-lg text-sm p-1 px-2 ${true ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Active
            </button>
            <button className={`duration-100 rounded-lg text-sm p-1 px-2 ${true ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Draft
            </button>
            <button className={`duration-100 rounded-lg text-sm p-1 px-2 ${true ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Archived
            </button>
            <button className={`duration-100 rounded-lg text-sm p-1 px-2 ${true ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              +
            </button>
          </div>
          <div className="flex">
            <div className="flex h-max items-center shadow-sm border bg-white hover:shadow-none rounded-md">
              <div className={`overflow-hidden duration-200 h-[14px] py-1 ${showSearch ? "w-max" : "w-[0px]"}`}>
                <input
                  type="text"
                  id="filter"
                  value={searchVal}
                  onChange={(e: any) => setSearchVal(e.target.value)}
                  className={`duration-150 pr-3 mx-2 text-xs rounded-md outline-none`}
                />
              </div>
              <label htmlFor="filter" onClick={() => setShowSearch(!showSearch)}>
                <div className="rounded-lg text-sm px-1 py-1 flex items-center">
                  <BiSearch />
                  <BsFilter />
                </div>
              </label>
            </div>
            <button onClick={toggleSortOrder} className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <BiSort />
            </button>
          </div>
        </div>
        <div>
          <table className="min-w-full text-xs divide-y divide-gray-200">
            <thead className="bg-[#F7F7F7] sticky top-[54px]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <input type="checkbox" className="rounded" />
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data && filter(data)?.map((item: any, i: number) => {
                const { _id, image, description, category } = item;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="px-6">
                      <Image
                        className="h-[50px] w-[70px]"
                        src={image}
                        width={100}
                        height={50}
                        alt=""
                      />
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {editPortId === _id ? (
                        <>
                          <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData?.category}
                            onChange={handleChange}
                            className="py-1 px-3 outline-none border rounded-md"
                          />
                          {formErrors.category && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.category}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          {category}
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {editPortId === _id ? (
                        <>
                          <textarea
                            id="description"
                            name="description"
                            value={formData?.description}
                            onChange={handleChange}
                            className="py-1 px-3 outline-none border rounded-md"
                          />
                          {formErrors.description && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.description}
                            </p>
                          )}
                        </>
                      ) : (
                        <>
                          {description}
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 text-base items-center">
                        {editPortId === _id ? (
                          <>
                            <button
                              onClick={() => {
                                setEditPortId("");
                                setFormData({});
                              }} 
                              className="duration-150 bg-gray-300 px-3 py-1 text-xs text-white rounded-md"
                            >cancel</button>
                            <button
                              onClick={() => updatePortfolio()} 
                              className="duration-150 px-3 relative py-1 text-xs text-white rounded-md bg-primary"
                            >
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {updating === _id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                              </div>
                              <span className={updating === _id ? "opacity-0" : ""}>update</span>
                            </button>
                          </>
                        )
                        : (
                          <>
                            <button
                              onClick={() => {
                                setEditPortId(_id);
                                setFormData(item);
                              }}
                              className="text-gray-300 hover:text-gray-900 duration-150"
                            ><FiEdit3 /></button>
                            <button
                              onClick={() => deletePortfolio(_id)}
                              className="text-gray-300 hover:text-gray-900 duration-150 relative"
                            >
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                {updating === _id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                              </div>
                              <span className={updating === _id ? "opacity-0" : ""}><FiTrash /></span>
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PortFolio
