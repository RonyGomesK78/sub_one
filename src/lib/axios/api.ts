import axios, { AxiosInstance } from 'axios';

const { REACT_API_URL } = process.env;
const axiosInstance: AxiosInstance = axios.create({
  baseURL: REACT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
