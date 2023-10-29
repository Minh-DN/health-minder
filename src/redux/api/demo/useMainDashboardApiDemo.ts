import dayjs from "dayjs";
import { useCallback } from "react";

import { MainDashboardMetricEnum, Metric } from "@/shared";
import { generateFloat, generateNumber } from "@/shared";

export enum MainDashboardLineGraphDataEnum {
  SLEEP_TIME = "Sleep Time",
  COMPUTER_SCREEN_TIME = "Computer Screen Time",
  PHONE_SCREEN_TIME = "Phone Screen Time",
  ACTIVE_TIME = "Active Time",
  SEDENTARY_TIME = "Sedentary Time",
}

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
            value: generateFloat(1800, 7200),
            priorPeriod: generateFloat(1800, 7200),
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
    const sleepTimeSeries: number[] = [];
    const computerTimeSeries: number[] = [];
    const phoneTimeSeries: number[] = [];
    const activeTimeSeries: number[] = [];
    const sedentaryTimeSeries: number[] = [];

    // Generate demo label data - calculate the start and end dates for the previous 7 days
    const currentDate = dayjs();
    for (let i = 0; i < 7; i++) {
      const previousDay = currentDate.subtract(i, "day");
      labels.push(previousDay.format("DD-MM"));
    }

    // Generate demo data
    for (let i = 0; i < labels.length; i++) {
      sleepTimeSeries.push(generateFloat(6, 9));
      computerTimeSeries.push(generateFloat(3, 12));
      phoneTimeSeries.push(generateFloat(3, 7));
      activeTimeSeries.push(generateFloat(0.5, 2));
      sedentaryTimeSeries.push(generateFloat(5, 8));
    }

    // Format data
    const dataSeries = [
      {
        name: MainDashboardLineGraphDataEnum.SLEEP_TIME,
        data: sleepTimeSeries,
        color: "#6F6AF8",
      },
      {
        name: MainDashboardLineGraphDataEnum.COMPUTER_SCREEN_TIME,
        data: computerTimeSeries,
        color: "#F8C8DC",
      },
      {
        name: MainDashboardLineGraphDataEnum.PHONE_SCREEN_TIME,
        data: phoneTimeSeries,
        color: "#C23B22",
      },
      {
        name: MainDashboardLineGraphDataEnum.ACTIVE_TIME,
        data: activeTimeSeries,
        color: "#16a085",
      },
      {
        name: MainDashboardLineGraphDataEnum.SEDENTARY_TIME,
        data: sedentaryTimeSeries,
        color: "#f39c12",
      },
    ];

    return {
      labels,
      dataSeries,
    };
  }, []);

  return {
    getMainDashboardMetricCardDemoData,
    getMainDashboardLineGraphDemoData,
  };
};
