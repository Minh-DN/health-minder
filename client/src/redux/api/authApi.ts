import axiosInstance from './axiosInstance';

export const signIn = async (credentials: { username: string; password: string }) => {
  return axiosInstance.post('auth/authenticate', credentials);
};

export const refreshTokens = async (refreshToken: string) => {
  return axiosInstance.post('auth/refresh', { refreshToken });
};
