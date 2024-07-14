import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ComingSoon from './components/ComingSoon';
import { MainDashboard, SignInPage } from './pages';
import { RootState } from './redux';

export const AuthRequired = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to='/sign-in' replace />;
};

export const AppRoutes = [
  {
    path: 'dashboard',
    element: <MainDashboard />
  },
  {
    path: 'workout-history',
    element: <ComingSoon />
  }
];

export const GuestRoutes = [
  {
    path: 'sign-in',
    element: <SignInPage />
  }
];
