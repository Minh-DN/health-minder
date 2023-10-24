import { Heading1, LayoutSection } from '@/components';
import MetricCard from '@/components/MetricCard';
import { useMainDashboardApiDemo } from '@/redux';
import { Metric } from '@/shared'
import { useEffect, useState } from 'react'
import '@/styles/scss/pages/mainDashboard.scss';
import { useTheme } from '@mui/material';
import { MainDashboardMetricCard } from './components';

type Props = {}

const MainDashBoard = (props: Props) => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const theme = useTheme();

  // Get functions that generate demo data
  const {
    getMainDashboardMetricCardDemoData
  } = useMainDashboardApiDemo();

  // Use the demo data
  useEffect(() => {
    setMetrics(getMainDashboardMetricCardDemoData());
  }, []);

  return (
    <div className='main-dashboard__wrapper'>
      {/* PAGE HEADER */}
      <Heading1 theme={theme}>Main Dashboard</Heading1>

      {/* KEY STATS */}
      <div className='main-dashboard__key-stats'>

        {/* KPI AND CHART */}
        <div className='main-dashboard__kpi-and-graph-wrapper'>

          {/* KPI CARDS */}
          {/* TODO: REMOVE REDUNDANT CSS CLASS NAME */}
          {metrics && <LayoutSection title='Key Metrics' contentStyle={{ gap: '10px' }} noMargin={true}>
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
          <div className='main-dashboard__line-graph'>

          </div>
        </div>

        {/* LEADERBOARD */}
        <div className='main-dashboard__leaderboard'>

        </div>
      </div>
    </div>
  )
}

export default MainDashBoard