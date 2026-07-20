import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000',
});

API.interceptors.request.use((config) => {
  const stored = localStorage.getItem('user');
  if (stored) {
    try {
      const user = JSON.parse(stored);
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch {
      // ignore invalid stored user
    }
  }
  return config;
});

export default API;
