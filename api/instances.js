import axios from 'axios';
import { API_BASE_URL, BASIC_TOKEN } from './constants';

// const API_BASE_URL = process.env.WORDPRESS_API_URL

export const retryFailedRequest = (error) => {
  if (error.code === 'ECONNABORTED') {
    console.log(`A timeout happend on url ${error.config.url}`);
    return 408;
  } else if (error.response) {
    return error.response.status;
  } else {
    return 404;
  }
};

export const NoAuthInstance = (() => {
  const config = {
    baseURL: `${API_BASE_URL}/api`,
  };
  const instance = axios.create(config);
  // setInterceptors(instance);

  return instance;
})();
