import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
    let barFillHeight = "0%";

    if (props.max > 0) {
      barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

  return (
    <div className="chart-bar">
      <div className="chart_bar__inner">
        {/* CSS style names as input to style */}
        <div className="chart_bar__fill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chart_bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;