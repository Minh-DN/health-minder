import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.HM_DEV_API_BASE_URL
});

export default axiosInstance;
