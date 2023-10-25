import { MainDashboardMetricEnum, Metric } from "@/shared";
import { generateFloat, generateNumber } from "@/shared";
import { useCallback } from "react";
import dayjs from "dayjs";

export const useMainDashboardApiDemo = () => {
  // Metric Cards Data
  const getMainDashboardMetricCardDemoData = useCallback((): Metric[] => {
    const newMetrics: Metric[] = [];

    Object.values(MainDashboardMetricEnum).forEach((metricTitle) => {
      let metric = new Metric(metricTitle);

      switch (metricTitle) {
        case MainDashboardMetricEnum.AVERAGE_SLEEP_TIME:
          metric = {
            ...metric,
            // Generated values are in seconds
            value: generateFloat(21600, 32400),
            priorPeriod: generateFloat(21600, 32400),
            priorPeriodDelta: generateNumber(-25, 25),
          };
          break;
        case MainDashboardMetricEnum.AVERAGE_STEPS_TAKEN:
          metric = {
            ...metric,
            value: generateNumber(7000, 12000),
            priorPeriod: generateNumber(7000, 12000),
            priorPeriodDelta: generateNumber(-25, 25),
          };
          break;
        case MainDashboardMetricEnum.AVERAGE_ACTIVE_TIME:
          metric = {
            ...metric,
            value: generateFloat(720, 7200),
            priorPeriod: generateFloat(720, 7200),
            priorPeriodDelta: generateNumber(-25, 25),
          };
          break;
        default:
          break;
      }

      newMetrics.push(metric);
    });

    return newMetrics;
  }, []);

  // Line Graph Data
  const getMainDashboardLineGraphDemoData = useCallback(() => {
    // Labels for x-axis
    const labels: string[] = [];

    // Data series for y-axis
    const sleepTimeSeries = [];

    // Generate demo label data - calculate the start and end dates for the previous 7 days
    const currentDate = dayjs();
    for (let i = 0; i < 7; i++) {
      const previousDay = currentDate.subtract(i, "day");
      labels.push(previousDay.format("ddd DD-MM"));
    }

    // Generate demo data
    for (let i = 0; i < labels.length; i++) {
      sleepTimeSeries.push(generateFloat(6, 9));
    }
  }, []);

  return {
    getMainDashboardMetricCardDemoData,
  };
};
