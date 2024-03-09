import ComingSoon from './components/ComingSoon';
import { MainDashboard } from './pages';

export const AppRoutes = [
  {
    path: '/dashboard',
    element: <MainDashboard />,
  },
  {
    path: '/workout-history',
    element: <ComingSoon />
  }
]