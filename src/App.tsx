import { CssBaseline, ThemeProvider } from "@mui/material";

import { useColorMode } from "@/styles";

import '@/styles/scss/app.scss';
import { AppRoutes } from "./AppRoutes";
import { Layout } from "./pages";

import { Route, Routes } from 'react-router-dom';

const App = () => {
  const theme = useColorMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { path, element } = route;
            return <Route
              key={`route-${index}`}
              element={element}
              path={path} />
          })}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;