"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiCalendarWeek } from "react-icons/bi";
import { HiXMark } from "react-icons/hi2";
import { BsArrowLeft } from "react-icons/bs";

// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { PiWarningCircleBold } from "react-icons/pi";
const NewProduct = () => {
  const [productDescription, setProductDescription] = useState("");

  const handleDescriptionChange = (value: any) => {
    setProductDescription(value);
  };

  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const [track, setTrack] = useState(true);
  const [SKU, setSKU] = useState(true);
  const [shipping, setShipping] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(true);
  };
  console.log(showPopup);
  
  useEffect(() => {
    if (showPopup) {
      const closePopup = (e: any) => {
        console.log(e.target, 'target');
        
        if (!e.target.classList.contains("openDesc")) {
          setShowPopup(false);
        }
      };

      window.addEventListener("click", closePopup);
      return () => {
        window.removeEventListener("click", closePopup);
      };
    }
  }, [showPopup]);



  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  const submitTage = (e: any) => {
    e.preventDefault();
    setTags([...tags, value]);
  };

  const delTag = (idx: any) => {
    setTags(
      tags.filter((e, i) => {
        return i !== idx;
      })
    );
  };

  return (
    <>
      <div className="w-full p-2">
        <div className="xl:w-[950px] w-full m-auto">
          <div className="p-5 flex items-center">
            <Link href={'/dashboard/seller/products'}>
            <div className="p-1 cursor-pointer mr-3 rounded w-max bg-transparent hover:bg-gray-300">
              <BsArrowLeft />
            </div>
            </Link>
            <p className="text-xl text-ubuntu-bold text-HeadingColours">
              Add products
            </p>
          </div>
        </div>

        <div className="xl:w-[950px]  w-full m-auto">
          <div className="p-5 grid md:grid-cols-3 grid-cols-1 gap-3">
            <div className="col-span-2 ">
              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-xs mb-1">Title</p>
                <input
                  type="text"
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                  placeholder="Short sleeve t-shirt"
                />

                <p className="text-xs mb-1">Description</p>
                <div className="h-[150px] mb-12">
                  <ReactQuill
                    value={productDescription}
                    onChange={handleDescriptionChange}
                    className="h-full"
                    modules={modules}
                    formats={formats}
                  />
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Media</p>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
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
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Pricing</p>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-2">
                  <div>
                    <p className="text-xs mb-1">Price</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        placeholder="0.00"
                      />
                      <div className="absolute text-xs inset-y-0 left-0 flex items-center pl-3 ">
                        Rs
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs mb-1">Price</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        placeholder="0.00"
                      />
                      <div className="absolute text-xs inset-y-0 left-0 flex items-center pl-3 ">
                        Rs
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 openSearch">
                        <PiWarningCircleBold className="openSearch" />
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>

                <div className="flex items-center my-2">
                  <input type="checkbox" id="a" />
                  <label htmlFor="a" className="ml-3">
                    Charge tax on this product
                  </label>
                </div>
                <div className="w-full grid md:grid-cols-3 grid-cols-1 mt-5 gap-2">
                  <div>
                    <p className="text-xs mb-1">Cost per item</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        placeholder="0.00"
                      />
                      <div className="absolute text-xs inset-y-0 left-0 flex items-center pl-3 ">
                        Rs
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs mb-1">Profit</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs bg-gray-100 border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        disabled
                        placeholder="--"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs mb-1">Margin</p>
                    <div className=" relative w-full">
                      <input
                        type="number"
                        className=" text w-full text-xs bg-gray-100 border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                        disabled
                        placeholder="--"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Inventory</p>
                <div className="flex items-center my-2">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setTrack(!track);
                    }}
                    id="b"
                  />
                  <label
                    htmlFor="b"
                    onClick={() => {
                      setTrack(!track);
                    }}
                    className="ml-3"
                  >
                    Track quantity
                  </label>
                </div>

                <div className="flex justify-between items-center border-b py-3">
                  <p className="text-sm">Quantity</p>
                  <p className="cursor-pointer text-blue-600 text-xs">
                    Edit Locations
                  </p>
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="text-sm">73-C Cavalary ground Lahore</p>
                  {track ? (
                    <>
                      <input
                        type="number"
                        defaultValue={0}
                        className=" text w-[100px] text-xs border border-gray-300 rounded-lg  py-2 focus:outline-none focus:border-black"
                      />
                    </>
                  ) : (
                    <>
                      <p className="cursor-pointer text-xs">Not tracked</p>
                    </>
                  )}
                </div>

                <div className="flex justify-between items-center py-3">
                  <p className="text-sm">Miltary accounts</p>
                  {track ? (
                    <>
                      <input
                        type="number"
                        defaultValue={0}
                        className=" text w-[100px] text-xs border border-gray-300 rounded-lg  py-2 focus:outline-none focus:border-black"
                      />
                    </>
                  ) : (
                    <>
                      <p className="cursor-pointer text-xs">Not tracked</p>
                    </>
                  )}
                </div>
                {track ? (
                  <>
                    <div className="flex items-center my-2">
                      <input type="checkbox" id="c" />
                      <label htmlFor="c" className="ml-3">
                        Track quantity
                      </label>
                    </div>
                  </>
                ) : (
                  <></>
                )}

                <div className="flex items-center my-2">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setSKU(!SKU);
                    }}
                    id="d"
                  />
                  <label htmlFor="d" className="ml-3">
                    This product has a SKU or barcode
                  </label>
                </div>

                {SKU ? (
                  <>
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 mt-5 gap-2">
                      <div>
                        <p className="text-xs mb-1">
                          SKU (Stock Keeping Unit)
                        </p>
                        <div className=" relative w-full">
                          <input
                            type="text"
                            className=" text w-full text-xs border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:border-black"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-xs mb-1">
                          Barcode (ISBN, UPC, GTIN, etc.)
                        </p>
                        <div className=" relative w-full">
                          <input
                            type="text"
                            className=" text w-full text-xsborder border-gray-300 rounded-lg pl-10 pr-8 py-1 focus:outline-none focus:border-black"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Shipping</p>
                <div className="flex items-center my-2">
                  <input
                    type="checkbox"
                    onClick={() => {
                      setShipping(!shipping);
                    }}
                    id=""
                  />
                  <label
                    htmlFor=""
                    onClick={() => {
                      setShipping(!shipping);
                    }}
                    className="ml-3"
                  >
                    This product requires shipping
                  </label>
                </div>

                {shipping ? (
                  <>
                    <p className="text-xs mb-1">Weight</p>
                    <input
                      type="number"
                      className="mb-2 w-[120px] m-1 inline-block text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                      placeholder="0.0"
                    />
                    <select
                      id="countries"
                      className="bg-gray-50 m-1 border inline-block px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg w-[70px] p-2.5"
                    >
                      <option selected>Kg</option>
                      <option value="lb">lb</option>
                      <option value="oz">oz</option>
                      <option value="g">g</option>
                    </select>
                    <div className=" border-t text-xs p-3">
                      <Link className="underline text-blue-600" href={"#"}>
                        + Add customs information
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className=" border-t text-xs p-5">
                      Customers won’t enter shipping details at checkout.
                      Learn how to set up your store for{" "}
                      <Link className="underline text-blue-600" href={"#"}>
                        digital products or services.
                      </Link>
                    </div>
                  </>
                )}
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-5">Variants</p>

                <div className=" border-t text-xs p-3">
                  <Link className="underline text-blue-600" href={"#"}>
                    + Add options like size or color
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-3 mb-3">
              <div className="flex justify-between items-center border-b py-3">
                  <p className="text-sm">Search engine listing</p>
                  <p className="cursor-pointer text-blue-600 text-xs">
                    Edit
                  </p>
                </div>
                  <p className="text-xs py-2">Add a title and description to see how this product might appear in a search engine listing</p>
              </div>

              <div className="bg-white  rounded-lg border p-3 mb-20">
                  <p className="text-sm">Metafields</p>
                  <div   className=" border-t relative flex justify-between cursor-pointer items-center text-xs mt-2 pt-2">
                    <div onClick={togglePopup} className="openDesc flex w-full justify-between cursor-pointer items-center">
                  <p className="openDesc text-sm" onClick={togglePopup}>short description</p>
                  <div className="openDesc w-[60%] py-5 bg-gray-200 hover:bg-gray-300 rounded" onClick={togglePopup}></div>
                    </div>
                  {
                    showPopup ?
                    <>
                      <div className="bg-white p-5 w-[110%] rounded -translate-x-6 absolute top-0 left-0">
                  <div className="relative flex openDesc justify-between cursor-default items-center text-xs ">
                  <p className="text-sm openDesc">short description</p>
                  <div className="flex openDesc justify-center  cursor-default items-center">
                  <input type="text"  className="w-full mr-2 border openDesc py-2 bg-gray-200 hover:bg-gray-300 rounded-lg" />
                  <p className="text-blue-600 cursor- openDesc">clear</p>
                  </div>
                </div>
                  <p className="text-sm text-P_textColour openDesc">Single line text</p>
                  <p className="text-sm text-blue-600 openDesc">Go to definition</p>
                  </div>
                    </>
                    :
                    <></>
                  }
                </div>
              </div>


            </div>

            <div className="col-span-1">
              <div className=" bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm mb-2">Status</p>
                <select
                  id="countries"
                  className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>Active</option>
                  <option value="Draft">Draft</option>
                </select>
              </div>

              <div className=" bg-white rounded-lg border p-3 mb-3">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm ">Publishing</p>

                  <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    className="inline-flex items-center p-1 text-xs font-medium text-center text-gray-900 bg-white rounded hover:bg-gray-100"
                    type="button"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                </div>

                {/* <div
                  id="dropdownDots"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </div> */}

                <p className="text-sm ">Sales channels</p>

                <div
                  id="toast-default"
                  className="flex items-center w-full max-w-xs p-1 text-gray-500 bg-white rounded-lg"
                  role="alert"
                >
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-2 h-2 border rounded-xl border-black "></div>
                  <div className="ml-3 text-sm font-normal">Online Store</div>
                  <button
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    data-dismiss-target="#toast-default"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <BiCalendarWeek />
                  </button>
                </div>
                <div
                  id="toast-default"
                  className="flex items-center w-full max-w-xs p-1 text-gray-500 bg-white rounded-lg mb-2"
                  role="alert"
                >
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-2 h-2 border rounded-xl border-black "></div>
                  <div className="ml-3 text-sm font-normal">
                    Facebook & Instagram
                  </div>
                </div>
                <p className="text-sm ">Sales channels</p>

                <div
                  id="toast-default"
                  className="flex items-center w-full max-w-xs p-1 text-gray-500 bg-white rounded-lg"
                  role="alert"
                >
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-2 h-2 border rounded-xl border-black "></div>
                  <div className="ml-3 text-sm font-normal">
                    International and Pakistan
                  </div>
                </div>
              </div>

              <div className=" bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm ">Product organization</p>
                <p className="text-xs mb-1 mt-2">Product category</p>
                <input
                  type="text"
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                  placeholder="Search"
                />
                <p className="text-xs mb-1 mt-2">Vendor</p>
                <input
                  type="text"
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                />
                <p className="text-xs mb-1 mt-2">Collections</p>
                <input
                  type="text"
                  className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                />
                <div className="w-[90%] m-auto">
                  <div className="flex justify-between items-center">
                    <p className="text-xs mb-1 mt-2">Tags</p>
                    <p className="cursor-pointer text-blue-600 text-xs">
                      Manage
                    </p>
                  </div>
                  <form action="" onSubmit={submitTage}>
                    <input
                      type="text"
                      onChange={changeValue}
                      className="mb-2 w-full text-xs border p-2 px-3 outline-none rounded-lg focus:border-black"
                    />
                  </form>
                  <div className="flex flex-wrap">
                    {tags &&
                      tags.map((e: any, i: any) => {
                        return (
                          <>
                            <span className="bg-gray-200 h-max rounded m-1 text-xs p-1 flex justify-center items-center px-2">
                              {e} &nbsp;
                              <HiXMark
                                onClick={() => delTag(i)}
                                className="cursor-pointer"
                              />
                            </span>
                          </>
                        );
                      })}
                  </div>
                </div>
              </div>

              <div className=" bg-white rounded-lg border p-3 mb-3">
                <p className="text-sm font-bold mb-2">Online Store</p>
                <p className="text-sm mb-2">Theme template</p>
                <select
                  id="countries"
                  className="bg-gray-50 border px-2 py-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                >
                  <option selected>Default product</option>
                  <option value="compare">compare</option>
                  <option value="grid-card-item">grid-card-item</option>
                  <option value="quickview">quickview</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "align",
  "link",
];
export default NewProduct;
