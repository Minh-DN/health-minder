import { LineGraphEnum, formatDurationInWords } from '@/shared';

const secondsInAnHour = 3600;

// TODO: INVESTIGATE SOLUTION FOR TYPE OF {pointData}

// @ts-ignore
export const MainDashboardLineGraphTooltip = ({ pointData }) => {
  const { x, y } = pointData.data;
  const formattedTime = formatDurationInWords(y * secondsInAnHour);

  return (
    <>
      <b>Date:</b>{` ${x}`}
      <br />
      <b>Time:</b>{` ${formattedTime}`}
    </>
  )
}

// @ts-ignore
export const getLineGraphCustomTooltip = (type: LineGraphEnum, pointData) => {
  switch (type) {
    case LineGraphEnum.Main_Dashboard_Line_Graph:
      return <MainDashboardLineGraphTooltip pointData={pointData} />

    default:
      break
  }
}