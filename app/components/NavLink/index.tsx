"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className, end, active = "text-primary" }: 
  { href: string; children: React.ReactNode; className?: string; end ?: boolean; active?: string }
) => {

  const pathname = usePathname();

  const isActive = (pathname.includes(href) && href.length > 1 && !end) || pathname === href;

  const combinedClassName = `${className || ''}${isActive ? ` ${active} active` : ''}`;

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  )
}

export default NavLink