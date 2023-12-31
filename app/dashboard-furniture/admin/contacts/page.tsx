"use client";
import React, { useEffect, useState } from "react";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { FiEye, FiTrash } from "react-icons/fi";
import { ViewQuote } from "../../components";
import ViewContact from "../../components/viewContact";
import { TbArrowsSort } from "react-icons/tb";
import { IoIosAdd } from "react-icons/io";
import axios from "axios";

const Contacts = () => {

  const [val, setVal] = useState<number>(0);
  const [updating, setUpdating] = useState<string>("");
  const [viewContact, setViewContact] = useState<any>({});
  const [category, setCategory] = useState<string>('all');
  const [data, setData] = useState<any>([]);

  useEffect(() => {

    const getContacts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`);
  
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getContacts();
  }, [])

  const deleteConatct = async (_id: string) => {
    setUpdating(_id);
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/delete/${_id}`);

      if(res.status === 200) {
        setData((prev: any) => prev.filter((item: any) => item?._id !== _id)); 
        setUpdating("");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
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
      ['firstName', "lastName", "email", "companyName", "phone"].some((col) =>
        row[col]?.toString().toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
    );
  };

  const sortByColumn = (data: any[]) => {
    return data.slice().sort((a, b) => {
      const valueA = a['firstName']?.toString().toLowerCase();
      const valueB = b['firstName']?.toString().toLowerCase();

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

  return (
    <div className="px-5">
      <div className="py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-600">Contacts</h1>
      </div>

      <div className="bg-white rounded-lg">
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
                  <input type="checkbox" className="rounded" onChange={() => handleSelectAllChange()} />
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Customer
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-1.5 text-left text-xs font-bold text-gray-700 capitalize"
                >
                  Company Name
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {data && filter(data)?.map((contact: any, i: number) => {
                const { _id, firstName, lastName, email, companyName, phone, description} = contact;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4">
                      <input type="checkbox" className="rounded" checked={checkboxes[_id] ?? false} onChange={() => handleCheckboxChange(_id)} id={_id} />
                    </td>
                    <td className="px-6 text-xs font-medium text-gray-900 capitalize">
                      {firstName + " " + lastName}
                    </td>
                    <td className="max-w-[300px] px-6 py-4 text-xs font-medium text-gray-900">
                      {phone}
                    </td>
                    <td className="max-w-[300px] px-6 py-4 text-xs font-medium text-gray-900">
                      {email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {companyName}
                    </td>
                    <td className="px-6 py-4 text-left text-xs text-gray-500 max-w-[100px]">
                      <div className="text_auto_wrap">
                        {description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 text-base items-center">
                        <button
                          onClick={() => {
                            setViewContact(contact);
                          }} 
                          className="text-gray-300 hover:text-gray-900 duration-150"
                        ><FiEye /></button>
                        <button
                          onClick={() => deleteConatct(_id)}
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
        {Object.keys(viewContact)?.length > 0 && <ViewContact contact={viewContact} handleClose={() => setViewContact({})}/>}
      </div>
    </div>
  );
};

export default Contacts;