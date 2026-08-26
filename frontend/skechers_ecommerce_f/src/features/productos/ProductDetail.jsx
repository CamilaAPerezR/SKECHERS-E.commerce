/*
===========================================================
Componente: ProductDetail
Proyecto: SKECHERS E-Commerce

Descripción:
Muestra el detalle de un producto seleccionado.

La imagen se obtiene según el ID del producto.
===========================================================
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

function ProductDetail() {

    const { id } = useParams();

    const [producto, setProducto] = useState(null);

    /*
    ===========================================================
    Cargar imágenes de productos
    ===========================================================
    */

    const productImages = import.meta.glob(
        "../../assets/images/products/*.jpg",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    );

    useEffect(() => {

        axios
            .get(`http://localhost:8080/api/productos/${id}`)
            .then((respuesta) => {

                setProducto(respuesta.data);

            })
            .catch((error) => {

                console.error(
                    "Error al obtener el producto:",
                    error
                );

            });

    }, [id]);

    if (!producto) {

        return <p>Cargando producto...</p>;

    }

    /*
    ===========================================================
    Imagen correspondiente al producto
    ===========================================================
    */

    const imagePath =
        `../../assets/images/products/producto-${producto.id}.jpg`;

    const imagenProducto =
        productImages[imagePath];

    return (

        <section className="product-detail">

            <div className="product-detail-container">

                <div className="product-detail-image">

                    {imagenProducto ? (

                        <img
                            src={imagenProducto}
                            alt={producto.nombre}
                        />

                    ) : (

                        <img
                            src="/src/assets/images/SKECHERShero.jpg"
                            alt={producto.nombre}
                        />

                    )}

                </div>

                <div className="product-detail-info">

                    <span className="product-detail-category">
                        {producto.categoria?.nombre}
                    </span>

                    <h1>
                        {producto.nombre}
                    </h1>

                    <p className="product-detail-description">
                        {producto.descripcion}
                    </p>

                    <strong className="product-detail-price">
                        $
                        {Number(
                            producto.precio
                        ).toLocaleString("es-CO")}
                    </strong>

                </div>

            </div>

        </section>

    );

}

export default ProductDetail; 