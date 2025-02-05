import axios from "axios";

const API_BASE_URL = "http://localhost:8080/auth";

export const signup = (userData) => {
    return axios.post(`${API_BASE_URL}/signup`, userData);
};

export const verify = (verifyData) => {
    return axios.post(`${API_BASE_URL}/verify`, verifyData);
};

export const login = (credentials) => {
    return axios.post(`${API_BASE_URL}/login`, credentials);
};
