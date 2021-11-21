import axios from 'axios';
import { API_BASE_URL, BASIC_TOKEN } from './constants';

// const API_BASE_URL = process.env.WORDPRESS_API_URL

const setInterceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = BASIC_TOKEN;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      showErrorLog(error);
      return Promise.reject(error);
    }
  );
};

const setTokenInterceptors = (instance) => {
  instance.interceptors.request.use(
    (config) => {
      // const token = Cookies.get('token');
      // console.log('setTokenInterceptors -> token', token);
      if (token) config.headers['Authorization'] = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export const DungJingMemberInstance = (() => {
  const config = {
    baseURL: `${API_BASE_URL}/DungJingMember/rest`,
  };
  const instance = axios.create(config);
  setInterceptors(instance);

  return instance;
})();

export const RESTfulUserInstance = (() => {
  const config = {
    baseURL: `${API_BASE_URL}/wp-json/wp/v2`,
  };
  const instance = axios.create(config);

  //setInterceptors(instance);
  //setTokenInterceptors(instance);
  return instance;
})();
