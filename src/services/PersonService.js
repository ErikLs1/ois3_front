import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/person';

export const listPersons = () => axios.get(REST_API_BASE_URL);

export const createPerson = (person) => axios.post(REST_API_BASE_URL, person)

export const getPerson = (personId) => axios.get(REST_API_BASE_URL + '/' + personId)

export const updatePerson = (personId, person) => axios.put(REST_API_BASE_URL + '/' + personId, person)

export const deletePerson = (personId) => axios.delete(REST_API_BASE_URL + '/' + personId)