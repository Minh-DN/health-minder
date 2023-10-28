import React, { useMemo } from 'react';
import _ from "lodash";
import { NivoLineGraph } from '@/components';
import { LineGraphEnum } from '@/shared';

export type MainDashboardLineGraphDataSeries = {
  name: string;
  data: number[];
  color: string;
}

type MainDashboardLineGraphProps = {
  labels: string[];
  dataSeries: MainDashboardLineGraphDataSeries[];
}

const MainDashboardLineGraph = React.memo(({ labels, dataSeries }: MainDashboardLineGraphProps) => {

  // Format data in the format required by nivo line chart
  const graphData = useMemo(() => {
    return dataSeries.map(series => ({
      id: series.name,
      color: series.color,
      data: labels.map((label, labelIndex) => ({ x: label, y: _.toNumber(series.data[labelIndex]) }))
    }))
  }, [labels, dataSeries]);

  return (
    <NivoLineGraph
      data={graphData}
      type={LineGraphEnum.Main_Dashboard_Line_Graph}
      dimensions={{ height: '350px' }}
      style={{ padding: "0 0 5px 10px" }}
    />
  )
});

export default MainDashboardLineGraph