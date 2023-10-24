import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton, useTheme } from '@mui/material';

import TempAvatarImage from '@/assets/temp-avatar.png';
import { tokens } from '@/styles/theme';

import Avatar from './Avatar';

import '@/styles/scss/pages/layout/sidebar.scss';
import { useDispatch } from 'react-redux';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { useEffect, useState } from 'react';
import { StorageKeysEnum } from "@/shared";

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState(localStorage.getItem(StorageKeysEnum.SIDEBAR_EXPANDED) !== 'false');

  useEffect(() => {
    localStorage.setItem(StorageKeysEnum.SIDEBAR_EXPANDED, expanded.toString());
  }, [expanded]);

  const handleSidebarToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <SidebarMenu
      expanded={expanded}
      style={{ backgroundColor: colors.primary[400] }}
    >
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

    </SidebarMenu>
  );
}

export default Sidebar;