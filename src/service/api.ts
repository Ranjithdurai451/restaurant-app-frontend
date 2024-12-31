import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://restaurant-app-yht1.onrender.com/api',
    baseURL: 'http://localhost:8080/api',

});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
