// src/Components/Navbar/Navbar.js
import React from "react";
import AlgorithmSelector from "../AlgorithmSelector/AlgorithmSelector";
import SpeedControl from "../SpeedControl/SpeedControl";
import "./Navbar.css";

const Navbar = ({
  setAlgorithm,
  setSpeed,
  speed,
  resetArray,
  sortArray,
  pause,
  pauseSorting,
  resumeSorting,
}) => {
  return (
    <div className="navbar">
      <div className="navbar-title">Sorting Visualizer</div>
      <div className="navbar-controls">
        <AlgorithmSelector onChange={setAlgorithm} />
        <SpeedControl onChange={setSpeed} value={speed} />
        <button className="navbar-button" onClick={sortArray}>
          Sort Array
        </button>
        <button className="navbar-button" onClick={resetArray}>
          Reset Array
        </button>
        {/* {pause ? (
          <button className="navbar-button" onClick={resumeSorting}>
            Resume
          </button>
        ) : (
          <button className="navbar-button" onClick={pauseSorting}>
            Pause
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
