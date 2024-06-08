import axios from "axios";

const axiosSecure = axios.create({
  baseURL: 'https://true-bond-server.vercel.app'
 
})
const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;