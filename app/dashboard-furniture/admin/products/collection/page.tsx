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
import { TbArrowsSort } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";

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

  const [val, setVal] = useState(0);
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
        return valueA?.localeCompare(valueB);
      } else {
        return valueB?.localeCompare(valueA);
      }
    });
  };

  return (
    <div className="px-5">
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-600">Categories</h1>
        <div className="flex justify-center gap-2 items-center">
          <button onClick={() => setAddCategory(true)} className="py-1.5 px-3 text-xs font-bold rounded-lg bg_admin hover:bg-gray-900 text-white">
            Create category
          </button>
        </div>
      </div>

      <div className="bg-white text-gray-600 rounded-xl border">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${val === 0 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(4, 'all')} className={`rounded-lg text-base font-bold py-1.5 px-2 ${val === 4 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              <IoIosAdd />
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
                  className={`duration-150 pr-3 pl-1 mx-2 text-xs rounded-md outline-none`}
                />
              </div>
              <label htmlFor="filter" onClick={() => setShowSearch(!showSearch)}>
                <div className="rounded-lg text-lg px-1 py-1 flex items-center">
                  <BiSearch />
                  <BsFilter />
                </div>
              </label>
            </div>
            <button onClick={toggleSortOrder} className="rounded-lg text-lg p-1 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <TbArrowsSort />
            </button>
          </div>
        </div>
        <div>
          <table className="min-w-full text-xs divide-y divide-gray-200">
            <thead className="bg-[#F7F7F7] sticky top-[53px] border-t border-b">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left"
                >
                  <input
                    type="checkbox"
                    className="rounded"
                    onChange={handleSelectAllChange}
                  />
                </th>
                <th className="py-1.5 text-left text-xs font-bold text-gray-700 capitalize">Image</th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Products
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Sub-Categories
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
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
                    <div className="w-[50px] h-[50px] flex items-center justify-center">
                      <Image
                        className="max-w-full max-h-full rounded-lg"
                        src={category?.image}
                        width={100}
                        height={100}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="max-w-[300px] px-6 py-4 text-xs font-medium text-gray-900">
                    {editCatId === category?._id ? (
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData?.category}
                        onChange={handleChange}
                        className="py-1 px-3 outline-none border rounded-md w-full"
                      />
                    ) : (
                      <>
                        {category?.category}
                      </>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end w text-xs text-gray-500">
                    <div className="p-1 px-2 rounded-lg w-max text-end">
                      {category?.products || 0}
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
                        className="py-1 px-3 outline-none border rounded-md w-full"
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
      
      <p className="text-center py-3 mt-4 font-medium text-gray-600">Learn more about <Link href="#" className="text-blue-600 underline">category</Link></p>
    </div>
  );
};

export default Collection;