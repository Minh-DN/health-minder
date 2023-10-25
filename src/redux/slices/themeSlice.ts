import { PaletteMode } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

import { StorageKeysEnum } from "@/shared";

/**
 * Retrieves the initial theme mode from local storage, or defaults to 'dark'
 * @returns {PaletteMode} The initial theme mode
 */
const getInitialThemeMode = (): PaletteMode => {
  const savedThemeMode = localStorage.getItem(StorageKeysEnum.THEME);
  return savedThemeMode === "light" ? "light" : "dark"; // Default to 'dark' if no theme is saved
};

export type ThemeState = {
  mode: PaletteMode;
};

const initialState: ThemeState = {
  mode: getInitialThemeMode(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleColorMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem(StorageKeysEnum.THEME, state.mode);
    },
  },
});

export const { toggleColorMode } = themeSlice.actions;

export default themeSlice.reducer;
