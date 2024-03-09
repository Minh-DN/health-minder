import { Datum } from '@nivo/line';

import { LineGraphEnum } from '@/shared';

import { MainDashboardLineGraphTooltip } from './CustomTooltip';

export const getLineGraphCustomTooltip = (type: LineGraphEnum, pointData: Datum) => {
  switch (type) {
    case LineGraphEnum.Main_Dashboard_Line_Graph:
      return <MainDashboardLineGraphTooltip pointData={pointData} />

    default:
      break
  }
}