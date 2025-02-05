import axiosInstance from "./axiosConfig";

const REST_API_BASE_URL = 'http://localhost:8080/api/person';


export const listPersons = () => axiosInstance.get(REST_API_BASE_URL);

export const createPerson = (person) => axiosInstance.post(REST_API_BASE_URL, person)

export const getPerson = (personId) => axiosInstance.get(`${REST_API_BASE_URL}/${personId}`)

export const updatePerson = (personId, person) => axiosInstance.put(`${REST_API_BASE_URL}/${personId}`, person)

export const deletePerson = (personId) => axiosInstance.delete(`${REST_API_BASE_URL}/${personId}`)