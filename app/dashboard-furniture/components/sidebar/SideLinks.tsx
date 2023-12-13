"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaArrowTurnUp } from "react-icons/fa6";

const SideLinks = (
  { href, children, className, end, active = "text-primary", subLinks }:
  { href: string; children: React.ReactNode; className?: string; end ?: boolean; active?: string; subLinks?: any }
) => {

  const pathname = usePathname();

  const isActive = (pathname.includes(href) && href.length > 1 && end) || pathname === href;

  const subActive = subLinks?.some((item: any) => {
    return (
      (pathname.includes(item?.link) && item?.link.length > 1 && !end) ||
      pathname === item?.link
    );
  });

  const combinedClassName = `${className || ''}${isActive && !end ? ` ${active} active` : ''}`;

  return (
    <>
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
      {subLinks?.length > 0 && (
        <div className={`${isActive || subActive ? "block" : "hidden"}`}>
          <ul>
            {subLinks?.map((item: any, index: number) => {

              const active = (pathname.includes(item?.link) && item?.link.length > 1) || pathname === item?.link;

              return (
                <li className="text-xs" key={index}>
                  <Link 
                    href={item?.link} 
                    className={`block py-2 px-8 rounded-md font-bold relative group
                    ${active ? "text-gray-900 bg-white active" : "text-[#616161] hover:bg-[#ffffff77] hover:text-gray-900"}`}
                  >
                    {item?.label}
                    <span className="absolute hidden group-[.active]:block group-hover:block left-[10px] rotate-90 top-1/2 -translate-y-1/2 text-gray-100 text-[14px]">
                      <FaArrowTurnUp />
                    </span>
                  </Link>
                </li>
            )})}
          </ul>
        </div>
      )}
    </>
  )
}

export default SideLinks