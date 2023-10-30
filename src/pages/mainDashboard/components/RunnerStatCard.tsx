import { useTheme } from '@mui/material';
import { styled } from '@mui/system';

import { Subheading1, Subheading2 } from '@/components';
import AvatarImg from '@/components/core/Avatar';
import { WrapperProps, getRandomUserAvatar } from '@/shared';
import { tokens } from '@/styles';

type RunnerStatCardProps = {
  name: string;
  distanceCovered: number;
  averagePace: number;
}

const RunnerAvatar = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(5),
}));

const RunnerStat = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const RunnerStatCardWrapper = styled('div')<WrapperProps>(({ theme, bgColor }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '97%',
  marginBottom: theme.spacing(10),

  backgroundColor: bgColor,
  borderRadius: '7px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
  padding: `${theme.spacing(14)} ${theme.spacing(14)}`,
}));

const RunnerStatCard = ({ name, distanceCovered, averagePace }: RunnerStatCardProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <RunnerStatCardWrapper bgColor={colors.primary[400]}>
      <RunnerAvatar>
        <AvatarImg src={getRandomUserAvatar()} diameter="70px" sectionName="runner-stat" />
        <Subheading2>{name}</Subheading2>
      </RunnerAvatar>

      <RunnerStat>
        <Subheading2>Distance Covered</Subheading2>
        <Subheading1>{distanceCovered} km</Subheading1>
      </RunnerStat>

      <RunnerStat>
        <Subheading2>Average Pace</Subheading2>
        <Subheading1>{averagePace}</Subheading1>
      </RunnerStat>
    </RunnerStatCardWrapper>
  )
}


export default RunnerStatCard