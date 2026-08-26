/*
===========================================================
Archivo: productoService.js
Proyecto: SKECHERS E-Commerce

Descripción:
Servicio encargado de realizar las peticiones relacionadas
con productos, variantes e imágenes hacia la API REST.
===========================================================
*/

import axios from "axios";

const API_URL = "http://localhost:8080/api";


/*
===========================================================
Obtener todos los productos
===========================================================
*/

export const obtenerProductos = async () => {

    const response = await axios.get(
        `${API_URL}/productos`
    );

    return response.data;

};


/*
===========================================================
Obtener todas las variantes
===========================================================
*/

export const obtenerVariantes = async () => {

    const response = await axios.get(
        `${API_URL}/productos-variantes`
    );

    return response.data;

};


/*
===========================================================
Obtener todas las imágenes de productos
===========================================================
*/

export const obtenerImagenesProducto = async () => {

    const response = await axios.get(
        `${API_URL}/imagenes-producto`
    );

    return response.data;

}; 