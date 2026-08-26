/*
===========================================================
Componente: Login
Proyecto: SKECHERS E-Commerce

Descripción:
Página de inicio de sesión del sistema.

El formulario se comunica con la API de autenticación
del backend y permite identificar el usuario y su rol.
===========================================================
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [error, setError] = useState("");
    const [cargando, setCargando] = useState(false);

    const manejarLogin = async (e) => {

        e.preventDefault();

        setError("");
        setCargando(true);

        try {

            const respuesta = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    correo: correo,
                    contrasena: contrasena
                }
            );

            console.log("LOGIN FUNCIONANDO");
            console.log("RESPUESTA:", respuesta.data);
            console.log("ROL:", respuesta.data.rol);

            /*
            Guardamos temporalmente los datos del usuario
            para poder utilizarlos después en el frontend.
            */

            localStorage.setItem(
                "usuario",
                JSON.stringify(respuesta.data)
            );

            /*
            Redirigimos al usuario según su rol.
            */

            if (respuesta.data.rol === "Colaborador") {

                navigate("/colaborador");

            } else if (respuesta.data.rol === "Administrador") {

                navigate("/administrador");

            } else {

                navigate("/");

            }

        } catch (error) {

            console.error("Error en el login:", error);

            setError(
                "Correo o contraseña incorrectos."
            );

        } finally {

            setCargando(false);

        }

    };

    return (

        <section className="login-page">

            <div className="login-container">

                <div className="login-header">

                    <span className="login-brand">
                        SKECHERS
                    </span>

                    <h1>
                        Bienvenido
                    </h1>

                    <p>
                        Inicia sesión para continuar.
                    </p>

                </div>

                <form
                    className="login-form"
                    onSubmit={manejarLogin}
                >

                    <div className="login-field">

                        <label htmlFor="correo">
                            Correo electrónico
                        </label>

                        <input
                            id="correo"
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={correo}
                            onChange={(e) =>
                                setCorreo(e.target.value)
                            }
                            required
                        />

                    </div>

                    <div className="login-field">

                        <label htmlFor="contrasena">
                            Contraseña
                        </label>

                        <input
                            id="contrasena"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={contrasena}
                            onChange={(e) =>
                                setContrasena(e.target.value)
                            }
                            required
                        />

                    </div>

                    {error && (

                        <p className="login-error">
                            {error}
                        </p>

                    )}

                    <button
                        type="submit"
                        className="login-button"
                        disabled={cargando}
                    >

                        {cargando
                            ? "INICIANDO..."
                            : "INICIAR SESIÓN"
                        }

                    </button>

                </form>

            </div>

        </section>

    );
}

export default Login; 