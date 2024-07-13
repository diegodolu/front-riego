import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../hook/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, userRole, isLoading } = useAuth();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  console.log("User role", userRole);
  console.log("Token", token);

  if (!token || !allowedRoles.includes(userRole)) {
    // Usuario no autenticado o sin el rol necesario, redirigir a Login
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
