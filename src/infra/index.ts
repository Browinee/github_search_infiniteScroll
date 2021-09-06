import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.github.com/',
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
        return Promise.reject(err);
    },
)

export default http;