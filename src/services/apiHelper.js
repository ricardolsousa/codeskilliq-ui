// apiHelper.js
import { API_BASE_URL } from './api';

const fetchDataFromEndpoint = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error('Falha ao buscar os dados');
  }

  const data = await response.json();
  return data.data;
};

export default fetchDataFromEndpoint;