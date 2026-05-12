import axios from 'axios';

const API_URL = 'http://192.168.1.142:3000/api/companies';

export const getCompanies = () => axios.get(API_URL);
export const createCompany = (company) => axios.post(API_URL, company);
export const updateCompany = (id, company) => axios.put(`${API_URL}/${id}`, company);
export const deleteCompany = (id) => axios.delete(`${API_URL}/${id}`);

