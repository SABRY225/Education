import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5177/', // Replace with your API base URL
});


export default axiosInstance;
