import { useParams } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axiosInstance";

const ResetPass = () => {
  const { token } = useParams(); // Accede al token de la URL
  const [password, setPassword] = useState("");

  const enviarEmail = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.post(`reset-password/${token}/`, {
        password: password,
      });
      console.log("Contraseña restablecida:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      {/* Renderiza tu formulario de restablecimiento de contraseña o cualquier otra interfaz relevante */}
      <p>Restablecimiento de contraseña</p>
      <form onSubmit={enviarEmail}>
        <label >Nueva contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button type="submit">Restablecer contraseña</button>
      </form>
    </div>
  );
};

export default ResetPass;
