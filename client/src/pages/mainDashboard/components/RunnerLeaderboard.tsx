import { styled } from '@mui/material';

import { RunnerStat } from '@/shared';

import RunnerStatCard from './RunnerStatCard';

type RunnerLeaderboardProps = {
  data: RunnerStat[];
}

const RunnerLeaderboardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  height: 'calc(100vh - 250px)',
  width: '100%',
  overflow: 'auto',

  padding: `${theme.spacing(12)} 0 0 0`,
}));

const RunnerLeaderboard = ({ data }: RunnerLeaderboardProps) => {
  return (
    <RunnerLeaderboardWrapper>
      {data.map((runnerStat, index) => <RunnerStatCard key={index} {...runnerStat} />)}
    </RunnerLeaderboardWrapper>
  )
}

export default RunnerLeaderboard