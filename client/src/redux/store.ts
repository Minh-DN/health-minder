import { configureStore } from '@reduxjs/toolkit';

import { authReducer, themeReducer } from './slices';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
