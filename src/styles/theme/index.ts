import { PaletteMode, createTheme } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "@/redux";
import { Colors } from "@/shared";

// Extend MUI Theme
declare module "@mui/material/styles" {
  // Extend Theme
  interface Theme {
    fontSize: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    lineHeight: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    fontWeight: {
      lighter: number;
      light: number;
      normal: number;
      bold: number;
      bolder: number;
    };
  }

  // Extend Paletee
  interface Palette {
    neutral: {
      dark: string;
      main: string;
      light: string;
    };
  }
}

// color design tokens export
export const tokens = (mode: PaletteMode): Colors => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#fff", // manually changed
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#fff", // manually changed
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[100],
              main: colors.grey[500],
              light: colors.grey[900],
            },
            success: {
              dark: colors.greenAccent[700],
              main: colors.greenAccent[500],
              light: colors.greenAccent[200],
            },
            error: {
              dark: colors.redAccent[700],
              main: colors.redAccent[500],
              light: colors.redAccent[300],
            },
            background: {
              default: colors.primary[500],
            },
            divider: colors.grey[100],
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[100],
              main: colors.grey[500],
              light: colors.grey[900],
            },
            success: {
              dark: colors.greenAccent[300],
              main: colors.greenAccent[500],
              light: colors.greenAccent[700],
            },
            error: {
              dark: colors.redAccent[200],
              main: colors.redAccent[500],
              light: colors.redAccent[700],
            },
            background: {
              default: "#fcfcfc",
            },
            divider: colors.grey[100],
          }),
    },
    typography: {
      fontFamily: ["Noto Sans", "sans-serif"].join(","),
      fontSize: 12,
    },
    spacing: 1,
    fontSize: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "24px",
      5: "36px",
    },
    lineHeight: {
      1: "16px",
      2: "22px",
      3: "24px",
      4: "32px",
      5: "48px",
    },
    fontWeight: {
      lighter: 200,
      light: 300,
      normal: 400,
      bold: 500,
      bolder: 600,
    },
  };
};

export const useColorMode = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = createTheme(themeSettings(mode));
  return theme;
};
