import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, useTheme } from '@mui/material';

import {
    MainDashboardLineGraphDataSeries
} from '@/pages/mainDashboard/components/MainDashboardLineGraph';
import { capitaliseWords } from '@/shared';

type DataSeriesTogglerProps = {
  allDataSeries: MainDashboardLineGraphDataSeries[];
  selectedDataSeries: MainDashboardLineGraphDataSeries[];
  toggleDataSeries: (id: string) => void;
}

const DataSeriesToggler = ({ allDataSeries, selectedDataSeries, toggleDataSeries }: DataSeriesTogglerProps) => {
  const theme = useTheme();
  return (
    <div style={{ margin: `${theme.spacing(20)} 0 0 ${theme.spacing(15)}` }}>
      {allDataSeries.map(series => {
        const selected = selectedDataSeries.some(selectedSeries => selectedSeries.id === series.id);

        return (
          <Button
            onClick={() => toggleDataSeries(series.id)}
            key={series.id}

            style={{
              backgroundColor: selected ? series.color : 'grey',
              color: 'white',
              fontSize: theme.fontSize[1],
              fontWeight: theme.fontWeight.bolder,
              borderRadius: theme.spacing(5),
              marginRight: theme.spacing(5),
              padding: `${theme.spacing(2)} ${theme.spacing(9)}`,
            }}
          >
            {capitaliseWords(series.id)}
            {!selected && <VisibilityOffIcon sx={{ fontSize: theme.fontSize[1], marginLeft: theme.spacing(4) }} />}
          </Button>
        )
      })}
    </div>
  )
}

export default DataSeriesToggler