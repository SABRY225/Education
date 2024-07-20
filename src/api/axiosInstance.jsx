import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://lms.tryasp.net/', // Replace with your API base URL
});

export default axiosInstance;
