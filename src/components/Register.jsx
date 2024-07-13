// Register.jsx
import { useState } from 'react';
import axios from 'axios';

const rolesDict = {
    'Administrador': 1,
    'Usuario': 2,
    'Desarrollador': 3
};

const Register = () => {
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/register/', {
                nombre: nombre,
                username: username,
                password: password,
                idRol: rolesDict[rol]  // Asignar el ID del rol seleccionado
            });

            console.log('Usuario registrado:', response.data);
            // Aquí podrías redirigir al usuario a la página de login o mostrar un mensaje de éxito
        } catch (error) {
            setError('Error al registrar usuario. Verifica los datos ingresados.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Registro de Usuario</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <label>Rol:</label>
                <select value={rol} onChange={(e) => setRol(e.target.value)}>
                    <option value="">Selecciona un rol</option>
                    {Object.keys(rolesDict).map((key) => (
                        <option key={key} value={key}>{key}</option>
                    ))}
                </select>
                <br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
