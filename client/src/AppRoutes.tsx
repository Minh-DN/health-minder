import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

import ComingSoon from './components/ComingSoon';
import { MainDashboard, SignInPage } from './pages';

export const AuthRequired = ({ children }: { children: ReactNode }) => {
  // TODO: implement auth
  const isAuthenticated = true;

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
