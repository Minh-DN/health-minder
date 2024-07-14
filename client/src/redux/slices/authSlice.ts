import { createSlice } from '@reduxjs/toolkit';

import { getUserInfoFromToken } from '@/shared';

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  firstName: string | null;
  lastName: string | null;
};

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
  isAuthenticated: !!localStorage.getItem('accessToken'),
  firstName: localStorage.getItem('firstName'),
  lastName: localStorage.getItem('lastName')
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { accessToken, refreshToken } = action.payload;

      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      const userInfo = getUserInfoFromToken(accessToken);
      if (userInfo) {
        const { firstName, lastName } = userInfo;

        state.firstName = firstName;
        state.lastName = lastName;

        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
      }
    },
    clearAuth: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.clear();
    }
  }
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
