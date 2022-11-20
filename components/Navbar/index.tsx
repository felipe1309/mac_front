import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <h2>Mac Centro Tecnologico</h2>
        <nav>
            <ul>
                <li>
                    <Link href='/'>Inicio</Link>
                </li>
                <li>
                    <Link href='/logUp'>Registrarce</Link>
                </li>
                <li>
                    <Link href='logIn'>Iniciar</Link>
                </li>
                <li>
                    <Link href='/card'>carrito</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar