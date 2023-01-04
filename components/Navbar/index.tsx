"use client";
import { useState, createRef } from "react";
import {
  AiFillRightCircle,
  AiFillHome,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsCartFill, BsGearFill, BsDoorOpenFill } from "react-icons/bs";
import NavLink from "./NavLink";
import styles from "./Navbar.module.css";
import stylesGeneric from "./navbarStylesGenerics.module.css";
import { useContextUser } from "../../hooks/useContextUser";
import Link from "next/link";
import { NavToggleDashboard } from "./NavToggleDashboard";
const Navbar = () => {
  const {
    authData: { auth },
    userState,
  } = useContextUser();
  const [toggloState, setToggloState] = useState(true);
  const searchRef = createRef<HTMLInputElement>();
  const haddleToggle = () => {
    setToggloState(!toggloState);
  };
  const handdleFalseToggle = () => {
    if (!toggloState) {
      setToggloState(true);
    }
    searchRef.current?.focus();
  };
  return (
    <nav className={`${styles.sidebar} ${toggloState ? "" : styles.close}`}>
      <header>
        <div className={styles.image_text}>
          <span className={styles.image}>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Flosmemewoody%2F&psig=AOvVaw1JJopnhHQnKUG7EwFD3pdK&ust=1669054141422000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiJ7autvfsCFQAAAAAdAAAAABAI"
              alt="woody"
            />
          </span>
          <div className={`${stylesGeneric.text} ${styles.header_text}`}>
            <span className={styles.name}>Mac</span>
            <span className={`${styles.profession} ${styles.text}`}>
              Centro Tecnologico
            </span>
          </div>
        </div>
        <AiFillRightCircle className={styles.toggle} onClick={haddleToggle} />
      </header>
      <div className={styles.menu_bar}>
        <div className="menu">
          <div className={styles.search_box}>
            <FaSearch
              className={stylesGeneric.icon}
              onClick={handdleFalseToggle}
              style={{ cursor: "pointer" }}
            />
            <input type="text" placeholder="search..." ref={searchRef} />
          </div>
          <ul className="menu_links">
            <NavLink text="Inicio" href="/">
              <AiFillHome className={stylesGeneric.icon} />
            </NavLink>
            <NavLink text="Carrito" href="/card">
              <BsCartFill className={stylesGeneric.icon} />
            </NavLink>
            {userState?.tipo === "admin" ? (
              <NavToggleDashboard toggleNav={toggloState} />
            ) : null}
          </ul>
        </div>
        <div className="menu">
          <ul className="menu_links">
            {userState?.tipo !== "admin" ? (
              <NavLink text="Ajustes" href="/settings">
                <BsGearFill className={stylesGeneric.icon} />
              </NavLink>
            ) : null}

            {auth ? (
              <li className={stylesGeneric.iten_container}>
                <button>
                  <BsDoorOpenFill className={stylesGeneric.icon} />
                  <span className={stylesGeneric.text}>Cerrar</span>
                </button>
              </li>
            ) : (
              <>
                <NavLink text="Iniciar" href="/logIn">
                  <AiOutlineLogin className={stylesGeneric.icon} />
                </NavLink>
                <NavLink text="Registrarse" href="logUp">
                  <AiOutlineLogout className={stylesGeneric.icon} />
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
