import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

// Interceptores para añadir el token JWT al encabezado de autorización
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log(config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
