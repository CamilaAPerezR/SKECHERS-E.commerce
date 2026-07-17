/*
===========================================================
Componente: FeaturedProducts
Proyecto: SKECHERS E-Commerce

Descripción:
Sección que muestra una selección de productos destacados
de la tienda.

Cada producto se renderiza mediante el componente
ProductCard para mantener la reutilización del código.
===========================================================
*/

import "./FeaturedProducts.css";

function FeaturedProducts() {

    return (

        <section className="featured-products">

            <div className="featured-header">

                <span>NUEVA COLECCIÓN</span>

                <h2>
                    Productos destacados
                </h2>

                <p>
                    Descubre algunos de los modelos más
                    representativos de nuestra colección,
                    diseñados para ofrecer comodidad,
                    innovación y estilo.
                </p>

            </div>

            <div className="featured-grid">

                {/* Aquí irán las ProductCard */}

            </div>

        </section>

    );

}

export default FeaturedProducts;