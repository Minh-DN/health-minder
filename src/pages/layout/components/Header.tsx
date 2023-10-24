import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { toggleColorMode } from '@/redux/slices';
import { tokens } from '@/styles/theme';

import '@/styles/scss/pages/layout/header.scss';

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  return (
    <header
      className='header-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <IconButton onClick={() => dispatch(toggleColorMode())}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </header>
  )
}

export default Header