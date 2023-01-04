import { useEffect, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import NavLink from "../NavLink";
import styles from "./NavToggleDashboard.module.css";
import stylesGeneric from "../navbarStylesGenerics.module.css";

import { BsPlusSquare } from "react-icons/bs";
type props = {
  toggleNav: boolean;
};
export const NavToggleDashboard = ({ toggleNav }: props) => {
  const [toggleDashboard, setToggleDashboard] = useState(false);
  useEffect(() => {
    if (!toggleNav) {
      setToggleDashboard(false);
    }
  }, [toggleNav]);
  const haddleToggleDashboard = () => {
    setToggleDashboard(!toggleDashboard);
  };
  return (
    <li className={styles.li}>
      <button className={styles.button} onClick={haddleToggleDashboard}>
        <MdDashboardCustomize className={stylesGeneric.icon} />
        <span className={stylesGeneric.text}>Configuraciones</span>
        <BsArrowDown className={stylesGeneric.icon} />
      </button>

      <ul
        className={`${
          toggleDashboard
            ? styles.toggle_dashboard
            : styles.toggle_dashboard_desactive
        }`}
      >
        <NavLink text="Crear Producto" href="/dashboard/createProduct">
          <BsPlusSquare className={stylesGeneric.icon} />
        </NavLink>
      </ul>
    </li>
  );
};
