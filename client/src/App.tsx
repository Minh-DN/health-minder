import '@/styles/scss/app.scss';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { useColorMode } from '@/styles';

import { AppRoutes, AuthRequired, GuestRoutes } from './AppRoutes';
import { Layout } from './pages';

const App = () => {
  const theme = useColorMode();

  const appRoutes = AppRoutes.map(({ element, ...rest }) => ({
    ...rest,
    element: <AuthRequired>{element}</AuthRequired>
  }));

  const routing = useRoutes([
    {
      path: '/',
      element: (
        <AuthRequired>
          <Layout />
        </AuthRequired>
      ),
      children: appRoutes
    },
    ...GuestRoutes
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
};

export default App;
