import Link from "next/link";
import React from "react";
import styles from "./NavLink.module.css";
import styleGeneric from "../navbarStylesGenerics.module.css"
type props = {
  children: React.ReactNode;
  text: string;
  href:string
};
const NavLink = ({ children, text,href }: props):React.ReactElement => {
  return (
    <li className={styles.navLink}>
      <Link href={href}>
        {children}
        <span className={styleGeneric.text}>{text}</span>
      </Link>
    </li>
  );
};

export default NavLink;
