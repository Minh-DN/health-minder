import '@/styles/scss/pages/mainDashboard.scss';

import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import { Heading1, LayoutSection } from '@/components';
import { MainDashboardLineGraphDemoData, useMainDashboardApiDemo } from '@/redux';
import { Metric, RunnerStat } from '@/shared';

import { MainDashboardLineGraph, MainDashboardMetricCard } from './components';
import RunnerLeaderboard from './components/RunnerLeaderboard';

const MainDashboard = () => {
  // KPI cards data
  const [metrics, setMetrics] = useState<Metric[]>([]);

  // Line graph data
  const [graphLabels, setGraphLabels] = useState<string[]>([]);
  const [graphDataSeries, setGraphDataSeries] = useState<MainDashboardLineGraphDemoData[]>([]);

  // Runner leaderboard data
  const [runnerLeaderboardStats, setRunnerLeaderboardStats] = useState<RunnerStat[]>([]);

  const theme = useTheme();

  // Get functions that generate demo data
  const {
    getMainDashboardMetricCardDemoData,
    getMainDashboardLineGraphDemoData,
    getRunnerLeaderboardData,
  } = useMainDashboardApiDemo();

  // Use the demo data
  useEffect(() => {
    // KPI cards data
    setMetrics(getMainDashboardMetricCardDemoData());

    // Line graph data
    const { labels, dataSeries } = getMainDashboardLineGraphDemoData();
    setGraphLabels(labels);
    setGraphDataSeries(dataSeries);

    // Runner leaderboard data
    setRunnerLeaderboardStats(getRunnerLeaderboardData());
  }, []);

  return (
    <div className='main-dashboard__wrapper'>
      {/* PAGE HEADER */}
      <div className='main-dashboard__heading-wrapper'>
        <Heading1 theme={theme} color={theme.palette.secondary.main}>Health & Activity Snapshot</Heading1>
      </div>

      {/* KEY STATS */}
      <div className='main-dashboard__key-stats'>

        {/* KPI AND CHART */}
        <div className='main-dashboard__kpi-and-graph-wrapper'>

          {/* KPI CARDS */}
          {metrics && <LayoutSection
            title='Performance Indicators'
            contentStyle={{ gap: '10px' }}
            noMargin={true}
          >
            {metrics.map((metricData, index) => {
              return (
                <MainDashboardMetricCard
                  title={metricData.title}
                  value={metricData.value}
                  priorPeriodDelta={metricData.priorPeriodDelta}
                  key={index}
                />
              )
            })}
          </LayoutSection>}

          {/* LINE CHART */}
          <LayoutSection
            showDivider={true}
            noMargin={true}
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
            }}
            contentStyle={{
              gap: '10px',
              flex: 1,
            }}
          >
            <MainDashboardLineGraph
              labels={graphLabels}
              dataSeries={graphDataSeries}
            />
          </LayoutSection>
        </div>

        {/* LEADERBOARD */}
        <div className='main-dashboard__leaderboard'>
          <LayoutSection title='Monthly Run Leaderboard' noMargin={true}>
            <RunnerLeaderboard data={runnerLeaderboardStats}></RunnerLeaderboard>
          </LayoutSection>
        </div>
      </div>
    </div>
  )
}

export default MainDashboard