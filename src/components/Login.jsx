import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import RecuperarPass from './RecuperarPass';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://3p7jzhtc-8000.brs.devtunnels.ms/api/token/', {
                username: username,
                password: password
            });

            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access); // Almacenar el access token
            localStorage.setItem('refreshToken', refresh); // Almacenar el refresh token

            navigate('/dashboard');
        } catch (error) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Login</button>
            </form>
            <RecuperarPass />
        </div>
    );
};

export default Login;
