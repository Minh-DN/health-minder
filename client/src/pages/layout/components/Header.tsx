import '@/styles/scss/pages/layout/header.scss';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, IconButton, TextField, styled, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { toggleColorMode } from '@/redux/slices';
import { tokens } from '@/styles/theme';

const CustomTextField = styled(TextField)({
  // Temporary - until search bar implementation
  '.MuiOutlinedInput-notchedOutline': {
    border: 'none !important'
  },
  '.MuiInputBase-root': {
    padding: '0 !important'
  },
  '.MuiAutocomplete-popper': {
    fontStyle: 'italic !important'
  },
  '.MuiAutocomplete-endAdornment': {
    marginTop: 3
  }
});

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const GITHUB_REPO_URL = 'https://github.com/Minh-DN/health-minder';

  return (
    <header
      className='header-wrapper'
      style={{ backgroundColor: theme.palette.background.default }}
    >
      {/* SEARCH BAR */}
      <Box
        component={'div'}
        display='flex'
        borderRadius='3px'
        sx={{
          backgroundColor: colors.primary[400],
          padding: '0 12px',
          width: '250px'
        }}
      >
        <Autocomplete
          id='search-bar'
          freeSolo
          options={['Search is coming soon']}
          sx={{ flex: 1 }}
          renderInput={(params) => {
            return <CustomTextField {...params} placeholder='Search' />;
          }}
        />
        <IconButton sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS MENU */}
      <Box component={'div'} display='flex'>
        {/* SWITCH THEME ICON */}
        <IconButton onClick={() => dispatch(toggleColorMode())}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>

        {/* LINK TO GITHUB REPO */}
        <a href={GITHUB_REPO_URL} target='_blank' rel='noopener noreferrer'>
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </a>
      </Box>
    </header>
  );
};

export default Header;
