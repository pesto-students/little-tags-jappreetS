import axios from 'axios';

import { API_BASE_URL } from '../constants';

const REQUEST = (config) => {
  const HTTP = axios.create({
    baseURL: API_BASE_URL,
  });

  HTTP.interceptors.request.use((request) => {
    request.url = request.baseURL + config.url;
    request.data = config.data;
    request.method = config.method;
    return request;
  });

  HTTP.interceptors.response.use(
    (response) => {
      if (response.status === 200) {
        return response;
      }
    },
    (error) => {
      if (error.response.status === 401) {
        // logout
      }
      if (error.response.status === 404 || error.response.status === 400) {
        return error.response;
      }
    }
  );
  return HTTP();
};

export default REQUEST;
