"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "@/app/assets/images/Seller/Product.jpeg";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { publicRequest } from "@/requestMethods";
import { FiEdit3, FiTrash, FiX } from "react-icons/fi";
import { AddCategory } from "@/app/dashboard-furniture/components";

const Collection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 2,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 3,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 4,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 5,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
    {
      id: 6,
      image: image,
      name: "New Year Sale",
      Products: 276,
      ProductCondition: "Product tag is equal to Kitchen Gadgets Inventory stock is greater than 0",
    },
  ]);

  const [val, setVal] = useState(0)
  const [updating, setUpdating] = useState<string>("");
  const [category, setCategory] = useState('all');
  const [addCategory, setAddCategory] = useState<boolean>(false);
  const [editCatId, setEditCatId] = useState<string>("");

  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => { return { ...prev, [name]: value } });
  }

  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get(`/category`);
  
        if(res.status === 200) {
          console.log(res);
          setCategories(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getCategories();
  }, [])

  const updateCategory = async () => {
    setUpdating(editCatId);
    try {
      const res = await publicRequest.put(`/category/edit/${editCatId}`, formData);

      if(res.status === 201) {
        setCategories((prev: any) => {
          return prev.map((item: any) =>
            item._id === editCatId ? res.data.data : item
          );
        });        
        setEditCatId("");
        setFormData({});
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const deleteCat = async (_id: string) => {
    setUpdating(_id);
    try {
      const res = await publicRequest.delete(`/category/delete/${_id}`);

      console.log(res);
      if(res.status === 200) {
        setCategories((prev: any) => prev.filter((item: any) => item?._id !== _id)); 
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const changeValue = ( i: any, type: any ) => {
    setVal(i)
  }

  interface CheckboxState {
    [productId: string]: boolean;
  }

  const [checkboxes, setCheckboxes] = useState<CheckboxState>({});

  const handleCheckboxChange = (productId: string) => {
    setCheckboxes((prevCheckboxes) => {
      const isChecked = prevCheckboxes[productId] ?? false; // Default to false if undefined
      return {
        ...prevCheckboxes,
        [productId]: !isChecked,
      };
    });
  };

  const handleSelectAllChange = () => {
    const updatedCheckboxes: CheckboxState = {};

    products.map((product: any) => {
      const Id = product.id;
      updatedCheckboxes[Id] = !checkboxes[Id] ? !checkboxes[Id] : false;
    });

    setCheckboxes(updatedCheckboxes);
  };

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");

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

    return result.filter((row: any) =>
      ['category'].some((col) =>
        row[col]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  return (
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Categories</h1>
        <div className="flex justify-center gap-2 items-center">
          <button onClick={() => setAddCategory(true)} className="p-1 border-none bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white text-xs px-2 rounded-lg">
            Create category
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-sm p-1 px-2 ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
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
                  className={`duration-150 px-3 mx-2 text-xs rounded-md outline-none`}
                />
              </div>
              <label htmlFor="filter" onClick={() => setShowSearch(!showSearch)}>
                <div className="rounded-lg text-sm px-1 py-1 flex items-center">
                  <BiSearch />
                  <BsFilter />
                </div>
              </label>
            </div>
            <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
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
                  <input
                    type="checkbox"
                    className="rounded"
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Products
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
                  Sub-Categories
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filter(categories)?.map(( category: any, i: number ) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={checkboxes[category?._id] ?? false}
                      onChange={() => handleCheckboxChange(category?._id)}
                      id={category?._id}
                    />
                  </td>
                  <td>
                    <Image
                      className="h-[50px] w-max"
                      src={category?.image}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </td>
                  <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                    {editCatId === category?._id ? (
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData?.category}
                        onChange={handleChange}
                        className="py-1 px-3 outline-none border rounded-md"
                      />
                    ) : (
                      <>
                        {category?.category}
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end w text-xs text-gray-500">
                    <div className="p-1 px-2 rounded-lg w-max text-end">
                      {category?.quantity || 0}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-xs`}
                  >
                    {editCatId === category?._id ? (
                      <textarea
                        id="description"
                        name="description"
                        value={formData?.description}
                        onChange={handleChange}
                        className="py-1 px-3 outline-none border rounded-md"
                      />
                    ) : (
                      <>
                        {category?.description}
                      </>
                    )}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-xs`}>
                    {category?.subCategories?.map((item: any, index: number) => (
                      <React.Fragment key={index}>{index !== 0 && ", "}{item}</React.Fragment>
                    ))}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-xs`}>
                    <div className="flex gap-2 text-base items-center">
                      {editCatId === category?._id ? (
                        <>
                          <button
                            onClick={() => {
                              setEditCatId("");
                              setFormData({});
                            }} 
                            className="duration-150 bg-gray-300 px-3 py-1 text-xs text-white rounded-md"
                          >cancel</button>
                          <button
                            onClick={() => updateCategory()}  
                            className="duration-150 px-3 relative py-1 text-xs text-white rounded-md bg-primary"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {updating === category?._id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                            </div>
                            <span className={updating === category?._id ? "opacity-0" : ""}>update</span>
                          </button>
                        </>
                      )
                      : (
                        <>
                          <button
                            onClick={() => {
                              setEditCatId(category?._id);
                              setFormData(category);
                            }} 
                            className="text-gray-300 hover:text-gray-900 duration-150"
                          ><FiEdit3 /></button>
                          <button
                            onClick={() => deleteCat(category?._id)}
                            className="text-gray-300 hover:text-gray-900 duration-150 relative"
                          >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              {updating === category?._id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                            </div>
                            <span className={updating === category?._id ? "opacity-0" : ""}><FiTrash /></span>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {addCategory && <AddCategory handleClose={() => setAddCategory(false)} />}
      
      <p className="text-center py-3 mt-4 text-sm">Learn more about <Link href="#" className="text-blue-600 underline">category</Link></p>
    </div>
  );
};

export default Collection;
