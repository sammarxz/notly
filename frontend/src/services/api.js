import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use(async config => {
  // TODO get token and verify to pass in headers.authorization; 
});

export default api;
