/*
===========================================================
Componente: CollectionDetail

Descripción:
Página visual de una colección de SKECHERS.

Los productos se obtienen desde la API.
La distribución de productos por colección
se administra desde el frontend.

Proyecto: SKECHERS E-Commerce
===========================================================
*/

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerProductos } from "../../services/productoService";
import "./CollectionDetail.css";

function CollectionDetail() {

    const { collection } = useParams();

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        obtenerProductos()
            .then((data) => {

                setProductos(data);

            })
            .catch((error) => {

                console.error(
                    "Error al obtener productos:",
                    error
                );

            });

    }, []);

    /*
    ===========================================================
    Distribución visual de productos por colección

    Los IDs corresponden a los productos registrados
    actualmente en la base de datos.
    ===========================================================
    */

    const colecciones = {

        running: [1, 4, 6],

        lifestyle: [2, 5, 7],

        training: [3, 8, 9]

    };

    /*
    ===========================================================
    Productos pertenecientes a la colección actual
    ===========================================================
    */

    const productosColeccion = productos.filter(
        (producto) =>
            colecciones[collection]?.includes(producto.id)
    );

    /*
    ===========================================================
    Nombre de la colección
    ===========================================================
    */

    const collectionName =
        collection.charAt(0).toUpperCase() +
        collection.slice(1);

    /*
    ===========================================================
    Cargar imágenes de la colección
    ===========================================================
    */

    const images = import.meta.glob(
        "../../assets/images/*/*.jpg",
        {
            eager: true,
            query: "?url",
            import: "default"
        }
    );

    const collectionImages = Object.entries(images)
        .filter(([path]) =>
            path.includes(`/images/${collection}/`)
        )
        .map(([, image]) => image);

    /*
    ===========================================================
    Render
    ===========================================================
    */

    return (

        <main className="collection-detail">

            <section className="collection-header">

                <span>
                    COLECCIÓN SKECHERS
                </span>

                <h1>
                    {collectionName}
                </h1>

                <p>
                    Descubre nuestra selección de modelos
                    diseñados para acompañarte en cada momento.
                </p>

            </section>

            <section className="collection-gallery">

                {collectionImages.map((image, index) => {

                    const producto =
                        productosColeccion[index];

                    if (!producto) {
                        return null;
                    }

                    return (

                        <Link
                            to={`/productos/${producto.id}`}
                            className="collection-image-card"
                            key={image}
                        >

                            <img
                                src={image}
                                alt={producto.nombre}
                            />

                            <div className="collection-image-overlay">

                                <div className="collection-image-info">

                                    <span>
                                        {producto.categoria?.nombre}
                                    </span>

                                    <h2>
                                        {producto.nombre}
                                    </h2>

                                    <p>
                                        {producto.descripcion}
                                    </p>

                                    <strong>
                                        $
                                        {Number(
                                            producto.precio
                                        ).toLocaleString("es-CO")}
                                    </strong>

                                    <span className="collection-link">
                                        Ver producto →
                                    </span>

                                </div>

                            </div>

                        </Link>

                    );

                })}

            </section>

        </main>

    );

}

export default CollectionDetail; 