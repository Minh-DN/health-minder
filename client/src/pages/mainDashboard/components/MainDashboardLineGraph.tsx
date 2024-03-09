import { styled, useTheme } from '@mui/material';
import { Datum } from '@nivo/line';
import _ from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';

import { NivoLineGraph } from '@/components';
import DataSeriesToggler from '@/components/graph/DataSeriesToggler';
import { MainDashboardLineGraphDemoData } from '@/redux';
import { LineGraphEnum, WrapperProps } from '@/shared';
import { tokens } from '@/styles';

export type MainDashboardLineGraphDataSeries = {
  id: string,
  data: Datum[],
  color: string
};

type MainDashboardLineGraphProps = {
  labels: string[];
  dataSeries: MainDashboardLineGraphDemoData[];
}

const MainDashboardLineGraphWrapper = styled('div')<WrapperProps>(({ theme, bgColor }) => ({
  display: 'flex',
  flexDirection: 'column',

  marginTop: '20px',
  backgroundColor: bgColor,
  borderRadius: '7px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
  width: '100%',
  padding: `0 0 ${theme.spacing(3)} ${theme.spacing(8)}`
}))

const MainDashboardLineGraph = React.memo(({ labels, dataSeries }: MainDashboardLineGraphProps) => {
  const [selectedDataSeries, setSelectedDataSeries] = useState<MainDashboardLineGraphDataSeries[]>([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Format data in the format required by nivo line chart
  const graphData: MainDashboardLineGraphDataSeries[] = useMemo(() => {
    return dataSeries.map(series => ({
      id: series.name,
      color: series.color,
      data: labels.map((label, labelIndex) => ({ x: label, y: _.toNumber(series.data[labelIndex]) }))
    }))
  }, [labels, dataSeries]);

  // Update the dataSeries state when graphData is available
  useEffect(() => {
    setSelectedDataSeries(graphData);
  }, [graphData]);

  // Handle data series toggling
  const handleToggleDataSeries = (id: string) => {
    setSelectedDataSeries((prevSelectedDataSeries) => {
      const isSeriesSelected = prevSelectedDataSeries.some((series) => series.id === id);

      if (isSeriesSelected) {
        // Data series is selected, so remove it
        return prevSelectedDataSeries.filter((series) => series.id !== id);
      } else {
        // Data series is not selected, so add it
        const dataSeriesToAdd = graphData.find((series) => series.id === id);
        if (dataSeriesToAdd) {
          return [...prevSelectedDataSeries, dataSeriesToAdd];
        } else {
          return prevSelectedDataSeries; // Return the same array if not found
        }
      }
    });
  };

  return (
    <MainDashboardLineGraphWrapper bgColor={colors.primary[400]}>
      <DataSeriesToggler
        allDataSeries={graphData}
        selectedDataSeries={selectedDataSeries}
        toggleDataSeries={handleToggleDataSeries}
      />
      <NivoLineGraph
        dataSeries={selectedDataSeries}
        lineColors={selectedDataSeries.map(data => data.color)}
        type={LineGraphEnum.Main_Dashboard_Line_Graph}
        dimensions={{ height: '350px' }}
        style={{ marginTop: theme.spacing(5) }}
      />
    </MainDashboardLineGraphWrapper>
  )
});

export default MainDashboardLineGraph