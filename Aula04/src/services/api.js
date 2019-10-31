import axios from 'axios';

// porta 3333 será porta do backend
// porta 3000 será porta do frontend
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;
