import { useTheme } from '@mui/material';
import { LayoutRouteProps, Outlet } from 'react-router';


import Header from './components/Header';
import Sidebar from './components/Sidebar';

/* eslint-disable  @typescript-eslint/no-unused-vars */
// props unused but needed as Layout component accepts children
// @ts-ignore (as TS6133 is flagged when deploying)
const Layout = (props: LayoutRouteProps) => {
  const theme = useTheme();

  return (
    <div
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Header />
      <Sidebar />
      <main className='content-wrapper'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;