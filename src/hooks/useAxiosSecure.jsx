
import axios from 'axios';
import { getCookie } from 'cookies-next'; // Adjust based on my cookie management library

const axiosSecure = axios.create({
  baseURL: 'https://true-bond-server.vercel.app',
  withCredentials: true, // Ensure cookies are included in requests
});

// Intercept requests to add the Authorization header
axiosSecure.interceptors.request.use((config) => {
  const token = getCookie('token'); // Retrieve the token from cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
