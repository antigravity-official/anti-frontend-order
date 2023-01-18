import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  timeout: 3000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default axiosInstance;
