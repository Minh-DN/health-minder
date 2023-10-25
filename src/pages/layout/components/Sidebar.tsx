import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton, useTheme } from '@mui/material';
import { NavLink } from "react-router-dom";

import TempAvatarImage from '@/assets/temp-avatar.png';
import { tokens } from '@/styles/theme';

import Avatar from './Avatar';

import '@/styles/scss/pages/layout/sidebar.scss';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useEffect, useState } from 'react';

import { StorageKeysEnum } from "@/shared";

import { routes } from "./routes";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [expanded, setExpanded] = useState(localStorage.getItem(StorageKeysEnum.SIDEBAR_EXPANDED) !== 'false');

  useEffect(() => {
    localStorage.setItem(StorageKeysEnum.SIDEBAR_EXPANDED, expanded.toString());
  }, [expanded]);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  // Calculate the padding to offset the left border of selected menu item
  const calcNavLinkStyle = (isActive: boolean, label?: string) => {
    const calcPaddingLeft = () => {
      return label ? '40px' : '20px';
    }

    return {
      ...(isActive && {
        color: colors.greenAccent[500],
        borderLeft: `2px ${colors.greenAccent[500]} solid`,
      }),
      paddingLeft: calcPaddingLeft(),
    }
  }

  return (
    <SidebarMenu
      expanded={expanded}
      style={{ backgroundColor: colors.primary[400] }}
    >
      {/* HEADER */}
      <SidebarMenu.Header>
        {expanded && <span className='logo-text'>HealthMinder</span>}
        <div className='hamburger-icon'>
          <IconButton onClick={handleSidebarToggle}>
            <MenuOutlinedIcon style={{ fontSize: '28px' }} />
          </IconButton>
        </div>
      </SidebarMenu.Header>

      {/* AVATAR */}
      {expanded && <Avatar src={TempAvatarImage} />}

      {/* BODY - NAV MENU */}
      <SidebarMenu.Body>
        {expanded ? (
          <SidebarMenu.Nav>
            {routes && routes.map(({ label, icon, link }, index) =>
              <NavLink to={link} className='sidebar-menu-nav-link' key={index}
                style={({ isActive }) => calcNavLinkStyle(isActive, label)}
              >
                <div className='sidebar-menu-nav-icon'>{icon}</div>
                <div className='sidebar-menu-nav-title'>{label}</div>
              </NavLink>
            )}
          </SidebarMenu.Nav>
        ) : (
          <SidebarMenu.Nav>
            {routes && routes.map(({ icon, link }, index) =>
              <NavLink to={link} className='sidebar-menu-nav-link' key={index}
                style={({ isActive }) => calcNavLinkStyle(isActive)}
              >
                <div className='sidebar-menu-nav-icon'>{icon}</div>
              </NavLink>
            )}
          </SidebarMenu.Nav>
        )}
      </SidebarMenu.Body>
    </SidebarMenu>
  );
}

export default Sidebar;