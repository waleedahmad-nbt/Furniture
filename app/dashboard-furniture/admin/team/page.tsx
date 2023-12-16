"use client";
import React, { useEffect, useState } from "react";
import { BiSearch, BiSort } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import Link from "next/link";
import { publicRequest } from "@/requestMethods";
import { FiEdit3, FiEye, FiTrash } from "react-icons/fi";
import { AddTeam } from "../../components";
import Image from "next/image";

const Team = () => {

  const [val, setVal] = useState<number>(0);
  const [editTeam, setEditTeam] = useState<any>({});
  const [category, setCategory] = useState<string>('all');
  const [data, setData] = useState<any>([]);
  const [addTeam, setAddTeam] = useState<boolean>(false);

  useEffect(() => {

    const getQuotes = async () => {
      try {
        const res = await publicRequest.get(`/team`);
  
        console.log(res);
        if(res.status === 200) {
          setData(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getQuotes();
  }, [])

  const deleteQuote = async (_id: string) => {
    try {
      const res = await publicRequest.delete(`/team/delete/${_id}`);

      console.log(res);
      if(res.status === 200) {
        setData((prev: any) => prev.filter((item: any) => item?._id !== _id)); 
      }
    } catch (error) {
      console.error(error);
    }
  }

  const changeValue = (i:any, type:any) => {
    setVal(i)
    setCategory(type)
  }
  
  const filter = (rows: any) => {
    if(category==="all"){
      return rows;
    }
    else if(category==="Active"){
      return rows.filter((e:any, i:any) => {
        return e.status === 'Active'
      })
    }
    else if(category==="Draft"){
      return rows.filter((e:any, i:any) => {
        return e.status === 'Draft'
      })
    }
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
    <div className="p-5">
      <div className="py-3 mb-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Quotes</h1>
        <button
          className="p-1 bg-gray-900/80 hover:bg-gray-900/100 duration-100 text-white border border-none text-xs px-2 rounded-lg" 
          onClick={() => setAddTeam(true)}
        >
          Add Team
        </button>
      </div>

      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-2">
          <div className="flex justify-center items-center gap-2">
            <button onClick={() => changeValue(0, 'all')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===0 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              All
            </button>
            <button onClick={() => changeValue(4, 'all')} className={`duration-100 rounded-lg text-sm p-1 px-2 ${val===4 ? "bg-[#EFEFEF]" : "bg-transparent"} hover:bg-[#f3f3f3]`}>
              +
            </button>
          </div>
          <div className="flex">
            <button className="rounded-lg text-sm p-1 px-2 mx-1 flex items-center shadow-sm border bg-white hover:shadow-none">
              <BiSearch />
              <BsFilter />
            </button>
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
                  <input type="checkbox" className="rounded" onChange={() => handleSelectAllChange()} />
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
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Designation
                </th>
                <th
                  scope="col"
                  className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Socials
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
              {data && data?.map((team: any, i: number) => {
                const { _id, name, designation, image, socials} = team;
                return (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <input type="checkbox" className="rounded" checked={checkboxes[_id] ?? false} onChange={() => handleCheckboxChange(_id)} id={_id} />
                    </td>
                    <td className="px-6">
                      <Image
                        className="h-[50px] w-max"
                        src={image}
                        width={100}
                        height={50}
                        alt=""
                      />
                    </td>
                    <td className="px-6">
                      {name}
                    </td>
                    <td className="max-w-[300px] px-6 py-4  text-xs font-medium text-gray-900">
                      {designation}
                    </td>
                    <td className="max-w-[300px] px-6 py-4 text-xs font-medium text-gray-900">
                      <Link className="hover:text-primary duration-150" href={socials?.facebook || '/'}>Facebook</Link>,&nbsp;
                      <Link className="hover:text-primary duration-150" href={socials?.twitter || '/'}>Twitter</Link>,&nbsp;
                      <Link className="hover:text-primary duration-150" href={socials?.linkedin || '/'}>Linkedin</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      <div className="flex gap-2 text-base items-center">
                        <button onClick={() => setEditTeam(team)} className="text-gray-300 hover:text-gray-900 duration-150"><FiEdit3 /></button>
                        <button
                          onClick={() => {
                            setEditTeam(team);
                          }} 
                          className="text-gray-300 hover:text-gray-900 duration-150"
                        ><FiEye /></button>
                        <button onClick={() => deleteQuote(_id)} className="text-gray-300 hover:text-gray-900 duration-150"><FiTrash /></button>
                      </div>
                    </td>
                  </tr>
                )})}
            </tbody>
          </table>
        </div>
        {addTeam && <AddTeam handleClose={() => setAddTeam(false)}/>}
        {Object.keys(editTeam)?.length > 0 && <AddTeam team={editTeam} handleClose={() => setEditTeam({})}/>}
      </div>
    </div>
  );
};

export default Team;