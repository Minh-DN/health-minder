import { useCallback } from 'react';

import MetricCard from '@/components/MetricCard';
import { MainDashboardMetricEnum, formatDurationInWords } from '@/shared';

type MainDashboardMetricCardProps = {
  title: string;
  value: number;
  priorPeriodDelta: number;
}

const MainDashboardMetricCard = ({ title, value, priorPeriodDelta }: MainDashboardMetricCardProps) => {
  const formatValue = useCallback((input: number) => {
    switch (title) {
      case MainDashboardMetricEnum.AVERAGE_SLEEP_TIME:
      case MainDashboardMetricEnum.AVERAGE_ACTIVE_TIME:
        return formatDurationInWords(input);
      default:
        return input.toString();
    }
  }, [title]);

  return (
    <MetricCard value={formatValue(value)} title={title} priorPeriodDelta={priorPeriodDelta} />
  )
}

export default MainDashboardMetricCard