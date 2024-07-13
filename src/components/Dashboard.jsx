import React from "react";
import useAuth from "../hook/useAuth"; // Importa el hook useAuth para obtener el token y userRole
import Register from "./Register";

const Dashboard = () => {
  const { userRole } = useAuth(); // Obtén userRole desde useAuth

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/"; // Redirige al usuario al inicio de sesión al cerrar sesión
  };

  const handleClick = (role) => {
    console.log("Botón presionado por:", role);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      <br />
      <br />
      <button
        onClick={() => handleClick("Administrador")}
        disabled={userRole !== 1}
      >
        Botón Administrador
      </button>
      <br />
      <button
        onClick={() => handleClick("Usuario")}
        disabled={userRole !== 2}
      >
        Botón Usuario
      </button>
      <br />
      <button
        onClick={() => handleClick("Desarrollador")}
        disabled={userRole !== 3}
      >
        Botón Desarrollador
      </button>

      {userRole === 3 && <Register />}
    </div>
  );
};

export default Dashboard;
