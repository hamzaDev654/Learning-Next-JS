"use client";
import Link from "next/link";
import { FC, ReactNode } from "react";
import style from "@/style/navlink.module.css";
import { usePathname } from "next/navigation";
// jerer
interface props {
  href: string;
  children: ReactNode;
}

const NavLink: FC<props> = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href) ? `${style.link} ${style.active}` : style.link
      }
    >
      {children}
    </Link>
  );
};

export default NavLink;
