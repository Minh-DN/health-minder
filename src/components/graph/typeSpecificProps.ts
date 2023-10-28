import { LineGraphEnum } from "@/shared";
import { useTheme } from "@mui/material";

/* Return preset properties for each type of line graph */
export const getLineGraphTypeSpecificProps = (type: LineGraphEnum) => {
  switch (type) {
    case LineGraphEnum.Main_Dashboard_Line_Graph:
      return {
        // Base config
        xScale: { type: <const>"point" },
        yScale: {
          type: <const>"linear",
          min: 0,
          max: 12,
          stacked: true,
          reverse: false,
        },
        yFormat: ">-.2f",
        margin: { top: 20, right: 50, bottom: 50, left: 50 },

        // Grid and Axes config
        axisTop: null,
        axisRight: null,
        axisBottom: {
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: <const>"middle",
        },
        axisLeft: {
          tickSize: 0,
          tickPadding: 20,
          tickRotation: 0,
          legend: "Hours",
          legendOffset: -40,
          legendPosition: <const>"middle",
        },
        enableGridX: false,
        enableGridY: false,
        enableCrosshair: false,

        // Style config
        curve: <const>"natural",

        // Points config
        pointSize: 7,
        pointColor: { from: "color" },
        pointBorderWidth: 2,
        pointBorderColor: { from: "serieColor" },
        pointLabelYOffset: -2,
      };
  }
};
