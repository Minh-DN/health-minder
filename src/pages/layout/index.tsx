import { useTheme } from "@mui/material";
import { LayoutRouteProps, Outlet } from "react-router";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

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