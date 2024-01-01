"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  PaginationContainer,
  RecentViewed,
  useRequestMethods,
} from "../components";

import { FaAngleDown, FaList, FaSlidersH } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import MultiRangeSlider from "multi-range-slider-react";

import angle from "@/app/assets/icons/angle-right.svg";
import check from "@/app/assets/icons/check.svg";

import { RootState } from "@/lib/store";
// import { publicRequest } from "@/requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { RiFilterOffFill } from "react-icons/ri";
import { setCategory, setCategoryId } from "@/lib/store/slices/Allslices";

const Products = () => {
  const dispatch = useDispatch();
  const { publicRequest } = useRequestMethods();

  const searchValue: any = useSelector((state: RootState) => state.searchVal);

  const category: any = useSelector((state: RootState) => state.category);
  const categoryId: any = useSelector((state: RootState) => state.categoryId);
  // console.log(category, "category");
  // console.log(categoryId, "categoryId");

  const [options, setoptions] = useState([]);
  const [products, setProducts] = useState<any>([]);
  console.log(products, "products");

  const [tab, setTab] = useState<string>("");
  const [pageData, setPageData] = useState<any>({
    start: 0,
    end: 0,
  });
  
  const status = ["In Stock", "On Sale"];

  const [filters, setFilters] = useState({
    color: "",
    CAta: "",
    status: "",
  });

  const [filterColors, setFilterColors] = useState<any>([]);

  useEffect(() => {
    const getColors = async () => {
      try {

        const res = await publicRequest.get(`/product/colors`);

        if (res.status === 200) {
          setFilterColors(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getColors();
  }, [])
  

  useEffect(() => {
    const getProducts = async () => {
      try {
        const params = new URLSearchParams();

        if (searchValue) {
          params.append("keyword", searchValue);
        }
        if (category) {
          params.append("cat", category);
        }

        const res = await publicRequest.get(
          `/product${params.toString() ? `?${params.toString()}` : ""}`
        );

        if (res.status === 200) {
          // setFilterColors(res.data.data.uniqueColors);
          setProducts(res.data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const searchCategories = async () => {
      try {
        const res = await publicRequest.get(`/category/${categoryId}`);
        if (res.status === 200) {
          setoptions(res.data.data.subCategories);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (category) {
      searchCategories();
    }

    getProducts();
  }, [searchValue, category]);

  useEffect(() => {
    return () => {
      dispatch(setCategory(""));
      dispatch(setCategoryId(""));
    };
  }, []);

  const [minPrice, setMinPrice] = useState<number>(100);
  const [maxPrice, setMaxPrice] = useState<number>(9999);

  const handleInput2 = (e: any) => {
    setMinPrice(e.minValue);
    setMaxPrice(e.maxValue);

    filterPrice(e.minValue, e.maxValue);
  };

  const filterPrice = async (min: number, max: number) => {
    try {
      const res = await publicRequest.get(
        `/product?cat=${category}&subcat=${tab}&min=${min}&max=${max}`
      );
      if (res.status === 200) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductBySubCat = async (subCat: any) => {
    try {
      const res = await publicRequest.get(
        `/product?cat=${category}&subcat=${subCat}`
      );
      if (res.status === 200) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProductByColor = async (color: any) => {
    try {
      const res = await publicRequest.get(
        `/product?cat=${category}&subcat=${tab}&color=${color}`
      );
      if (res.status === 200) {
        setProducts(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-[url('/products_Banner.png')] bg-no-repeat bg-center bg-cover">
        <div className="bg-[#00000099] relative">
          <div className="container mx-auto">
            <div className="text-white font-medium text-[18px] text-center py-20 w-3/4 mx-auto">
              <p className="uppercase">contact us for Guidline</p>
              <h1 className="text-3xl md:text-5xl my-5">Bed</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididuet dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container">
          <div className="border-b-[2px] pb-4 border-[#858585]">
            <div className="flex items-center gap-2 mt-4">
              <p className="text-gray-200">Home</p>
              <Image src={angle} alt="icon" />
              <p className="text-gray-300 font-medium">Shop</p>
            </div>
            <p className="text-gray-300 font-medium mt-2">Product Categories</p>
            <div className="flex flex-wrap gap-2 my-3">
              {options?.map((item: any, index: number) => (
                <button
                  onClick={() => {
                    if (tab === item?.name) {
                      fetchProductBySubCat("");
                      setTab("");
                    } else {
                      fetchProductBySubCat(item?.name);
                      setTab(item?.name);
                    }
                  }}
                  className="bg-white flex items-center gap-2 px-3 py-2 shrink-0"
                  key={index}
                >
                  <div
                    className={`w-[17px] h-[15px] p-[2px] flex items-center justify-center text-white ${
                      tab === item?.name ? "bg-primary" : "bg-[#F1F3F5]"
                    }`}
                  >
                    {tab === item?.name && <Image src={check} alt="icon" />}
                  </div>
                  {item?.name}
                </button>
              ))}
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center justify-between  gap-2">
              <p className="font-medium text-[18px] text-gray-300">
                Showing {pageData?.start}-{pageData?.end} of {products?.length}{" "}
                result
              </p>
              <div className="flex flex-col items-start md:flex-row gap-3 md:items-center shrink-0 text-gray-300 ">
                <div className="flex gap-2">
                  <button className="bg-white flex items-center gap-2 px-6 py-2 shrink-0">
                    <FaSlidersH />
                    Filter
                  </button>
                  <button className="bg-white flex items-center gap-2 px-6 py-2 shrink-0 font-medium">
                    Default sorting
                    <FaAngleDown />
                  </button>
                </div>
                <div className="flex">
                  <button className="bg-primary text-white flex items-center justify-center w-[40px] h-[40px] shrink-0">
                    <CgMenuGridO size={22} />
                  </button>
                  <button className="bg-white flex items-center justify-center w-[40px] h-[40px] shrink-0">
                    <FaList />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row -mx-[15px] mt-10 ">
            <div className="flex-[0_0_33%] px-[10px]">
              <div className="bg-[#FAFAFA] px-5 py-7">
                <p className="text-gray-900 font-bold">Filter by Color</p>
                <div className="mt-4 space-y-1">
                  <button
                      className="flex items-center justify-between w-full"
                      onClick={() => {
                        setFilters((prev: any) => {
                          return { ...prev, color: "" };
                        });
                        fetchProductByColor("");
                      }}
                    >
                    <div className={`flex items-center gap-3`}>
                      <div className={`border rounded-full p-[2px] ${filters.color === "" ? "border-primary" : ""}`}>
                        <span
                          className={`block rounded-full`}
                        >
                        <RiFilterOffFill />
                        </span>
                      </div>
                      <p className="text-gray-200">None</p>
                    </div>
                  </button>
                  {filterColors.length > 0 && filterColors?.map((item: any, index: any) => (
                    <button
                      className="flex items-center justify-between w-full"
                      key={index}
                      onClick={() => {
                        setFilters((prev: any) => {
                          return { ...prev, color: item };
                        });
                        fetchProductByColor(item);
                      }}
                    >
                      <div className={`flex items-center gap-3`}>
                        <div className={`border rounded-full ${filters.color === item ? "border-primary p-[2px]" : ""}`}>
                          <span
                            className={`block rounded-full border ${filters.color === item ? "w-[14px] h-[14px]" : "w-[18px] h-[18px]"}`}
                            style={{ backgroundColor: item }}
                          ></span>
                        </div>
                        <p className="text-gray-200">{item}</p>
                      </div>
                      <p className="text-gray-200">( 1 )</p>
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Filter by Price</p>
                <div className="w-full mt-4 mb-1">
                  <MultiRangeSlider
                    min={100}
                    max={9999}
                    step={5}
                    minValue={minPrice}
                    maxValue={maxPrice}
                    style={{
                      border: "none",
                      boxShadow: "none",
                      padding: "15px 10px",
                    }}
                    onChange={handleInput2}
                    label={false}
                    ruler={false}
                    thumbLeftColor="#FFFFFF"
                    thumbRightColor="#FFFFFF"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between text-gray-200">
                  <span>Min. Price: ${minPrice}</span>
                  <span>Max. Price: ${maxPrice}</span>
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Filter by Category</p>
                <div className="flex flex-row md:flex-col flex-wrap mt-4 gap-4">
                  {options?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="flex justify-start md:justify-between cursor-pointer"
                      // onClick={() =>
                      //   setFilters((prev: any) => {
                      //     return { ...prev, CAta: item };
                      //   })
                      // }

                      onClick={() => {
                        if (filters.CAta === item?.name) {
                          fetchProductBySubCat("");
                          setFilters((prev: any) => {
                            return { ...prev, CAta: "" };
                          });
                        } else {
                          fetchProductBySubCat(item?.name);
                          setFilters((prev: any) => {
                            return { ...prev, CAta: item?.name };
                          });
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[17px] h-[15px] p-[2px] border flex items-center justify-center text-white">
                          <div
                            className={`w-[9px] h-[8px] ${
                              filters.CAta === item?.name
                                ? "bg-[#272727]"
                                : "bg-white"
                            }`}
                          ></div>
                        </div>
                        <p className="text-gray-900">{item?.name}</p>
                      </div>
                      <span className="text-gray-200">{item?.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#FAFAFA] px-5 py-7 mt-7">
                <p className="text-gray-900 font-bold">Product Status</p>
                <div className="flex flex-wrap mt-4 gap-4">
                  {status?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="flex items-center justify-between w-full cursor-pointer"
                      onClick={() =>
                        setFilters((prev: any) => {
                          return { ...prev, status: item };
                        })
                      }
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-[17px] h-[15px] p-[2px] border flex items-center justify-center text-white">
                          <div
                            className={`w-[9px] h-[8px] ${
                              filters.status === item
                                ? "bg-[#272727]"
                                : "bg-white"
                            }`}
                          ></div>
                        </div>
                        <p className="text-gray-900">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-[0_0_66.66%] px-[10px] mt-5 md:mt-0">
              <PaginationContainer
                items={products}
                setStats={(start: any, end: any) =>
                  setPageData({ start: start, end: end })
                }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-10">
        <RecentViewed />
      </div>
    </>
  );
};

export default Products;
