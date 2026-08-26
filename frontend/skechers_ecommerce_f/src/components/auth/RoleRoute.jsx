import { Navigate } from "react-router-dom";

function RoleRoute({ children, allowedRole }) {

    const usuarioGuardado = localStorage.getItem("usuario");

    if (!usuarioGuardado) {
        return <Navigate to="/login" replace />;
    }

    const usuario = JSON.parse(usuarioGuardado);

    if (usuario.rol !== allowedRole) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default RoleRoute; 