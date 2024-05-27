// src/components/SpeedControl/SpeedControl.js
import React from "react";
import "./SpeedControl.css";

const SpeedControl = ({ onChange, value }) => {
  return (
    <div className="speed-control">
      <label htmlFor="speed-range">Speed:</label>
      <input
        id="speed-range"
        type="range"
        min="1"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
};

export default SpeedControl;
