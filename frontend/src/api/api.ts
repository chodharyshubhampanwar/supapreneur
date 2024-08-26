import axios from "axios";
import { getAuth } from "firebase/auth";

const BASE_URL = "https://n1xa36sfdh.execute-api.ap-south-1.amazonaws.com/dev/companies";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
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
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
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

export const createUser = async (
  email: string,
  firebaseId: string,
  type: string
) => {
  try {
    const response = await axiosInstance.post("/users", {
      email,
      username: email,
      firebaseId,
      type,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserProfile = async (id: string) => {
  const response = await axiosInstance.get(`/profile/${id}`);
  return response.data;
};

export const getCompanies = async () => {
  const response = await axiosInstance.get('');
  return response.data
};

export default axiosInstance;
