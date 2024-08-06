import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5177/', 
});


export default axiosInstance;
export const baseURL="http://localhost:5177/";