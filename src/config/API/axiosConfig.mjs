import axios from 'axios'


const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export default apiClient;