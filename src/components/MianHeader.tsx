import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import logoImg from "@/assets/logo.png";
import style from "@/style/mian-header.module.css";

const MianHeader: FC = () => {
  return (
    <header className={style.header}>
      <Link href={"/"} className={style.logo}>
        {/* <img src={logoImg.src} alt="A plate with food on it" /> */}
        <Image src={logoImg} alt="A plate with food on it" priority />
        Next Level Food
      </Link>
      <nav className={style.nav}>
        <ul>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
          <li>
            <NavLink href="/community"> Food Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MianHeader;
