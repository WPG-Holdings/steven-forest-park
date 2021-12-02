import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const BASIC_TOKEN = 'Basic ZXJpYzoxMjM0';
export const API_BASE_URL = (() => {
  //const API_ENV = publicRuntimeConfig.API_ENV;
  const API_ENV = 'development';
  const API_URL_TEST = 'http://10.21.252.167:8080';
  const API_URL_UAT = 'http://10.21.252.167:8080';
  const API_URL_PRODUCTION = 'http://10.21.252.167:8080';

  switch (API_ENV) {
    case 'development':
    case 'test':
      return API_URL_PRODUCTION;
    case 'production':
      return API_URL_PRODUCTION;
    case 'uat':
      return API_URL_UAT;
    default:
      return API_URL_PRODUCTION;
  }
})();
