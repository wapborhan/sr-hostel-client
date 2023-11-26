import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:3300",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
