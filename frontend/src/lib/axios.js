import axios from "axios";

// axiosInstance
const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

export default api;
