import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Button, IconButton, TextField, styled, useTheme } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IMAGE_URLS } from '@/assets/imageUrls';
import { Heading1, Subheading1 } from '@/components';
import { signIn } from '@/redux/api/authApi';
import { setAuthTokens, toggleColorMode } from '@/redux/slices';

const PageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  backgroundColor: theme.palette.background.default
}));

const ContentWrapper = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const ImageWrapper = styled('img')({
  flex: 1,
  objectFit: 'cover'
});

const HeaderWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: 20
});

const LogoImageWrapper = styled('img')({
  height: 50
});

const FormWrapper = styled('form')({
  height: '80%',
  width: '75%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 15,
  maxWidth: 400
});

const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .Mui-focused fieldset': {
    borderColor: `${theme.palette.secondary.main} !important` // Border color when focused
  }
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  height: 50,
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.light
  }
}));

const SignInPage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: async (values) => {
      try {
        const response = await signIn(values);
        dispatch(setAuthTokens(response.data));
        navigate('/dashboard');
      } catch (error) {
        console.log(error);
      }
    }
  });

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

        <FormWrapper onSubmit={formik.handleSubmit}>
          <Heading1>Welcome Back</Heading1>
          <CustomTextField
            required
            id='username'
            placeholder='Username'
            fullWidth
            variant='outlined'
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {/* TODO: implement error handling */}
          <CustomTextField
            required
            id='password'
            placeholder='Password'
            fullWidth
            variant='outlined'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <CustomButton type='submit' fullWidth>
            Sign In
          </CustomButton>
        </FormWrapper>
      </ContentWrapper>
      <ImageWrapper src={IMAGE_URLS.SIGN_IN_IMAGE} />
    </PageWrapper>
  );
};

export default SignInPage;
