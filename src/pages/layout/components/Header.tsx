import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { Box, IconButton, useTheme, Autocomplete, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import SearchIcon from "@mui/icons-material/Search";

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
      {/* SEARCH BAR */}
      <Box
        component={'div'}
        display="flex"
        borderRadius="3px"
        sx={{
          backgroundColor: colors.primary[400],
          padding: "0 12px",
          width: "250px"
        }}
      >
        <Autocomplete
          id="search-bar"
          freeSolo
          options={["Search is coming soon"]}
          sx={{ flex: 1 }}
          renderInput={(params) => {
            return <TextField {...params} placeholder="Search" />;
          }}
        />
        <IconButton sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS MENU */}
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