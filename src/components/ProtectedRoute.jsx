import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("accessToken");
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchUserRole = async (userId) => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/usuarios/${userId}`
        );
        if (response.data) {
          const userRole = response.data.idRol;
          setUserRole(userRole);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      const decodedToken = decodeToken(token);
      fetchUserRole(decodedToken.user_id);
    } else {
      setLoading(false);
    }
  }, [token]);

  const decodeToken = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      return null;
    }
  };

  if (loading) {
    return <div>Cargando...</div>; // Puedes mostrar un spinner o algún indicador de carga aquí
  }

  console.log("User role", userRole);
  console.log(!token);

  if (!token || !allowedRoles.includes(userRole)) {
    // Usuario no autenticado o sin el rol necesario, redirigir a Login
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
