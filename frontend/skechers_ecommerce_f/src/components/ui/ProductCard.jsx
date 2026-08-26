/*
===========================================================
Componente: ProductCard
Proyecto: SKECHERS E-Commerce

Descripción:
Componente reutilizable encargado de mostrar la información
visual de un producto.

Cada producto utiliza una imagen propia según su ID.
===========================================================
*/

import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ producto }) {

    const imagenProducto =
        `/src/assets/images/products/producto-${producto.id}.jpg`;

    return (

        <Link
            to={`/productos/${producto.id}`}
            className="product-card-link"
        >

            <article className="product-card">

                <div className="product-image">

                    <img
                        src={imagenProducto}
                        alt={producto.nombre}
                    />

                </div>

                <div className="product-info">

                    <span className="product-category">
                        {producto.categoria?.nombre}
                    </span>

                    <h3>
                        {producto.nombre}
                    </h3>

                    <p>
                        {producto.descripcion}
                    </p>

                    <strong>
                        ${Number(
                            producto.precio
                        ).toLocaleString("es-CO")}
                    </strong>

                </div>

            </article>

        </Link>

    );
}

export default ProductCard; 