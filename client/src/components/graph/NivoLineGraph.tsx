import { styled, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

import {
    MainDashboardLineGraphDataSeries
} from '@/pages/mainDashboard/components/MainDashboardLineGraph';
import { LineGraphEnum, WrapperProps } from '@/shared';
import { tokens } from '@/styles/theme';

import { getLineGraphCustomTooltip } from './lineGraphUtils';
import { getLineGraphTypeSpecificProps } from './typeSpecificProps';

type GraphWrapperProps = WrapperProps & {
  height: string;
  width?: string;
  style?: React.CSSProperties;
}

type LineGraphProps = {
  dataSeries: MainDashboardLineGraphDataSeries[]; // TODO: WHEN HAVE TIME, LOOK INTO MORE APPROPRIATE TYPE FOR THIS (@nivo/line/index.d.ts)
  type: LineGraphEnum;
  dimensions: { height: string, width?: string };
  style?: React.CSSProperties;
  lineColors?: string[];
}

const GraphWrapper = styled('div')<GraphWrapperProps>(({ height, width, style }) => ({
  height: height,
  width: width ? width : '100%',
  ...style,
  flex: `1 1 ${height}`
}))

const NivoLineGraph = ({ dataSeries, type, dimensions, lineColors, style }: LineGraphProps) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typeSpecificProps = getLineGraphTypeSpecificProps(type);
  const { height } = dimensions;

  return (
    // Nivo graphs must be wrapped in a component with explicitly defined height
    <GraphWrapper
      height={height}
      style={style}
    >
      <ResponsiveLine
        {...typeSpecificProps}
        data={dataSeries}
        colors={lineColors ? lineColors : { "scheme": "nivo" }}
        theme={{
          tooltip: {
            container: {
              background: colors.grey[900]
            },
          },
          axis: {
            ticks: {
              text: {
                fill: colors.grey[100]
              }
            },
            legend: {
              text: {
                fill: colors.grey[100],
                fontWeight: theme.fontWeight.bolder
              }
            },
          },
        }}
        useMesh={true}
        tooltip={({ point }) => {
          return (
            <div
              style={{
                color: point.color,
                background: colors.grey[900],
                whiteSpace: 'nowrap',
                padding: 12,
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
                borderRadius: '5px',
              }}
            >
              {getLineGraphCustomTooltip(type, point)}
            </div>
          )
        }}
      />
    </GraphWrapper>

  );
};

export default NivoLineGraph;