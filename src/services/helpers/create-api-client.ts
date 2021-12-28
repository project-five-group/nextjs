import axios, { ResponseType } from 'axios';

import { safe } from 'lib';

const BUFFER_RESPONSE_TYPES: ResponseType[] = ['arraybuffer', 'blob', 'document'];

export const createApiClient = () => {
  const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

  client.interceptors.response.use(
    rest => {
      const { data: result, config } = rest;
      const responseType = config?.responseType ?? 'json';

      return BUFFER_RESPONSE_TYPES.includes(responseType) ? result : result;
    },
    async error => {
      const responseType = error?.response?.config.responseType ?? 'json';
      let responseData = error?.response?.data;

      if (BUFFER_RESPONSE_TYPES.includes(responseType))
        safe(async () => (responseData = JSON.parse(await error.response?.text())));

      const headers = error?.response?.headers;
      const status = error?.response?.status;
      const message = responseData?.error;

      return Promise.reject({
        status,
        message,
        headers,
      });
    }
  );

  return client;
};
