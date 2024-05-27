// src/Components/ArrayVisualizer/ArrayVisualizer.js
import React from "react";
import "./ArrayVisualizer.css";

const ArrayVisualizer = ({ array, highlights, sortedIndices }) => {
  return (
    <div className="array-container">
      {array.map((value, idx) => {
        const isHighlighted = highlights.includes(idx);
        const isSorted = sortedIndices.includes(idx);
        const backgroundColor = isHighlighted
          ? "orange"
          : isSorted
          ? "#F0FF42"
          : "turquoise";

        return (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: backgroundColor,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default ArrayVisualizer;
