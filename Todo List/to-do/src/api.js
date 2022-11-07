import axios from 'axios';

const api=axios.create(
    {
        baseUrl:'http://localhost:3030',
        timeout:5000,
    }
)
api.interceptors.request.use((config) => {
    config.headers.authorization= localStorage.token;
    return config;
}, (error) => {
    return Promise.reject(error);
});


export default api;