import axios from "axios";

export const privateAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const aladdinAxios = axios.create({
});
