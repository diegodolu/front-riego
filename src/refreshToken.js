import axios from 'axios';

const refreshToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
        const response = await axios.post('http://localhost:8000/api/token/refresh/', {
            refresh: refreshToken
        });
        const newAccessToken = response.data.access_token;
        localStorage.setItem('accessToken', newAccessToken); // Actualizar el access token en localStorage
        return newAccessToken;
    } catch (error) {
        console.error('Error al refrescar el token:', error);
        return null;
    }
};

export default refreshToken;
