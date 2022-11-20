import Link from "next/link";
import React from "react";
import { useContextUser } from "../../hooks/useContextUser";
const Navbar = () => {
  const {
    authData: { auth },
    userState,
  } = useContextUser();
  return (
    <header>
      <h2>Mac Centro Tecnologico</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          {auth ? null : (
            <>
              <li>
                <Link href="/logUp">Registrarce</Link>
              </li>
              <li>
                <Link href="logIn">Iniciar</Link>
              </li>
            </>
          )}
          {userState?.tipo === "admin" ? (
            <li>
              <Link href="/dashboard/createProduct">crear</Link>
            </li>
          ) : null}
          <li>
            <Link href="/card">carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
