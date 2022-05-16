import './Chart.css'
import ChartBar from './ChartBar'
import React from 'react';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(x => x.value);
    const dataPointMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dp, i) => {
        return (
          <ChartBar
            key={dp.label}
            label={dp.label}
            value={dp.value}
            maxValue={dataPointMax}
          />
        );
      })}
    </div>
  );
};

export default Chart;
