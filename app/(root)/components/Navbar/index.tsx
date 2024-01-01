"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "@/app/assets/icons/menu.svg";
import bloomSofa from "@/app/assets/images/bloomSofa.png";
import redSofa from "@/app/assets/images/redSofa.png";
import greenSofa from "@/app/assets/images/greenSofa.png";
import pinkSofa from "@/app/assets/images/pinkSofa.png";
import dustSofa from "@/app/assets/images/dustSofa.png";
import tumericSofa from "@/app/assets/images/tumericSofa.png";
import starIcon from "@/app/assets/icons/star.svg";

import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

import profile from "@/app/assets/icons/profile-circle.svg";
import { BsCart2 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import search from "@/app/assets/icons/search.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  setCategory,
  setCategoryId,
  setSearchVal,
} from "@/lib/store/slices/Allslices";
import {
  NavLink,
  SideBar,
  SignInModal,
  SignUpModal,
  Logout,
  useRequestMethods,
} from "../index";
import { useRouter } from "next/navigation";
// import { publicRequest } from "@/requestMethods";

const Navbar = () => {
  const Router = useRouter();
  const { publicRequest } = useRequestMethods();

  const dispatch = useDispatch();
  const [logout, setLogout] = useState<boolean>(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [cats, setCats] = useState([]);
  const [megaMenu, setMegaMenu] = useState([]);
  const [filterCats, setFilterCats] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(cats, "cats");

  const [filterValue, setFilterValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const allCats = [{ category: "Home" }, ...cats];
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cartItems: any = useSelector((state: RootState) => state.cart);
  const wishList: any = useSelector((state: RootState) => state.wishList);
  const userData = useSelector((state: any) => state.user);
  let token = localStorage.getItem("token");

  const showSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleSignUpCancel = () => {
    setIsSignUpOpen(false);
  };

  async function fetchCats() {
    try {
      const res = await publicRequest.get("/category");
      if (res) {
        setCats(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const gettingSubMenu = async () => {
    const res = await publicRequest.get(`/product`);
    console.log(res, "res");
    if (res.data.success) {
      setMegaMenu(res.data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    gettingSubMenu();
    fetchCats();
  }, []);

  const homeMenu: any = [
    {
      img: bloomSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: redSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: greenSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: pinkSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: dustSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: tumericSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
  ];

  const bedMenu: any = [
    {
      img: bloomSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: redSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: dustSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
    {
      img: tumericSofa,
      title: "Rocket Stool",
      discount: "15%",
      price: "$27.90",
      discountedPrice: "$18.80",
      Reviews: "3",
    },
  ];

  const handleSearch = (e: any) => {
    e.preventDefault();

    dispatch(setSearchVal(searchValue));
    Router.push("/products");
  };

  const filterMenu = (category: any) => {
    const filterCat = megaMenu.filter((item: any, index: any) => {
      return item.category == category;
    });
    // console.log(filterCat  , "filterCat");
    setFilterCats(filterCat);
  };

  return (
    <div className="relative bg-gray-900 text-white">
      <header className="border-b hidden md:block">
        <div className="container">
          <ul className="flex gap-8 py-2 text-[12px]">
            <li>
              <NavLink href="/myorders">Track Order</NavLink>
            </li>
            <li>
              <NavLink href="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink href="/contactus">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/faqs">FAQ</NavLink>
            </li>
            <li>
              <NavLink href="/customizeFurnitureForm">Get a Quote</NavLink>
            </li>
          </ul>
        </div>
      </header>
      <div className="container">
        <nav>
          <div className="flex gap-3 justify-between md:justify-start items-center py-5">
            <button
              onClick={() => setMenuOpen(true)}
              className="p-[10px] bg-gray-400 text-white shrink-0 flex items-center gap-2 md:hidden"
            >
              <Image src={Menu} alt="menu icon" />
            </button>
            <Link href="/" className="shrink-0 cursor-pointer">
              <h1 className="text-primary text-xl font-black text-center">
                Guideline
              </h1>
              <p className="text-sm text-white">group of companies</p>
            </Link>
            <div className="grow shrink hidden md:flex items-center px-5 lg:px-16 gap-3">
              <button
                onClick={() => setMenuOpen(true)}
                className="py-[5px] px-[10px] lg:p-[10px] bg-gray-400 text-white shrink-0 flex items-center gap-2"
              >
                <Image src={Menu} alt="menu icon" />
                Menu
              </button>
              <div className="grow shrink">
                <form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="grow h-[34px] lg:h-[44px] px-3 w-full outline-none text-gray-900"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-primary shrink-0 h-[34px] lg:h-[44px] px-2.5"
                  >
                    <Image src={search} alt="search" />
                  </button>
                </form>
              </div>
              <Link
                href="/customizeFurniture"
                className="py-[5px] px-[10px] lg:p-[10px] bg-gray-400 text-white shrink-0"
              >
                Customize furniture
              </Link>
            </div>
            <div className="flex items-center gap-4 lg:gap-6">
              {token ? (
                <div className="relative cursor-pointer group py-5">
                  <div className="hidden md:block w-[25px] lg:w-[30px]">
                    <Image
                      src={userData?.profileImage}
                      alt="user"
                      className="w-full h-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="w-[150px] hidden -z-10 md:flex flex-col gap-2 py-3 min-h-[100px] absolute bg-white right-[70%] text-gray-300 rounded-md group-hover:z-50 -bottom-[30%] translate-y-[100%] opacity-0 group-hover:bottom-[0%] group-hover:opacity-100 duration-300 shadow-2xl">
                    <Link href="/myaccount">
                      <div className="flex items-center justify-between px-3 gap-2 text-xl hover:bg-primary py-2 hover:text-white duration-300 w-full cursor-pointer">
                        <p className="text-[16px]">Profile</p>
                        <CgProfile />
                      </div>
                    </Link>
                    <div className="flex items-center justify-between px-3 gap-2 text-xl hover:bg-primary py-2 hover:text-white duration-300 w-full cursor-pointer">
                      <p className="text-[16px]">Settings</p>
                      <IoSettingsOutline />
                    </div>
                    <div
                      className="flex items-center justify-between px-3 gap-2 text-xl hover:bg-primary py-2 hover:text-white duration-300 w-full cursor-pointer"
                      onClick={() => setLogout(true)}
                    >
                      <p className="text-[16px]">Logout</p>
                      <IoMdLogOut />
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  className="shrink-0 hidden md:block"
                  onClick={showModal}
                >
                  <Image
                    src={profile}
                    alt="user"
                    className="w-[25px] lg:w-[35px]"
                  />
                </button>
              )}
              <NavLink
                href="/cart"
                className="shrink-0 relative text-[26px] text-2xl md:text-xl lg:text-3xl"
              >
                <BsCart2 />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {cartItems.length}
                  </span>
                )}
              </NavLink>
              <NavLink
                href="/wishlist"
                className="shrink-0 relative text-[24px] hidden md:block text-xl lg:text-3xl"
              >
                <BsHeart />
                {wishList.length > 0 && (
                  <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full w-[20px] h-[20px] text-white bg-primary text-xs">
                    {wishList.length}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </nav>
        <ul className="hidden md:flex flex-wrap items-center justify-start gap-5  text-[16px]">
          {allCats?.map((item: any, index: number) => (
            <li
              onClick={() => {
                setFilterValue(item.category);
                dispatch(setCategory(item.category));
                dispatch(setCategoryId(item._id));
              }}
              onMouseEnter={() => filterMenu(item.category)}
              key={index}
              className={`hover:text-primary transition-all group pb-3 font-normal text-[12px] lg:text-[16px] ${
                filterValue === item.category ? "text-primary" : "text-white"
              }`}
            >
              <Link href={item.category == "Home" ? "/" : "/products"}>
                {item?.category}
              </Link>
              {item.category == "Home" ? (
                ""
              ) : (
                <div className="absolute w-full max-h-[0vh] overflow-hidden bottom-0 translate-y-[100%] left-0 bg-white z-50 group-hover:max-h-[100vh] group-hover:overflow-auto transition-all duration-500 hover:block">
                  {loading ? (
                    <div className="flex justify-center py-5">
                      <div className="loader"></div>
                    </div>
                  ) : (
                    <div className="container py-5">
                      <div className="flex items-center gap-5">
                        <h1 className="text-[14px] text-gray-300 font-bold">
                          The best discount this week{" "}
                        </h1>
                        <span className="text-gray-200 text-[10px] font-normal">
                          Every week you can find the best discount here
                        </span>
                      </div>
                      <div className="flex items-center justify-around flex-wrap mt-5">
                        {filterCats &&
                          filterCats.map((e: any, i: any) => {
                            return (
                              <div
                                key={i}
                                className={`${
                                  i == 0 ? "border-0" : "border-l"
                                } p-5 flex flex-col gap-3`}
                              >
                                <Image
                                  src={e.Images[0]}
                                  alt=""
                                  width={100}
                                  height={100}
                                />
                                <p className="w-[40px] h-[22px] bg-secondary rounded-full text-[12px] text-white text-center leading-[21px]">
                                  15%
                                </p>
                                <div className="flex gap-2">
                                  <s className="text-gray-300 text-[14px]">
                                    AED 27.90
                                  </s>
                                  <p className="text-white bg-[#3CB242] text-[14px] px-1">
                                    AED {e.price}
                                  </p>
                                </div>
                                <h1 className="text-gray-300">{e.title}</h1>
                                {!e.totalReviews ? (
                                  <p className="text-gray-200 text-[12px]">
                                    No Reviews
                                  </p>
                                ) : (
                                  <div className="flex gap-3">
                                    <div className="flex bg-[#FFF6DC] gap-1 px-2 rounded-md">
                                      <Image src={starIcon} alt="" />
                                      <p className="text-gray-200 text-[12px]">
                                        {e.totalReviews}{" "}
                                      </p>
                                    </div>
                                    <p className="text-gray-200 text-[12px]">
                                      {e.Reviews} Reviews
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <SignInModal
        isModalOpen={isModalOpen}
        showModal={showModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        showSignUp={showSignUp}
        isSignUpOpen={isSignUpOpen}
      />
      <SignUpModal
        isSignUpOpen={isSignUpOpen}
        showSignUp={showSignUp}
        handleOk={handleOk}
        handleSignUpCancel={handleSignUpCancel}
        showModal={showModal}
      />
      <SideBar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        showModal={showModal}
        categories={cats}
      />
      <Logout setLogout={setLogout} logout={logout} />
    </div>
  );
};

export default Navbar;
