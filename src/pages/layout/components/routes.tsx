import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const routes = [
  {
    icon: <HomeOutlinedIcon />,
    label: "Dashboard",
    link: "/",
  },
  {
    icon: <FitnessCenterIcon />,
    label: 'Workout History',
    link: '/workout-history'
  },
];
