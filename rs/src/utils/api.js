import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rs-backend-app.herokuapp.com'
});

export default api;
