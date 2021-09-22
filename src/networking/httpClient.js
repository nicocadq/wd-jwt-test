/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import TokenService from './tokenService';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_ALT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor
httpClient.interceptors.request.use((request) => {
  const token = TokenService.getLocalAccessToken();

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

// response interceptor
httpClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config } = error;

    if (error.response.status === 401 && !config._retry) {
      config._retry = true;

      try {
        const refreshTokenResponse = await httpClient.post('/auth/refreshtoken', {
          refreshToken: TokenService.getLocalRefreshToken(),
        });

        const { accessToken } = refreshTokenResponse.data;

        TokenService.updateLocalAccessToken(accessToken);

        return httpClient(config);
      } catch (refreshTokenError) {
        return Promise.reject(refreshTokenError);
      }
    }

    return Promise.reject(error);
  },
);

export default httpClient;
