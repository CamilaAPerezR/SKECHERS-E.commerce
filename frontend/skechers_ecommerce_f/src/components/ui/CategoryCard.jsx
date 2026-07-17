/*
===========================================================
Componente: CategoryCard

Descripción:
Tarjeta visual reutilizable para mostrar una categoría.

Proyecto:
SKECHERS E-Commerce
===========================================================
*/
import "./CategoryCard.css";

function CategoryCard({ image, title }) {

    return (

    <article className="category-card">

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

    </article>

);
}

export default CategoryCard;


