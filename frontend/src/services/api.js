import axios from 'axios';

import { getToken } from './auth';

const Api = axios.create({
  baseURL: 'http://localhost:3333',
});

Api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers = {
      'x-access-token': token
    }
  }

  return config;
});

export default Api;
