import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { getToken } from './tokens';
// import { processErrorHandle } from './processes-error-handle';
import { AppRoute, } from '../components/app/app';
import browserHistory from '../browser-history';
import { StatusCodeMapping } from '../const';
import { StatusCodes } from 'http-status-codes';


type DetailMessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create ({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.EverythingElse);
      }
      if (error.response && shouldDisplayError(error.response)) {
        // const detailMessage = (error.response.data);
        // processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
