import { useTheme } from "@mui/material";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainDashBoard from "../mainDashboard";

const Layout = () => {
  const theme = useTheme();

  return (
    <div
      className='layout-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Header />
      <Sidebar />
      <main className='content-wrapper'>
        <MainDashBoard />
      </main>
    </div>
  );
}

export default Layout;