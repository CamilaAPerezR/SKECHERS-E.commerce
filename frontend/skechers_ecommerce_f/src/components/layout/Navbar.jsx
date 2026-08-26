/*
=========================================================
Componente : Navbar
Módulo     : Layout
Proyecto   : SKECHERS E-Commerce

Descripción:
Barra principal de navegación de la tienda.

Responsabilidades:
- Mostrar la identidad de la marca.
- Navegar entre las categorías.
- Acceder rápidamente a búsqueda,
  favoritos, cuenta y carrito.
=========================================================
*/

import "../../styles/Navbar.css";

import {
    FiSearch,
    FiHeart,
    FiUser,
    FiShoppingBag
} from "react-icons/fi";

import { Link } from "react-router-dom";

function Navbar() {

    return (

        <header className="navbar">

            {/* Logo */}

            <div className="navbar-logo">

                <h2>SKECHERS</h2>

            </div>

            {/* Menú principal */}

            <nav className="navbar-menu">

                <a href="#">Hombre</a>

                <a href="#">Mujer</a>

                <a href="#">Running</a>

                <a href="#">Casual</a>

                <a href="#">Outlet</a>

            </nav>

            {/* Acciones */}

            <div className="navbar-icons">

                <FiSearch />

                <FiHeart />

                <Link
                    to="/login"
                    className="navbar-icon-link"
                >
                    <FiUser />
                </Link>

                <FiShoppingBag />

            </div>

        </header>

    );

}

export default Navbar; 