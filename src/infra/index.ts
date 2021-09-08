import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

http.interceptors.request.use((config) => {
  return config;
});

http.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (err) => {
    // Status: 503 Service Unavailable
    // Status: 422 Unprocessable Entity
    const { data, status } = err.response;
    return Promise.reject({
      message: data.message,
      status,
    });
  }
);

export default http;
