import axios from 'axios';
import { API } from '../api/api';

const axiosInstance = axios.create({
  baseURL: API.BASE_URL,
});

// Interceptor para agregar el token
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para refrescar el token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post(API.REFRESH, { refresh: refreshToken });
        const { access } = response.data;
        localStorage.setItem('token', access);
        originalRequest.headers.Authorization = `Bearer ${access}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async login(username: string, password: string) {
    const response = await axiosInstance.post(API.LOGIN, { username, password });
    return response.data;
  },

  async resetPassword(email: string) {
    return axiosInstance.post(API.RESET_PASSWORD, { email });
  },

  async confirmResetPassword(token: string, newPassword: string) {
    return axiosInstance.post(API.CONFIRM_RESET_PASSWORD, { token, newPassword });
  },

  async changePassword(currentPassword: string, newPassword: string) {
    return axiosInstance.post(API.CHANGE_PASSWORD, { currentPassword, newPassword });
  },

  async getProfile() {
    const response = await axiosInstance.get(API.USER_ME);
    return response.data;
  },

  async updateProfile(data: Partial<User>) {
    const response = await axiosInstance.patch(API.USER_ME, data);
    return response.data;
  },
};