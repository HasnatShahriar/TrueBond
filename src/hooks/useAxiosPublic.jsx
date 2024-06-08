import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://true-bond-server.vercel.app'
 
})
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;