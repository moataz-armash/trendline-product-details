import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export const ENDPOINT_REGISTER = "/auth/register";
export const ENDPOINT_LOGIN = "/auth/login";
export const ENDPOINT_VERIFY = "/auth/verify";

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
