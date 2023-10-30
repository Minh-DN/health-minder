import { Datum } from '@nivo/line';

import { formatDurationInWords } from '@/shared';

type LineGraphTooltipProps = {
  pointData: Datum
}

const secondsInAnHour = 3600;

export const MainDashboardLineGraphTooltip = ({ pointData }: LineGraphTooltipProps) => {
  const { x, y } = pointData.data;
  const formattedTime = formatDurationInWords(y * secondsInAnHour);

  return (
    <>
      <b>Date:</b>{` ${x}`}
      <br />
      <b>Duration:</b>{` ${formattedTime}`}
    </>
  )
}
