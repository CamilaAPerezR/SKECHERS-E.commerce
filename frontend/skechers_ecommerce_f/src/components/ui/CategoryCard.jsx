/*
===========================================================
Componente: CategoryCard

Descripción:
Tarjeta visual reutilizable para mostrar una categoría.

Proyecto:
SKECHERS E-Commerce
===========================================================
*/

import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ image, title }) {

    const collectionPath = `/colecciones/${title.toLowerCase()}`;

    return (

        <Link
            to={collectionPath}
            className="category-card"
        >

            <img
                src={image}
                alt={title}
            />

            <div className="category-info">

                <h3>{title}</h3>

                <span>
                    Explorar colección →
                </span>

            </div>

        </Link>

    );

}

export default CategoryCard; 


