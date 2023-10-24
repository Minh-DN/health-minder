import { CssBaseline, ThemeProvider } from "@mui/material";

import { useColorMode } from "@/styles";

import '@/styles/scss/app.scss';
import Layout from "./pages/layout";

const App = () => {
  const theme = useColorMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
}

export default App;