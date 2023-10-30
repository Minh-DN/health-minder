

import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { styled, useTheme } from '@mui/material';
import { useMemo } from 'react';

import CustomCard from './CustomCard';

import { Heading1, Title1 } from './';

// #region data types
type DeltaWrapperProps = {
  positive: boolean;
}

type DeltaProps = {
  deltaValue: number;
}

type MetricCardWrapperProps = {
  positive: boolean;
}

type MetricCardProps = {
  title: string;
  value: string | number;
  priorPeriodDelta: number;
}
// #endregion

const MetricCardWrapper = styled(CustomCard)<MetricCardWrapperProps>(({ theme, positive }) => ({
  flex: 1,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottom: `${theme.spacing(3)} solid transparent`,
  '&:hover': {
    borderBottom: `${theme.spacing(3)} solid ${positive ? theme.palette.success.main : theme.palette.error.main}`,
  },
}))

const MetricCardContent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: theme.spacing(10),
}))

const DeltaWrapper = styled('div')<DeltaWrapperProps>(({ theme, positive }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: `${theme.spacing(2)} ${theme.spacing(8)}`,
  borderRadius: theme.spacing(16),
  fontSize: theme.fontSize[1],
  background: positive ? theme.palette.success.light : theme.palette.error.light,
  border: `2px solid ${positive ? theme.palette.success.dark : theme.palette.error.dark}`,
}))

const DeltaValue = styled('div')(({ theme }) => ({
  color: 'black',
  fontWeight: theme.fontWeight.bolder,
}))

const DeltaIndicator = styled('div')(({ theme }) => ({
  marginBottom: '-5px', // to offset the extra bottm space that MUI icons have 
  color: theme.palette.primary.main
}))

const Delta = ({ deltaValue }: DeltaProps) => {
  const positive = useMemo(() => deltaValue >= 0, [deltaValue]);
  deltaValue = Math.abs(deltaValue);
  return (
    <DeltaWrapper positive={positive}>
      <DeltaIndicator>
        {positive ? <TrendingUpIcon fontSize='small' /> : <TrendingDownIcon fontSize='small' />}
      </DeltaIndicator>
      <DeltaValue>{deltaValue}%</DeltaValue>
    </DeltaWrapper>
  )
}

const MetricCard = ({ title, value, priorPeriodDelta }: MetricCardProps) => {
  const positive = useMemo(() => priorPeriodDelta >= 0, [priorPeriodDelta]);
  const theme = useTheme();

  return (
    <MetricCardWrapper padding={'2rem 0'} positive={positive}>
      <Title1>{title}</Title1>
      <MetricCardContent>
        <Heading1 theme={theme}>{value}</Heading1>
        {priorPeriodDelta !== undefined && <Delta deltaValue={priorPeriodDelta} />}
      </MetricCardContent>
    </MetricCardWrapper>
  )
}

export default MetricCard