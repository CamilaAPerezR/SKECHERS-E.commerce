import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./features/productos/ProductDetail";
import CollectionDetail from "./features/categorias/CollectionDetail";
import Colaborador from "./pages/Colaborador"; 
import RoleRoute from "./components/auth/RoleRoute"; 

function App() {

    return (

        <BrowserRouter>

            <Layout>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/productos/:id"
                        element={<ProductDetail />}
                    />

                    <Route
                        path="/colecciones/:collection"
                        element={<CollectionDetail />}
                    />

                    <Route
                        path="/colaborador"
                        element={
                            <RoleRoute allowedRole="Colaborador">
                                <Colaborador />
                            </RoleRoute>
                        }
                    />

                </Routes>

            </Layout>

        </BrowserRouter>

    );

}

export default App;