import axios from 'axios';
import { getAuth } from 'firebase/auth';

const BASE_URL = 'http://localhost:5000/api/v1';

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const auth = getAuth();
    if (auth.currentUser) {
      const token = await auth.currentUser.getIdToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.error('API call failed:', error);
    return Promise.reject(error);
  }
);

export const upvoteCompany = async (id: string) => {
  const response = await axiosInstance.put(`/companies/${id}/upvote`);
  return response.data;
};


export const checkIfUserUpvoted = async (id: string) => {
  const response = await axiosInstance.get(`/companies/${id}/upvote-status`);
  return response.data;
};



export default axiosInstance;
