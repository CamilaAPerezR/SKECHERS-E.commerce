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

import { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import { obtenerProductos } from "../../services/productoService";
import ProductCard from "../../components/ui/ProductCard";

function FeaturedProducts() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                setProductos(data);
            })
            .catch((error) => {
                console.error("Error al obtener productos:", error);
            });
    }, []);

        console.log("Productos recibidos:", productos);

    return (
        <section className="featured-products">

            <div className="featured-header">

                <span>NUEVA COLECCIÓN</span>

                <h2>Productos destacados</h2>

                <p>
                    Descubre algunos de los modelos más
                    representativos de nuestra colección,
                    diseñados para ofrecer comodidad,
                    innovación y estilo.
                </p>

            </div>

            <div className="featured-grid">

                {productos.map((producto) => (
                    <ProductCard
                        key={producto.id}
                        producto={producto}
                    />
                ))}

            </div>

        </section>
    );
}

export default FeaturedProducts;