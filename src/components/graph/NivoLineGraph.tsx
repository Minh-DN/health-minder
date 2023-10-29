import { styled, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

import { LineGraphEnum } from "@/shared";
import { tokens } from "@/styles/theme";

import { getLineGraphTypeSpecificProps } from "./typeSpecificProps";
import { getLineGraphCustomTooltip } from "./CustomTooltip";

// TODO: OPTIMISE ORGANISATION OF TYPES LIKE GraphWrapperProps?
type GraphWrapperProps = {
  height: string;
  width?: number;
  bgColor: string;
  style?: React.CSSProperties;
}

type LineGraphProps = {
  data: any;
  type: LineGraphEnum;
  dimensions: { height: string, width?: string };
  style?: React.CSSProperties;
  lineColors?: string[];
}

const GraphWrapper = styled('div')<GraphWrapperProps>(({ height, width, bgColor, style }) => ({
  height: height,
  width: width ? width : '100%',
  marginTop: '20px',
  backgroundColor: bgColor,
  borderRadius: '7px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
  ...style
}))

const NivoLineGraph = ({ data, type, dimensions, style, lineColors }: LineGraphProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typeSpecificProps = getLineGraphTypeSpecificProps(type);
  const { height } = dimensions;

  return (
    // Nivo graphs must be wrapped in a component with explicitly defined height
    <GraphWrapper
      height={height}
      bgColor={colors.primary[400]}
      style={style}
    >
      <ResponsiveLine
        {...typeSpecificProps}
        data={data}
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