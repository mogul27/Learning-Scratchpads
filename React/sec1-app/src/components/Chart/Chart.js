import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  return (
    <div className="chart">
      {/* Below gives you a chart bar component for every
         item in the dataPoints array*/}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxvalue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
