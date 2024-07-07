import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { IconButton, styled, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';

import { IMAGE_URLS } from '@/assets/imageUrls';
import { Subheading1 } from '@/components';
import { toggleColorMode } from '@/redux/slices';


const PageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: theme.palette.background.default
}));

const ContentWrapper = styled('div')({
  flex: 1,
  padding: 20
});

const ImageWrapper = styled('img')({
  flex: 1,
  objectFit: 'cover'
});

const HeaderWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center'
});

const LogoImageWrapper = styled('img')({
  height: 50
});

const SignInPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <PageWrapper>
      <ContentWrapper>
        <HeaderWrapper>
          <LogoImageWrapper src={IMAGE_URLS.LOGO_MEDIUM} />
          <Subheading1>HealthMinder</Subheading1>
          {/* SWITCH THEME ICON */}
          <IconButton onClick={() => dispatch(toggleColorMode())} style={{ marginLeft: 'auto' }}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon fontSize='large' />
            ) : (
              <LightModeOutlinedIcon fontSize='large' />
            )}
          </IconButton>
        </HeaderWrapper>
      </ContentWrapper>
      <ImageWrapper src={IMAGE_URLS.SIGN_IN_IMAGE} />
    </PageWrapper>
  );
};

export default SignInPage;
