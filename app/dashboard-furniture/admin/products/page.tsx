"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch} from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiEdit3, FiEye, FiTrash } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { TbArrowsSort } from "react-icons/tb";
import axios from "axios";

const Products = () => {

  const [val, setVal] = useState<number>(0);
  const [category, setCategory] = useState<string>('all');
  const [data, setData] = useState<any>([]);
  const [updating, setUpdating] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<any>('');

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder: any) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  useEffect(() => {

    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/product`);
  
        console.log(res);
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getProducts();
  }, [])  

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
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
      ['title'].some((col) =>
        row[col]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['title']?.toString().toLowerCase();
      const valueB = b['title']?.toString().toLowerCase();

      if (sortOrder === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  };

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

    data.map((product: any) => {
      const Id = product?._id;
      updatedCheckboxes[Id] = !checkboxes[Id] ? !checkboxes[Id] : false;
    });

    setCheckboxes(updatedCheckboxes);
  };

  const deleteProduct = async (_id: string) => {
    setUpdating(_id);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/product/delete/${_id}`);

      if(res.status === 200) {
        setData((prev: any) => prev.filter((item: any) => item?._id !== _id));
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="px-5">
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-600">Products</h1>
        <div className="flex justify-center gap-2 items-center">
          <button className="py-1.5 px-3 text-xs font-bold rounded-lg bg-gray-100/30 text-gray-600">
            Export
          </button>
          <button className="py-1.5 px-3 text-xs font-bold rounded-lg bg-gray-100/30 text-gray-600">
            Import
          </button>
          <Link href={'/dashboard-furniture/admin/products/new'}>
            <button className="py-1.5 px-3 text-xs font-bold rounded-lg bg_admin hover:bg-gray-900 text-white">
              Add Product
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white text-gray-600 rounded-xl border">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${val === 0 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(1, 'Active')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${val === 1 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Active
            </button>
            <button onClick={() => changeValue(2, 'Draft')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${val === 2 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Draft
            </button>
            <button onClick={() => changeValue(3, 'archived')} className={`rounded-lg text-xs font-bold py-1.5 px-3 ${val === 3 ? "bg-[#00000014]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              Archived
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
                <div className="rounded-lg text-lg px-1 py-1 flex items-center cursor-pointer">
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
                  <input type="checkbox" className="rounded" onChange={() => handleSelectAllChange()} />
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Discounted Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Reviews
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
              {data && filter(data)?.map((product: any, i: number) => {
                const { _id, Images, title, status, qty, category, price, discount} = product;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" checked={checkboxes[_id] ?? false} onChange={() => handleCheckboxChange(_id)} id={_id} />
                    </td>
                    <td className="px-6">
                      <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Image
                          className="max-w-full max-h-full rounded-lg"
                          src={Images[0]}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {title}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className={`p-1 px-2 rounded-lg w-max text-ubuntu-regular ${status === "Active" ? "bg-[#CDFEE1] text-[#083D25]" : "bg-[#E0F0FF] text-[#0E57A2]"}`}>
                        {status}
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-xs ${
                        qty <= 5 ? "text-red-700" : "text-gray-500"
                      }`}
                    >
                      {qty} in stock
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      AED {price}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      {discount?.discountedPrice > 0 ? (
                        <>
                          AED {discount?.discountedPrice} 
                          <span className="text-primary ml-1">({(((price - discount?.discountedPrice) / price) * 100).toFixed(2)}%)</span>
                        </>
                      ) : (
                        <>
                          AED {price}
                        </>
                      )}
                    </td>
                    <td className="px-6 py-4 text-left whitespace-nowrap text-xs text-gray-500">
                      <Link href={`/dashboard-furniture/admin/products/reviews/${_id}`} className="bg_admin hover:bg-gray-900 px-2 text-white py-1 rounded-md">Reviews</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 text-base items-center">
                        <Link
                          href={`/dashboard-furniture/admin/products/details/${_id}`}
                          className="text-gray-300 hover:text-gray-900 duration-150 relative"
                        >
                          <FiEye />
                        </Link>
                        <Link
                          href={`/dashboard-furniture/admin/products/details/${_id}`}
                          className="text-gray-300 hover:text-gray-900 duration-150 relative"
                        >
                          <FiEdit3 />
                        </Link>
                        <button
                          onClick={() => deleteProduct(_id)}
                          className="text-gray-300 hover:text-gray-900 duration-150 relative"
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            {updating === _id && <div className="Loader w-[15px] border-[2px] border-gray-900"></div>}
                          </div>
                          <span className={updating === _id ? "opacity-0" : ""}><FiTrash /></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
