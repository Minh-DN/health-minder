import { LineGraphType } from "@/shared";
import { tokens } from "@/styles/theme";
import { useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { getLineGraphTypeSpecificProps } from "./typeSpecificProps";

// TODO: OPTIMISE ORGANISATION OF

interface ILineGraphProps {
  data: any;
  type: LineGraphType;
  dimensions: { height: number, width: number }
}

const NivoLineGraph = ({ data, type, dimensions }: ILineGraphProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const typeSpecificProps = getLineGraphTypeSpecificProps(type);
  const { height, width } = dimensions;

  return (
    // Nivo graphs must be wrapped in a component with explicitly defined height
    <div style={{ height: `${height}px`, width: `${width}px` }}>
      <ResponsiveLine
        {...typeSpecificProps}
        data={data}
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
                fill: colors.grey[100]
              }
            }
          }
        }}
        useMesh={true}
      />
    </div>

  );
};

export default NivoLineGraph;