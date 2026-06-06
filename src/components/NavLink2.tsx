"use client";
import { FC } from "react";
import Link from "next/link";
import style from "@/style/navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink2: FC = () => {
  const path = usePathname();
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/meals" className={path.startsWith("/meals") ? style.active : undefined}>
            Meals
          </Link>
        </li>
        <li>
          <Link href="/community" className={path.startsWith("/community") ? style.active : undefined}>
            Food Community
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLink2;
