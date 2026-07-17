/*
===========================================================
Componente: Header
Proyecto: SKECHERS E-Commerce

Descripción:
Encabezado principal de la aplicación.

Contiene:

- Logo
- Barra de búsqueda
- Acciones del usuario

===========================================================
*/

import {
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingBag
} from "react-icons/fi";

function Header() {

    return (

        <header className="header">

            <div className="header-logo">

                <h1>SKECHERS</h1>

            </div>

            <div className="header-search">

                <FiSearch className="search-icon" />

                <input
                    type="text"
                    placeholder="Buscar zapatillas, ropa y accesorios..."
                />

            </div>

            <div className="header-icons">

                <button>
                    <FiHeart />
                </button>

                <button>
                    <FiUser />
                </button>

                <button>
                    <FiShoppingBag />
                </button>

            </div>

        </header>

    );

}

export default Header;
