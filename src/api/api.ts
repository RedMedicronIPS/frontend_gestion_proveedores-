const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const API = {
  BASE_URL,
  LOGIN: `${BASE_URL}/token/`,
  REFRESH: `${BASE_URL}/token/refresh/`,
  USER_ME: `${BASE_URL}/users/me/`,
  USERS: `${BASE_URL}/users/`,
  TERCEROS: `${BASE_URL}/terceros/`,
};
