import { useNavigate } from "react-router-dom";
import "./Colaborador.css";

function Colaborador() {

    const navigate = useNavigate();

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    return (

        <section className="collaborator-page">

            <div className="collaborator-header">

                <div>
                    <span>SKECHERS / ADMINISTRACIÓN</span>

                    <h1>
                        Panel de colaborador
                    </h1>

                    <p>
                        Bienvenido, {usuario?.nombre || "Colaborador"}.
                        Gestiona las operaciones de la tienda.
                    </p>
                </div>

                <button
                    onClick={() => navigate("/")}
                >
                    VOLVER A LA TIENDA
                </button>

            </div>

            <div className="collaborator-grid">

                <article
                    className="collaborator-card"
                    onClick={() => navigate("/productos")}
                >
                    <span>01</span>

                    <h2>Productos</h2>

                    <p>
                        Consultar y gestionar los productos
                        disponibles en la tienda.
                    </p>
                </article>

                <article
                    className="collaborator-card"
                    onClick={() => navigate("/inventario")}
                >
                    <span>02</span>

                    <h2>Inventario</h2>

                    <p>
                        Consultar existencias y disponibilidad
                        de productos.
                    </p>
                </article>

                <article
                    className="collaborator-card"
                    onClick={() => navigate("/categorias")}
                >
                    <span>03</span>

                    <h2>Categorías</h2>

                    <p>
                        Gestionar las categorías de productos
                        de la tienda.
                    </p>
                </article>

            </div>

        </section>

    );
}

export default Colaborador; 