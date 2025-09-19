import axios from "axios";
import { MAMAAID_API } from "./constants";


const axiosInstance = axios.create({
    baseURL: MAMAAID_API,
    withCredentials: true,
});

export function setAuthToken(token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;