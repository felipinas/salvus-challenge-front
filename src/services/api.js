import axios from 'axios';

const api = axios.create({
    baseURL: process.end.REACT_APP_API_URL
});

export default api;