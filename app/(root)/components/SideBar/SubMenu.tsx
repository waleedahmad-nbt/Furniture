"use client"
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

const SubMenu = ({ title, options, isOpen, setIsOpen }: any) => {

  const subMenu: any = useRef(null);

  useEffect(() => {
    if (subMenu.current) {
      subMenu.current.style.maxHeight = isOpen === title ? `${subMenu.current.scrollHeight}px` : "0";
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="flex items-center justify-between cursor-pointer w-full p-3"
        onClick={() => {
          if(isOpen === title) {
            setIsOpen("")
          } else {
            setIsOpen(title)
          }
        }}
      >
        <span className="capitalize">{title}</span>
        <FaAngleDown className={`text-gray-200 mt-1 duration-300 ${isOpen === title ? "rotate-180" : ""}`} />
      </button>
      <ul className="mx-5 duration-300 h-full overflow-hidden" ref={subMenu}>
        {options?.map((item: any, index: any) => (
          <li key={index} className="p-3">
            <Link href="#" className="capitalize hover:text-primary duration-150">{item}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default SubMenu
