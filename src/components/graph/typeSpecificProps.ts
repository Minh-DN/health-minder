import { LineGraphType } from "@/shared";

/* Return preset properties for each type of line graph */
export const getLineGraphTypeSpecificProps = (type: LineGraphType) => {
  switch (type) {
    case LineGraphType.Main_Dashboard_Line_Graph:
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
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date",
          legendOffset: 36,
          legendPosition: <const>"middle",
        },
        axisLeft: {
          tickSize: 0,
          tickPadding: 10,
          tickRotation: 0,
          legend: "Hours",
          legendOffset: -30,
          legendPosition: <const>"middle",
        },
        enableGridX: false,
        enableGridY: true,
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
