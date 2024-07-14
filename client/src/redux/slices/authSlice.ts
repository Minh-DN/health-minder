import { createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
    },
    clearAuthTokens: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    }
  }
});

export const { setAuthTokens, clearAuthTokens } = authSlice.actions;

export default authSlice.reducer;
