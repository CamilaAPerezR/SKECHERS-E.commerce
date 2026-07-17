/*
===========================================================
Archivo: App.jsx

Descripción:
Componente principal de la aplicación.
Carga la estructura general del sitio.
===========================================================
*/

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";


function App() {

    return (

        <Layout>

            <Home />

        </Layout>

    );

}


export default App;