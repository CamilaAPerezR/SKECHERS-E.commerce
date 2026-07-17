/*
===========================================================
Archivo: main.jsx
Proyecto: SKECHERS E-Commerce
Descripción:
Punto de entrada principal de la aplicación React.
Aquí se renderiza el componente principal e importan
los estilos globales del proyecto.
===========================================================
*/

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

/* Estilos globales */
import "./styles/Global.css";
import "./styles/Layout.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);